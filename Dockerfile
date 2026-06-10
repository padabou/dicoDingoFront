# ============================================
# Stage 1: Dependencies
# ============================================
FROM node:24-alpine AS deps
RUN apk add --no-cache libc6-compat

# Installer pnpm globalement
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copier UNIQUEMENT les fichiers de dépendances
COPY package.json ./
COPY pnpm-lock.yaml ./

# Autoriser pnpm à exécuter les scripts de build des dépendances (sharp, esbuild, etc.)
ENV PNPM_FLAGS="--allow-builds"

# Installer les dépendances de production
RUN pnpm install --frozen-lockfile --prod $PNPM_FLAGS

# ============================================
# Stage 2: Builder
# ============================================
FROM node:24-alpine AS builder

# Installer pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copier les node_modules de production depuis deps
COPY --from=deps /app/node_modules ./node_modules

# Copier tous les fichiers du projet
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
# Réassignation des flags pour cette étape de build complète
ENV PNPM_FLAGS="--allow-builds"

# Installer TOUTES les dépendances (dev inclus) pour le build
RUN pnpm install --frozen-lockfile $PNPM_FLAGS

# Build Next.js
RUN pnpm run build

# ============================================
# Stage 3: Runner (Production)
# ============================================
FROM node:24-alpine AS runner

# Installer pnpm (nécessaire si tu utilises pnpm dans CMD)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Créer utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers buildés depuis builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
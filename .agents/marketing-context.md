# ÉQUIDICO - Marketing Context

> Auto-draft from codebase + audit Evviva (13/11/2026). Review and correct assumptions marked 🔴.

**Last updated:** 2026-11-13  
**Domain:** https://equidico.fr  
**Primary goal:** Organic SEO traffic + AdSense revenue (not B2B lead gen)

---

## 1. Product Overview

- **One-liner:** Dictionnaire / encyclopédie équestre en français - races, robes, disciplines, matériel, métiers.
- **What it does:** Articles structurés par catégories (types), recherche, contribution externe, contact. Monétisation via Google AdSense.
- **Category:** Contenu éditorial / media équestre / knowledge base
- **Type:** Content site (not SaaS)
- **Business model:** Free content + AdSense. Contribution via YouForm. Contact via formulaire maison.

## 2. Target Audience

- **Who:** Cavaliers débutants à confirmés, propriétaires de chevaux, passionnés FR
- **Primary use case:** Comprendre une race, une discipline, du matériel ou un métier équestre
- **Jobs to be done:**
  1. Trouver une info claire sur un sujet cheval (race, robe, discipline…)
  2. Apprendre / se renseigner avant achat ou pratique
  3. Découvrir du contenu connexe (maillage catégories)

## 3. Personas (assumed 🔴)

| Role | Care about | Challenge | Value |
|------|------------|-----------|-------|
| Cavalier curieux | Fiches lisibles, SEO Google | Infos éparpillées / foireuses | Une source FR fiable |
| Propriétaire | Matériel, quotidien, santé pratique | Temps limité | Articles concrets |
| Contributeur | Partager expertise | Parcours contrib friction | Formulaire /contact path |

## 4. Problems & Pain Points

- Infos équestres diluées entre forums, Wikipedia, blogs commerçants
- Besoin de pages indexables, stables, par type (race, discipline…)
- Mobile lent (TBT ads) nuit à la rétention 🟡

## 5. Competitive Landscape (assumed 🔴)

- **Direct:** blogs équestres FR, encyclos amateurs
- **Secondary:** Wikipedia, sites fédérations, marchands matériel
- **Indirect:** YouTube / TikTok équestre
- Différenciation actuelle: volume de fiches typées + marque ÉQUIDICO 🟡

## 6. Differentiation

- Structure par **types** (robe, race, cheval-quotidien, discipline, matériel-cheval, matériel-cavalier, métier, blog, anecdote)
- Positionnement “on vous renseigne, on vous enseigne, on vous informe”
- Pas de boutique; contenu d’abord

## 7. Objections & Anti-Personas

- Anti-persona: prospect B2B cherchant téléphone/WhatsApp pour devis (audit Evviva CRO) - **hors modèle**
- Objection: “encore un blog ads” → qualité éditoriale + structure dico

## 8. Switching Dynamics

- **Push:** Google résultat médiocre / incomplet
- **Pull:** Fiche claire + maillage catégories
- **Habit:** Forums / réseaux
- **Anxiety:** Contenu ads-heavy / trust

## 9. Customer Language

- **Use:** cheval, race, robe, discipline, matériel, cavalier, métier équestre, équitation
- **Avoid:** SaaS jargon, “conversion funnel”, lead magnet
- Slogan site: “EQUIDICO, le blog qui dit tout sur les chevaux” (à faire évoluer vers “dico” si rebrand copy)

## 10. Brand Voice

- Ton: pédagogique, accessible, passionné
- Style: direct, français
- Personnalité: clair, utile, terre-à-terre
- DO: titres descriptifs, H1 unique, meta par page
- DON’T: push commercial téléphone; clutter CRO

## 11. Style Guide

- Marque: **ÉQUIDICO** / EQUIDICO
- Domaine canonique: **equidico.fr** (pas .com)
- Couleurs: bleu `#00539C`, sauge `#a4c2a5`, rouge soft `#c27c6a`, fond `#EAF0F6` / `#f5f5f5`
- Langue site: `fr` uniquement (i18n config legacy unused)

## 12. Proof Points

- Volume: ~300+ pages indexables (audit)
- Lighthouse SEO 100 (audit); perf mobile à améliorer
- GA4 présent

## 13. Content & SEO Context

- Clusters: races, robes, disciplines, matériel cheval/cavalier, métiers, blog, anecdotes
- URLs: `/article/{category}/{slug}`
- Priorités techniques: sitemap indexable, JSON-LD Article+Organization, titles uniques, CWV/TBT
- Conversion KPI: pages vues, engagement, AdSense RPM - **pas** formulaires contact

## 14. Goals

- **Primary:** Trafic SEO + revenu AdSense
- **Secondary:** Contributions éditoriales
- **Non-goal:** Lead gen téléphone / WhatsApp

---

## Confidence legend

- 🟢 Verified in repo / live config
- 🟡 Inferred from code + audit
- 🔴 Assumed - needs founder confirmation

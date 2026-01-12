"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Évite les erreurs d'hydratation
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="inline-flex items-center">
            <SunIcon className="w-4 h-4 mr-2" />

            <select
                name="themeSwitch"
                value={theme === "system" ? "system" : resolvedTheme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-custom-broken-white dark:text-gray-200 text-gray-800"
            >
                <option value="system">System</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
    );
}

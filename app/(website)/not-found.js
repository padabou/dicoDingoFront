"use client";
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                    Page introuvable
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Retour à l'accueil
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        Page précédente
                    </button>
                </div>

                {/* Optional: Illustration */}
                <div className="mt-12">
                    <svg
                        className="w-64 h-64 mx-auto text-gray-300 dark:text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0.5}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
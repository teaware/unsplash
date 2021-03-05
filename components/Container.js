import Head from "next/head";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: "water 🦦 – Developer, writer, creator.",
    description: `Front-end developer, blog writer, and some kind of creator.`,
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="flex flex-col w-full min-h-screen font-sans text-base antialiased text-gray-800 bg-white dark:text-white dark:bg-gray-600">
        <div className="fixed top-6 left-6 lg:top-12 lg:left-12 2lg:top-24 2lg:left-24 mt-safe-top z-10">
          <Link href="/collection">
            <a className="font-serif text-3xl underline hover:no-underline">
              Jas
            </a>
          </Link>
        </div>
        <div className="fixed bottom-6 left-6 lg:bottom-12 lg:left-12 2lg:bottom-24 2lg:left-24 z-10">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-full select-none outline-none focus:outline-none border-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1 -1 24 24"
                fill="currentColor"
                className="h-7 w-7 text-gray-700 dark:text-white"
              >
                {theme === "dark" ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  />
                ) : (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                )}
              </svg>
            )}
          </button>
          <Link href="/about">
            <a className="font-serif text-3xl underline hover:no-underline">
              about
            </a>
          </Link>
        </div>

        <main>
          <div className="max-w-xl px-6 ml-auto mr-0 lg:max-w-4xl lg:px-12 xl:max-w-5xl 2xl:max-w-7xl 2xl:px-24">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

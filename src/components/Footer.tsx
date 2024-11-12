"use client";

import { pages } from "@/constants";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Socials } from "./Socials";

interface FooterProps {
  location: 'home' | 'docs';
}

export const Footer: React.FC<FooterProps> = ({
  location
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`w-full bg-background flex flex-col items-center justify-between transition-all duration-300 border-t-2 ${location === 'home' ? 'p-12' : 'p-12'}`}>
      <div className="flex items-end justify-between w-full space-x-10">
        <div className={location === 'home' ? 'flex flex-col space-y-8' : 'flex items-center w-full justify-around'}>
          <div className="flex flex-col space-y-2">
            <p>Maintained By</p>
            <p className="text-4xl font-bold">Shantanu Mahale</p>
            <p className="text-sm font-light">Software Engineer | Finance Enthusiast | Writer</p>
            <p className="cursor-pointer underline" onClick={() => {
              window.open("https://shantanubr.vercel.app", "_blank");
            }}>shantanubr.com</p>
          </div>
          <Socials />
        </div>
        {location === 'home' && (
          <div className="flex">
            {pages.map((page) => (
              <div key={page.title} className={`flex flex-col ${location === 'home' ? 'mx-8' : 'mx-2'}`}>
                <p className="font-semibold mb-2">{page.title}</p>
                {page.subpages.map((subpage) => (
                  <div key={subpage.title} className="text-sm my-1">
                    <p className="cursor-pointer hover:underline hover:text-blue-800 dark:hover:text-blue-400"
                      onClick={() => {
                        window.open(subpage.href, "_blank");
                      }}
                    >
                      {subpage.title}
                    </p>
                  </div>
                ))}
                </div>
            ))}
          </div>
        )}

      </div>

      <div className={`flex items-center justify-around text-xs text-gray-700 dark:text-slate-300 ${location === 'home' ? 'mt-16' : 'mt-8'}`}>
        <Link href={"/meta/privacy"} className="px-1">
          Privacy Policy
        </Link>
        <Link href={"/meta/terms"} className="px-1">
          Terms of Use
        </Link>
      </div>
      <div className="mt-1 text-sm">
        <p>
          Made with{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            {theme === "light" ? "🖤" : "🤍"}
          </a>
        </p>
      </div>
    </div>
  );
};

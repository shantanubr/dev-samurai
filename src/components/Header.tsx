'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { pages } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const ListItem: React.FC<{
    title: string;
    href: string;
  }> = ({ title, href }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <div
            onClick={() => router.push(href)}
            className={
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
            }
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
          </div>
        </NavigationMenuLink>
      </li>
    );
  };
  return (
    <div
      className={`fixed w-full bg-background top-0 z-50 py-4 px-6 flex items-center justify-between transition-all duration-300 ${
        pathname === '/' ? '' : 'border-b-2 dark:border-neutral-900'
      }`}
    >
      <div
        className='hidden sm:flex w-2/12'
        onClick={() => router.replace('/')}
      >
        <p className='font-bold cursor-pointer'>{`</> Dev Samurai`}</p>
      </div>
      <div className='flex items-center space-x-3'>
        {pages.map((page, pageIdx) => (
          <NavigationMenu key={pageIdx}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{page.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-2 w-max p-2'>
                    {page.subpages.map((subpage, subpageIdx) => (
                      <ListItem
                        key={subpageIdx}
                        title={subpage.title}
                        href={subpage.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

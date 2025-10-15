"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function NavLink({ href, children }: PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        'px-2 py-1 rounded-md transition-colors ' +
        (isActive
          ? 'bg-gray-200 text-gray-900'
          : 'hover:bg-gray-100 text-gray-700')
      }
    >
      {children}
    </Link>
  );
}




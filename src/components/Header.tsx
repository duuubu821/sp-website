import Link from 'next/link';
import { NavLink } from '@/components/NavLink';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/60 backdrop-blur">
      <div className="container-max py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-gray-900">SP</Link>
        <nav className="flex gap-6 text-sm text-gray-700">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}




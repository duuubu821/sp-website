export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container-max text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} SP. All rights reserved.</p>
        <p className="muted">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}




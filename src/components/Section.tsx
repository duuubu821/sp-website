import { PropsWithChildren } from 'react';

export function Section({ title, subtitle, children }: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <section className="mb-10">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {subtitle ? <p className="muted mt-1">{subtitle}</p> : null}
      </header>
      <div className="card p-6">{children}</div>
    </section>
  );
}




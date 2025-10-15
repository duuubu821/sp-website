import { Section } from '@/components/Section';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Section title="Hello, I'm Sam Parker" subtitle="Designer-turned-developer building simple, thoughtful products.">
        <div className="prose max-w-none">
          <p>
            I enjoy crafting clean interfaces and robust systems. This site is a
            lightweight draft with a light grey theme. Content is placeholder
            for now.
          </p>
        </div>
      </Section>

      <Section title="Highlights" subtitle="Recent things I'm proud of">
        <ul className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="font-medium text-gray-900">Milestone {i}</h3>
              <p className="mt-1 text-sm text-gray-600">Brief description of this milestone and impact.</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}




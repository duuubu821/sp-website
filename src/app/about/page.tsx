import { Section } from '@/components/Section';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Section title="About Me" subtitle="A little background">
        <div className="space-y-4">
          <p className="text-gray-700">
            I'm a full-stack developer with a background in product design. I
            focus on clarity, accessibility, and maintainable systems.
          </p>
          <p className="text-gray-700">
            Over the past few years, I've worked on design systems, data tools,
            and content platforms—collaborating closely with cross‑functional
            teams to deliver reliable software.
          </p>
        </div>
      </Section>

      <Section title="Skills" subtitle="Tools I use regularly">
        <ul className="flex flex-wrap gap-2">
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'Postgres', 'Prisma'].map((s) => (
            <li key={s} className="rounded-md bg-gray-100 px-2 py-1 text-sm text-gray-700">{s}</li>
          ))}
        </ul>
      </Section>
    </div>
  );
}




import { Section } from '@/components/Section';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Section title="Hello, I'm Kenneth" subtitle="Curious mind, hands-on builder. I love leading teams, writing code, and solving problems that connect people and ideas.">
        <div className="prose max-w-none">
          <p>
          Hi there! I’m Kenneth — an engineer, developer, and project enthusiast. I love 
          turning ideas into working systems, from code to deployment. Feel free to explore my site to get to
          know me better.
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




import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';

const MOCK_PROJECTS = [
  {
    title: 'GreyMatter UI',
    description: 'A minimalist component library focused on clarity and contrast.',
    tags: ['TypeScript', 'React', 'Tailwind'],
    link: 'https://example.com/gm'
  },
  {
    title: 'Snapshot CMS',
    description: 'Static-first content system with inline editing.',
    tags: ['Next.js', 'MDX', 'Vercel']
  },
  {
    title: 'ChartFlow',
    description: 'Composable charts built with accessibility in mind.',
    tags: ['D3', 'React', 'A11y']
  }
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <Section title="Projects" subtitle="Selected work and experiments">
        <div className="grid gap-4 sm:grid-cols-2">
          {MOCK_PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}




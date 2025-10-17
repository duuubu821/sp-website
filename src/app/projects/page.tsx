import { Section } from '@/components/Section';
import { CategoryCard } from '@/components/CategoryCard';
import { SmallProjectCard } from '@/components/SmallProjectCard';

const AI_PROJECTS = [
  {
    title: 'AI Automation Consultant & Trainer (Intrinsic Behavioral)',
    description: 'Conducted workshops and consulting sessions for teams adopting AI agents and automation using PowerApps and Copilot Studio. Guided integration strategies, workflow automation design, and effective use of AI tools for business processes.',
    tags: ['AI', 'Automation', 'Powerapps', 'Copilot Studio', 'Consulting', 'Training', 'Workshops', 'Microsoft 365', 'Workflow Optimization'] as const,
  }
] as const;

const ENG_PROJECTS = [
  {
    title: 'Project Manager & QA Coordinator (Able AI)',
    description: 'Managed task pipelines, QA, and team coordination for a web app project, ensuring consistent delivery and workflow alignment between developers and stakeholders.',
    tags: ['Project Management', 'QA', 'Scrum', 'Agile', 'AI'] as const,
    link: 'https://able-ai-mvp-able-ai-team.vercel.app/'
  },
  {
    title: 'IT Support & Systems Technician (ORION Studios)',
    description: 'Assembled and maintained custom computer systems, handled troubleshooting and performance optimization, and provided end-to-end technical support for clients and internal setups.',
    tags: ['Engineering', 'Hardware', 'Systems', 'Diagnostics', 'Optimization'] as const,
  },
  {
    title: 'Home Server Infrastructure',
    description: 'Deployed and maintained self-hosted servers for web, media, and automation projects. Implemented containerized services, network configurations, and performance monitoring for stable, scalable operation.',
    tags: ['Linux', 'Networking', 'Docker', 'Self-Hosting', 'Cloud', 'DevOps', 'System Administration'] as const,
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <Section title="Projects" subtitle="Explore by category">
        <div className="grid gap-4">

          <CategoryCard title="Engineering & Development" subtitle="Design, Optimization, and Implementation">
            <div className="grid gap-3 sm:grid-cols-2">
              {ENG_PROJECTS.map((p) => (
                <SmallProjectCard key={p.title} project={p} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard title="AI & Automations" subtitle="Smart Systems, Workflow Automation, and Applied AI">
            <div className="grid gap-3 sm:grid-cols-2">
              {AI_PROJECTS.map((p) => (
                <SmallProjectCard key={p.title} project={p} />
              ))}
            </div>
          </CategoryCard>

        </div>
      </Section>
    </div>
  );
}




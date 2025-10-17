import { Section } from '@/components/Section';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Section title="About Me" subtitle="A little background">
        <div className="space-y-4 text-justify">
          <p className="text-gray-700">
          I’m a Chemical Engineering graduate with a strong foundation in programming, systems design, and 
          project management. My background in engineering has developed my analytical and 
          problem-solving skills, while my experience in software development and automation has strengthened 
          my technical versatility.
          </p>
          <p className='text-gray-700'>
          I’ve led and supported projects that combine technical implementation and team coordination, 
          ensuring efficient workflows and quality results. I’m driven by creating practical, data-informed 
          solutions that bridge engineering and technology to improve processes and performance.
          </p>
          <p className="text-gray-700">
          Over the past few years, I’ve developed and managed automation tools, 
          server setups, and web applications, working closely with cross-functional teams to 
          improve performance and streamline workflows.
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




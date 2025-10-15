import { Section } from '@/components/Section';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <Section title="Contact" subtitle="Say hello">
        <div className="space-y-4">
          <p className="text-gray-700">
            I'm currently open to select freelance and collaboration opportunities.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>
              Email: <a className="underline hover:text-gray-900" href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              LinkedIn: <a className="underline hover:text-gray-900" href="https://linkedin.com/in/example" target="_blank" rel="noreferrer noopener">linkedin.com/in/example</a>
            </li>
            <li>
              GitHub: <a className="underline hover:text-gray-900" href="https://github.com/example" target="_blank" rel="noreferrer noopener">github.com/example</a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}




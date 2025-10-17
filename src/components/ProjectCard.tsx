type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{project.description}</p>
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-gray-700 hover:underline"
          >
            Visit
          </a>
        ) : null}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}




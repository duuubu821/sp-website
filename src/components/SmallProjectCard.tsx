type SmallProject = {
  title: string;
  description?: string;
  link?: string;
  tags?: readonly string[];
};

export function SmallProjectCard({ project }: { project: SmallProject }) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-4 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-medium text-gray-900">{project.title}</h4>
          {project.description ? (
            <p className="mt-1 text-xs text-gray-600">{project.description}</p>
          ) : null}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs text-gray-700 hover:underline"
          >
            Visit
          </a>
        ) : null}
      </div>
      {project.tags && project.tags.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}



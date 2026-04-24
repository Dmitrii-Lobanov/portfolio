import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          {title}
        </h4>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {(link || github) && (
        <div className="absolute top-6 right-6 flex gap-3 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
              <span className="sr-only">Link</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

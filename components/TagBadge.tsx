import JavaScriptIcon from "react-devicons/javascript/plain";
import ReactIcon from "react-devicons/react/original";
import TypeScriptIcon from "react-devicons/typescript/plain";

const icons = { React: ReactIcon, TypeScript: TypeScriptIcon, JavaScript: JavaScriptIcon };
export default function TagBadge({ content }: { content: string }) {
  const Icon = icons[content as keyof typeof icons];
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
      {Icon && <Icon size="12" aria-hidden="true" />}
      {content}
    </span>
  );
}

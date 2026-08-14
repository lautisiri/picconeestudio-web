import type { LucideIcon } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

type ServiceCardProps = {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
};

export function ServiceCard({
  index,
  icon: Icon,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium sm:p-9">
      <div className="flex items-start justify-between">
        <span className="font-display text-lg font-medium text-ink/25">
          {index}
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-500 ease-premium group-hover:bg-navy group-hover:text-gold-light">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-medium text-ink">
        {title}
      </h3>
      <p className="mt-3.5 flex-1 font-sans text-sm leading-relaxed text-ink/60">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}

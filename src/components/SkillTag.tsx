import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className }) => {
  return (
    <div
      className={cn(
        "bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-sm",
        "tech-tag-glow transition-all duration-300 cursor-default",
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillTag;

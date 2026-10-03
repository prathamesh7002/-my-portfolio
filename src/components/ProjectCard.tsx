import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import SkillTag from "./SkillTag";
import { cn } from "@/lib/utils";
import { Trophy, GraduationCap, CheckCircle2, UserCheck, Sparkles, ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isWinner = project.badgeType === 'winner';
  const isCapstone = project.badgeType === 'capstone';
  const isFeatured = isWinner || isCapstone;

  return (
    <Card 
      className={cn(
        "flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border animate-zoom-in",
        isWinner 
          ? "border-amber-500/60 shadow-amber-500/10 bg-gradient-to-b from-card via-card to-amber-500/5 ring-1 ring-amber-500/20" 
          : isCapstone 
            ? "border-primary/60 shadow-primary/10 bg-gradient-to-b from-card via-card to-primary/5 ring-1 ring-primary/20"
            : "border-border/60 hover:border-primary/50 bg-card"
      )} 
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top Banner for Winner / Capstone */}
      {project.badge && (
        <div className={cn(
          "px-4 py-1.5 text-xs font-semibold flex items-center justify-between",
          isWinner ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-b border-amber-500/20" :
          isCapstone ? "bg-primary/15 text-primary dark:text-primary-foreground border-b border-primary/20" :
          "bg-secondary/40 text-muted-foreground border-b border-border/40"
        )}>
          <span className="flex items-center gap-1.5 font-bold">
            {isWinner && <Trophy className="h-3.5 w-3.5 text-amber-500" />}
            {isCapstone && <GraduationCap className="h-3.5 w-3.5 text-primary" />}
            {project.badge}
          </span>
          {isWinner && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-white">
              1st Prize
            </span>
          )}
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="font-headline text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </CardTitle>
        {project.subtitle && (
          <p className="text-xs font-medium text-muted-foreground mt-1">
            {project.subtitle}
          </p>
        )}
        {project.role && (
          <div className="flex items-center text-xs font-medium text-primary mt-1 gap-1.5">
            <UserCheck className="h-3.5 w-3.5 shrink-0" />
            <span>Role: {project.role}</span>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.techStack.map((tech) => (
            <SkillTag 
              key={tech} 
              name={tech} 
              className={cn(
                "px-2 py-0.5 text-[11px] rounded-md font-medium transition-colors",
                isWinner 
                  ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20" 
                  : "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground/90 border border-primary/15"
              )}
            />
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-3 pt-0">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </CardDescription>

        {project.highlights && project.highlights.length > 0 && (
          <div className="pt-2 border-t border-border/50">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70 block mb-1.5">
              Key Engineering Features:
            </span>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start text-xs text-muted-foreground leading-snug">
                  <CheckCircle2 className={cn(
                    "h-3.5 w-3.5 mr-1.5 shrink-0 mt-0.5",
                    isWinner ? "text-amber-500" : "text-primary"
                  )} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 pt-3 border-t border-border/50 bg-secondary/10">
        {project.links.map((link, linkIndex) => (
          <Button
            key={`${link.type}-${linkIndex}`}
            asChild
            variant={link.type === 'live' ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "glow-on-hover text-xs font-medium h-8 px-3",
              link.type === 'live' 
                ? (isWinner ? "bg-amber-500 hover:bg-amber-600 text-white" : "hover:shadow-glow-primary") 
                : "hover:shadow-glow-accent"
            )}
          >
            {link.url ? (
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-1.5 h-3.5 w-3.5" /> {link.text}
              </Link>
            ) : (
              <Link href="#contact">
                <link.icon className="mr-1.5 h-3.5 w-3.5" /> {link.text}
              </Link>
            )}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

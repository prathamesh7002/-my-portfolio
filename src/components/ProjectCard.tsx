import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import SkillTag from "./SkillTag";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-103 transition-all duration-300 group animate-zoom-in" style={{animationDelay: `${index * 0.1}s`}}>
      {project.imageSrc && (
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            data-ai-hint={project.imageHint || "project technology"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl text-foreground">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <SkillTag key={tech} name={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground/80 tech-tag-glow"/>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
        {project.links.map((link) => (
          <Button
            key={link.type}
            asChild
            variant={link.type === 'live' ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "glow-on-hover",
              link.type === 'live' ? "hover:shadow-glow-primary" : "hover:shadow-glow-accent"
            )}
          >
            {link.url ? (
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2 h-4 w-4" /> {link.text}
              </Link>
            ) : (
              // For "Details on request", link to contact section with prefill (optional advanced)
              // Or simply display text if no URL. Here, linking to contact page as an example.
              <Link href="#contact">
                <link.icon className="mr-2 h-4 w-4" /> {link.text}
              </Link>
            )}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, Layers } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'python' | 'frontend'>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.badgeType === 'winner' || project.badgeType === 'capstone';
    if (filter === 'python') return project.techStack.some(t => t.toLowerCase().includes('python') || t.toLowerCase().includes('django') || t.toLowerCase().includes('flask'));
    if (filter === 'frontend') return project.category === 'frontend' || project.techStack.includes('HTML5');
    return true;
  });

  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Full-Stack, AI & Systems</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Featured Projects & Works
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore my national award-winning applications, diploma capstone architecture, and deployed web systems.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
            className="rounded-full text-xs"
          >
            All Projects ({projectsData.length})
          </Button>
          <Button
            variant={filter === 'featured' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('featured')}
            className="rounded-full text-xs gap-1.5"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-500" />
            Flagship & Capstones
          </Button>
          <Button
            variant={filter === 'python' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('python')}
            className="rounded-full text-xs"
          >
            Django & Python
          </Button>
          <Button
            variant={filter === 'frontend' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('frontend')}
            className="rounded-full text-xs"
          >
            Frontend & UI/UX
          </Button>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={
              // If showing all or featured, give top 2 cards full span on 2-col or special treatment
              (filter === 'featured' || (filter === 'all' && (project.badgeType === 'winner' || project.badgeType === 'capstone')))
                ? "col-span-1 md:col-span-1 lg:col-span-1"
                : "col-span-1"
            }
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

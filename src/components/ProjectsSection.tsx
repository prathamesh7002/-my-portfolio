import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/data";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="bg-background">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

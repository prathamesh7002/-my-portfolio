import SectionWrapper from "./SectionWrapper";
import SkillTag from "./SkillTag";
import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  Cpu,
  Layers 
} from "lucide-react";

const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case 'Languages':
      return <Code2 className="h-5 w-5 text-primary" />;
    case 'Frontend':
      return <Layout className="h-5 w-5 text-blue-500" />;
    case 'Backend & APIs':
      return <Server className="h-5 w-5 text-emerald-500" />;
    case 'Databases & Storage':
      return <Database className="h-5 w-5 text-purple-500" />;
    case 'AI & Cloud Services':
      return <Sparkles className="h-5 w-5 text-amber-500" />;
    case 'Tools & Security':
      return <ShieldCheck className="h-5 w-5 text-teal-500" />;
    default:
      return <Layers className="h-5 w-5 text-primary" />;
  }
};

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
          <Cpu className="h-3.5 w-3.5" />
          <span>Technical Proficiencies</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          My Tech Stack & Toolkit
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Technologies and tools I leverage to build production-grade web systems, REST APIs, and AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skillsData.map((category, index) => (
          <Card 
            key={category.name} 
            className="shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border/60 hover:border-primary/50 bg-card flex flex-col" 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg md:text-xl font-headline text-foreground">
                <div className="h-9 w-9 rounded-lg bg-secondary/80 flex items-center justify-center mr-3 shrink-0">
                  {getCategoryIcon(category.name)}
                </div>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

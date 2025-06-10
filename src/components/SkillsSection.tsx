import SectionWrapper from "./SectionWrapper";
import SkillTag from "./SkillTag";
import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers } from "lucide-react";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30 dark:bg-secondary/10">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">My Tech Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
                <Layers className="mr-3 h-7 w-7 text-primary" />
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
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

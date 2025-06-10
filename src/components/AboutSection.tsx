import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Wrench, Gamepad2, Tv, Users } from "lucide-react"; // Added Users for Volleyball
import Image from 'next/image';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">About Me</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <BookOpen className="mr-3 h-7 w-7 text-primary" />
              Academic Background
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>I am currently pursuing a Diploma in Information Technology from Government Polytechnic Nagpur, where I'm building a strong foundation in core IT concepts.</p>
            <p>My academic journey has equipped me with theoretical knowledge and a keen interest in practical application.</p>
             <Image 
              src="https://placehold.co/600x300.png" 
              alt="Academic illustration" 
              width={600} 
              height={300} 
              className="rounded-md mt-4"
              data-ai-hint="education study"
            />
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <Code className="mr-3 h-7 w-7 text-primary" />
              Coding Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>My passion for coding extends beyond the curriculum. I actively engage in building projects, exploring new technologies, and solving real-world problems through code.</p>
            <p>I enjoy the process of turning ideas into functional applications and continuously seek opportunities to learn and grow as a developer.</p>
            <Image 
              src="https://placehold.co/600x300.png" 
              alt="Coding illustration" 
              width={600} 
              height={300} 
              className="rounded-md mt-4"
              data-ai-hint="programming code"
            />
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up md:col-span-2 lg:col-span-1" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <Wrench className="mr-3 h-7 w-7 text-primary" />
              Beyond the Screen
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>I have a natural curiosity for how things work, often finding myself fixing household items like fans or taps, or even reverse-engineering gadgets to understand their mechanics.</p>
            <p>This hands-on approach complements my technical skills and problem-solving abilities.</p>
            <div className="mt-4 pt-3 border-t">
              <h4 className="font-semibold text-foreground mb-2">Hobbies:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li className="flex items-center"><Users className="mr-2 h-5 w-5 text-accent" /> Volleyball</li>
                <li className="flex items-center"><Gamepad2 className="mr-2 h-5 w-5 text-accent" /> Exploring new technologies</li>
                <li className="flex items-center"><Tv className="mr-2 h-5 w-5 text-accent" /> Watching web series & movies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

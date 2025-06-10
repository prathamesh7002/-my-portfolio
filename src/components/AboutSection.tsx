
import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Code2, Rocket, Briefcase, CalendarDays, GitFork } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2">A glimpse into my journey, passion, and what drives me.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up h-full">
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <GraduationCap className="mr-3 h-7 w-7 text-primary" />
              Academic Background
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>I'm currently pursuing a Diploma in Information Technology from Government Polytechnic, Nagpur. With a strong academic foundation and a passion for tech, I continuously push myself beyond the classroom — applying what I learn in real-world projects and challenges.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up h-full" style={{animationDelay: '0.2s'}}>
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <Code2 className="mr-3 h-7 w-7 text-primary" />
              Coding Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>My journey began with a genuine curiosity to understand how things work — from fixing appliances at home to writing code that powers live websites. I’ve since developed projects using HTML, CSS, JavaScript, Python, Django, and MySQL, including a Carbon Footprint Calculator, Login/Signup System, and an ongoing Digital Library System.</p>
            <p>I treat every project as a learning opportunity and every bug as a puzzle to solve.</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up h-full" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle className="flex items-center text-xl md:text-2xl font-headline text-foreground">
              <Rocket className="mr-3 h-7 w-7 text-primary" />
              Beyond Books: Real-World Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>What sets me apart is not just writing code, but seeing it run live. I’ve deployed projects using Render, Vercel, and Netlify, version-controlled them with Git and GitHub, and built user interfaces with design tools like Figma and Canva.</p>
            <p>My workflow reflects what real developers do — plan, build, test, deploy, and improve. I believe in learning by doing, and that’s exactly what my journey represents.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="relative p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="absolute top-4 right-4 text-muted-foreground">
            <Briefcase className="h-6 w-6 text-primary/80" />
          </div>
          <CardHeader className="p-0 mb-2">
            <CardDescription className="text-sm text-foreground/80">Projects Completed</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-4xl font-bold text-primary">3</p>
            <p className="text-xs text-muted-foreground mt-1">Across various domains</p>
          </CardContent>
        </Card>

        <Card className="relative p-6 shadow-md hover:shadow-lg transition-shadow duration-300" style={{animationDelay: '0.1s'}}>
          <div className="absolute top-4 right-4 text-muted-foreground">
            <CalendarDays className="h-6 w-6 text-primary/80" />
          </div>
          <CardHeader className="p-0 mb-2">
            <CardDescription className="text-sm text-foreground/80">Years in Code</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-4xl font-bold text-primary">1</p>
            <p className="text-xs text-muted-foreground mt-1">Constantly learning & growing</p>
          </CardContent>
        </Card>

        <Card className="relative p-6 shadow-md hover:shadow-lg transition-shadow duration-300" style={{animationDelay: '0.2s'}}>
          <div className="absolute top-4 right-4 text-muted-foreground">
            <GitFork className="h-6 w-6 text-primary/80" />
          </div>
          <CardHeader className="p-0 mb-2">
            <CardDescription className="text-sm text-foreground/80">GitHub Repositories</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-4xl font-bold text-primary">8+</p>
            <p className="text-xs text-muted-foreground mt-1">Public & private projects</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

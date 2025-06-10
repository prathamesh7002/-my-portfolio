import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code2, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">About Me</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
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

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up md:col-span-2 lg:col-span-1" style={{animationDelay: '0.4s'}}>
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
    </SectionWrapper>
  );
};

export default AboutSection;

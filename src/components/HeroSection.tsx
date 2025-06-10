import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";
import SectionWrapper from "./SectionWrapper";
import { RESUME_PATH } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  const phrases = ["Curious Coder", "Problem Solver", "Frontend Explorer", "Tech Enthusiast"];

  return (
    <SectionWrapper id="home" className="bg-gradient-to-br from-background to-secondary/30 dark:to-secondary/10">
      <div className="text-center flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] pt-16 md:pt-0">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
          IT Student. Passionate Coder. <br className="hidden md:block" />Future Developer.
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl">
          I build projects, fix circuits, and learn beyond the syllabus.
        </p>
        <div className="h-8 md:h-10 text-xl md:text-2xl mb-8">
          <TypingAnimation phrases={phrases} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-glow-primary transition-shadow duration-300">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-glow-accent transition-shadow duration-300">
            <a href={RESUME_PATH} download="Prathamesh_Saharkar_Resume.pdf">
              Download Resume <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

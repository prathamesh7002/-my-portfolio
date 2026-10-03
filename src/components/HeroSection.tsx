import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";
import SectionWrapper from "./SectionWrapper";
import { RESUME_PATH } from "@/lib/data";
import { ArrowRight, Download, Trophy, GraduationCap, Building2, Sparkles } from "lucide-react";

const HeroSection = () => {
  const phrases = [
    "VIT Pune Comp Engg Student",
    "SuPrathon 2K25 National Winner 🏆",
    "Full-Stack Web Architect",
    "Next.js & Django Developer",
    "Google Gemini AI Integrator",
    "95.75% Diploma IT Graduate",
  ];

  return (
    <SectionWrapper id="home" className="relative overflow-hidden bg-gradient-to-b from-background via-background/90 to-secondary/30 dark:to-secondary/10 pt-16 md:pt-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative text-center flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] max-w-5xl mx-auto px-4 py-12">
        {/* Spotlight Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6 shadow-sm hover:border-primary/40 transition-colors animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          <span>B.Tech Computer Engineering @ VIT Pune</span>
          <span className="text-muted-foreground">•</span>
          <span className="flex items-center gap-1 font-semibold text-amber-500 dark:text-amber-400">
            <Trophy className="h-3.5 w-3.5" /> SuPrathon 2K25 National Winner
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
          Architecting Scalable Systems & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
            AI-Powered Web Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">
          Hi, I&apos;m <strong className="text-foreground font-semibold">Prathamesh Saharkar</strong>. Currently pursuing B.Tech in Computer Engineering at <strong className="text-foreground">VIT Pune</strong> after completing my Diploma in IT with an outstanding <span className="text-primary font-semibold">95.75% aggregate</span>. National hackathon champion passionate about React, Next.js, Django, and intelligent cloud systems.
        </p>

        {/* Dynamic Typing Title */}
        <div className="h-8 md:h-10 text-xl md:text-2xl font-semibold text-primary mb-8">
          <TypingAnimation phrases={phrases} />
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="shadow-lg hover:shadow-glow-primary transition-all duration-300 font-medium">
            <Link href="#projects">
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-glow-accent transition-all duration-300 font-medium">
            <Link href="#achievements">
              <Trophy className="mr-2 h-5 w-5 text-amber-500" />
              Achievements & Honors
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="shadow-md transition-all duration-300">
            <a href={RESUME_PATH} download="Prathamesh_Saharkar_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Resume
            </a>
          </Button>
        </div>

        {/* Key Metrics / Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-border/60">
          <div className="p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-left hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-amber-500 mb-1">
              <Trophy className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Hackathon</span>
            </div>
            <div className="font-bold text-foreground text-lg sm:text-xl">1st Place</div>
            <div className="text-xs text-muted-foreground">SuPrathon 2K25 (National)</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-left hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-primary mb-1">
              <GraduationCap className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Diploma IT</span>
            </div>
            <div className="font-bold text-foreground text-lg sm:text-xl">95.75%</div>
            <div className="text-xs text-muted-foreground">Distinction & Rank Holder</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-left hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-blue-500 mb-1">
              <Building2 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Undergrad</span>
            </div>
            <div className="font-bold text-foreground text-lg sm:text-xl">VIT Pune</div>
            <div className="text-xs text-muted-foreground">Computer Engineering</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 text-left hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-500 mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Portfolio</span>
            </div>
            <div className="font-bold text-foreground text-lg sm:text-xl">10+ Projects</div>
            <div className="text-xs text-muted-foreground">Production & Academic</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Code2, Rocket, Briefcase, CalendarDays, GitFork, Trophy, Award, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">About Me</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          From diploma distinction and national hackathon victory to engineering scalable systems at VIT Pune.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
        {/* Card 1: Academic Background */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full border-border/60 hover:border-primary/50 flex flex-col">
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-headline text-foreground">
              Academic Excellence
            </CardTitle>
            <CardDescription className="text-sm font-medium text-primary">
              VIT Pune & Govt. Polytechnic Nagpur
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 flex-grow text-sm sm:text-base leading-relaxed">
            <p>
              I am currently pursuing my <strong className="text-foreground">Bachelor of Technology (B.Tech) in Computer Engineering at Vishwakarma Institute of Technology (VIT), Pune</strong>.
            </p>
            <p>
              Prior to VIT Pune, I graduated with a <strong className="text-foreground">Diploma in Information Technology from Government Polytechnic, Nagpur</strong>, achieving an extraordinary <span className="text-primary font-semibold">95.75% aggregate</span>. With rigorous training in algorithms, database management, and operating systems, I continuously push beyond textbook theory to build software that creates tangible impact.
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Coding Journey & Hackathon */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full border-border/60 hover:border-primary/50 flex flex-col" style={{animationDelay: '0.2s'}}>
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-3">
              <Trophy className="h-6 w-6 text-amber-500" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-headline text-foreground">
              Hackathons & Systems
            </CardTitle>
            <CardDescription className="text-sm font-medium text-amber-500 dark:text-amber-400">
              National Winner @ SuPrathon 2K25
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 flex-grow text-sm sm:text-base leading-relaxed">
            <p>
              My passion for solving real-world challenges led our team to become <strong className="text-foreground">National Winners (1st Place) in SuPrathon 2K25</strong>, India’s largest virtual hackathon, where I served as the <strong className="text-foreground">Backend & Database Specialist</strong> for <em>MediSafe Locker</em> — an AI-powered health document vault integrating Google Gemini AI and Supabase.
            </p>
            <p>
              For my diploma major capstone, I architected the <strong className="text-foreground">Government Hostel Admission Management Portal</strong>, a full-stack Django 5 + React 19 platform featuring automated category quota seat allotment algorithms and 3-tier warden review workflows.
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Beyond Books */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full border-border/60 hover:border-primary/50 flex flex-col" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
              <Rocket className="h-6 w-6 text-emerald-500" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-headline text-foreground">
              Real-World Engineering
            </CardTitle>
            <CardDescription className="text-sm font-medium text-emerald-500">
              Production-Grade Development
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 flex-grow text-sm sm:text-base leading-relaxed">
            <p>
              Writing code is just one piece of the puzzle; building resilient, user-friendly software that runs smoothly in production is where I thrive. I have deployed multiple web applications using Vercel, Render, Netlify, and Firebase, maintaining structured Git workflows and CI/CD pipelines.
            </p>
            <p>
              Whether it is architecting REST APIs, fine-tuning database schemas in PostgreSQL and SQLite, or integrating Gemini 2.0 Flash models with Genkit, I focus on clean architecture, security, and exceptional performance.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Metrics & Highlights Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
          <div className="flex items-center justify-between mb-2">
            <CardDescription className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase">Hackathon Record</CardDescription>
            <Trophy className="h-5 w-5 text-amber-500" />
          </div>
          <CardContent className="p-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-foreground">1st Place</p>
            <p className="text-xs text-muted-foreground mt-1">National Champion (SuPrathon 2K25)</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
          <div className="flex items-center justify-between mb-2">
            <CardDescription className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase">Diploma Aggregate</CardDescription>
            <Award className="h-5 w-5 text-primary" />
          </div>
          <CardContent className="p-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-primary">95.75%</p>
            <p className="text-xs text-muted-foreground mt-1">Information Technology (Distinction)</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
          <div className="flex items-center justify-between mb-2">
            <CardDescription className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase">Current College</CardDescription>
            <Building2 className="h-5 w-5 text-blue-500" />
          </div>
          <CardContent className="p-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-foreground">VIT Pune</p>
            <p className="text-xs text-muted-foreground mt-1">Computer Engineering (B.Tech)</p>
          </CardContent>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
          <div className="flex items-center justify-between mb-2">
            <CardDescription className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase">Projects Built</CardDescription>
            <Briefcase className="h-5 w-5 text-emerald-500" />
          </div>
          <CardContent className="p-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-500">10+</p>
            <p className="text-xs text-muted-foreground mt-1">Full-stack, AI & system apps</p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

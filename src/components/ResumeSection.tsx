import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Trophy, GraduationCap, Building2, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { RESUME_PATH } from "@/lib/data";
import Link from "next/link";

const ResumeSection = () => {
  return (
    <SectionWrapper id="resume" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
          <FileText className="h-3.5 w-3.5" />
          <span>Curriculum Vitae</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">
          Resume & Credentials
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Comprehensive overview of my academic record, hackathon victories, engineering capstones, and full-stack technical competencies.
        </p>
      </div>

      {/* Snapshot Card */}
      <div className="max-w-4xl mx-auto mb-10">
        <Card className="shadow-xl border border-border/60 bg-gradient-to-br from-card via-card to-secondary/20 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/60">
              <div>
                <h3 className="text-2xl font-bold font-headline text-foreground">
                  Prathamesh Ajay Saharkar
                </h3>
                <p className="text-primary font-medium text-sm sm:text-base mt-1">
                  Computer Engineering Student @ VIT Pune | Full-Stack & AI Developer
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="lg" className="shadow-lg hover:shadow-glow-primary transition-all duration-300">
                  <a href={RESUME_PATH} download="Prathamesh_Saharkar_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" /> Download Resume PDF
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Resume Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Education Highlights */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" /> Education
                </h4>
                
                <div className="p-3.5 rounded-lg bg-secondary/30 border border-border/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-sm">B.Tech - Computer Engineering</span>
                    <span className="text-xs text-primary font-medium">2025 – Present</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Vishwakarma Institute of Technology (VIT), Pune</p>
                </div>

                <div className="p-3.5 rounded-lg bg-secondary/30 border border-border/40 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-sm">Diploma - Information Technology</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">95.75% Aggregate</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Government Polytechnic, Nagpur (Distinction)</p>
                </div>
              </div>

              {/* Major Honors & Highlights */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-500" /> Key Honors & Star Projects
                </h4>

                <div className="p-3.5 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                      <Trophy className="h-3.5 w-3.5 text-amber-500" /> 1st Place National Champion
                    </span>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">SuPrathon 2K25</span>
                  </div>
                  <p className="text-xs text-muted-foreground">MediSafe AI Locker (Backend & Database Specialist)</p>
                </div>

                <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/20 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground text-sm">Govt. Hostel Admission Portal</span>
                    <span className="text-xs text-primary font-medium">Full-Stack Capstone</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Django 5 REST Framework + React 19 SPA + SimpleJWT</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Looking for internship, research, or development opportunities?
        </p>
        <div className="mt-3">
          <Button asChild variant="outline" size="sm" className="hover:shadow-glow-accent">
            <Link href="#contact">
              Get in Touch Directly <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ResumeSection;

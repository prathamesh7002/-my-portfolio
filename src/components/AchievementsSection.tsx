import SectionWrapper from "./SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievementsData } from "@/lib/data";
import { Trophy, CheckCircle2, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-3">
          <Trophy className="h-3.5 w-3.5" />
          <span>Major Milestones & Recognition</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
          Key Achievements & Education
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Proven track record of high academic performance and competitive national hackathon success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {achievementsData.map((item, index) => {
          const isWinner = item.id === 'hackathon-winner';
          return (
            <Card
              key={item.id}
              className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl animate-fade-in-up border ${
                isWinner 
                  ? 'border-amber-500/50 shadow-amber-500/10 bg-gradient-to-b from-card via-card to-amber-500/5' 
                  : 'border-border/60 hover:border-primary/50 bg-card'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {isWinner && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-yellow-400 text-white font-bold text-[10px] sm:text-xs uppercase px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-sm">
                  <Sparkles className="h-3 w-3" /> National Champion
                </div>
              )}

              <CardHeader className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isWinner ? 'bg-amber-500/15 text-amber-500' : 'bg-primary/10 text-primary'
                  }`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                      {item.organization}
                    </span>
                    <CardTitle className="text-xl font-headline text-foreground leading-snug">
                      {item.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-sm font-medium text-foreground/80">
                  {item.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-border/50 flex-grow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className={`h-4 w-4 mr-2 shrink-0 mt-0.5 ${
                          isWinner ? 'text-amber-500' : 'text-primary'
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isWinner && (
                  <div className="pt-3">
                    <Button asChild size="sm" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md">
                      <Link href="#projects">
                        View MediSafe Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;

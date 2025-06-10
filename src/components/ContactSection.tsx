import SectionWrapper from "./SectionWrapper";
import ContactForm from "./ContactForm";
import { socialLinks } from "@/lib/data";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactEmail = "prathmeshsaharkar@gmail.com";
  const contactLocation = "Nagpur, India";

  return (
    <SectionWrapper id="contact" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-3">
          <Card className="shadow-lg h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">Send me a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                I&apos;ll do my best to respond as quickly as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Connect & Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-foreground">Connect with me</CardTitle>
              <CardDescription className="text-muted-foreground">
                Find me on these platforms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  className="w-full justify-start text-left hover:shadow-glow-accent social-icon-glow"
                  asChild
                >
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="mr-3 h-5 w-5" />
                    {social.name}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>{contactLocation}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors">
                  {contactEmail}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

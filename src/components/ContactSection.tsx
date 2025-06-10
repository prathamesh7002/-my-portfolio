import SectionWrapper from "./SectionWrapper";
import ContactForm from "./ContactForm";
import { socialLinks } from "@/lib/data";
import Link from "next/link";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to connect? Feel free to reach out!
        </p>
      </div>
      <ContactForm />
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-foreground">Connect with me on</h3>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary transition-colors social-icon-glow"
            >
              <social.icon className="h-8 w-8" />
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

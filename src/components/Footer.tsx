import Link from "next/link";
import { socialLinks } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground hover:text-primary transition-colors social-icon-glow"
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm">
          Built by Prathamesh Saharkar &copy; {currentYear}
        </p>
         <p className="text-xs mt-2 text-muted-foreground/80">
          Computer Engineering @ VIT Pune • Diploma in IT (95.75%) • SuPrathon 2K25 National Winner
        </p>
      </div>
    </footer>
  );
};

export default Footer;

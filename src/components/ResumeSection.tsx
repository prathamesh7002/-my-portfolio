import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { RESUME_PATH } from "@/lib/data";

const ResumeSection = () => {
  return (
    <SectionWrapper id="resume" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-primary">My Resume</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Explore my qualifications, experience, and skills in detail. Download my resume for your reference.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-glow-primary transition-shadow duration-300">
            <a href={RESUME_PATH} download="Prathamesh_Saharkar_Resume.pdf">
              <Download className="mr-2 h-5 w-5" /> Download Resume (PDF)
            </a>
          </Button>
          {/* Optional: Embed or link to view */}
          {/* <Button asChild variant="outline" size="lg" className="hover:shadow-glow-accent transition-shadow duration-300">
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
             <Eye className="mr-2 h-5 w-5" /> View Resume
            </a>
          </Button> */}
        </div>
        {/* Optional: iframe embed. Note: Might have responsiveness issues or browser compatibility. */}
        {/* <div className="mt-12 aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=0`} // Example: hide toolbar for cleaner look
            className="w-full h-[70vh] border-0"
            title="Prathamesh Saharkar Resume"
          ></iframe>
        </div> */}
        <p className="mt-8 text-sm text-muted-foreground">Please note: The resume PDF should be placed in the `public` folder of the project.</p>
      </div>
    </SectionWrapper>
  );
};

export default ResumeSection;

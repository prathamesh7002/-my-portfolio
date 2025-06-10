
"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        console.error("EmailJS environment variables not set. Please configure them in .env.local or replace placeholders.");
        toast({
          title: "Configuration Error",
          description: "EmailJS is not configured. Please contact the site owner.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      await emailjs.send(serviceId, templateId, data, publicKey);
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    // Render nothing or a placeholder on the server and initial client render
    return null; 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground">Full Name</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your Name"
          className="mt-1 bg-card focus:bg-background/70"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="your.email@example.com"
          className="mt-1 bg-card focus:bg-background/70"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Your message..."
          rows={5}
          className="mt-1 bg-card focus:bg-background/70"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full shadow-lg hover:shadow-glow-primary transition-shadow duration-300" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
      
    </form>
  );
};

export default ContactForm;

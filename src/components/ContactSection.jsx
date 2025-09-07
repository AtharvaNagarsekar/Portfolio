import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react"; 
import emailjs from "@emailjs/browser"; 

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_fy0i26f",   
        "template_opel3me",  
        form.current,        
        "B3Gzs2zTEirnJlbfV"   
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast({
            title: "Message Transmitted!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Open a <span className="text-primary">Comms Channel</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a mission in mind or a destination to reach? Let's discuss the
          flight plan. I'm always open to exploring new routes and collaborative
          ventures.
        </p>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center">Transmit a Message</h3>
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-center">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-center">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-center">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to discuss an opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Transmitting..." : "Transmit Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

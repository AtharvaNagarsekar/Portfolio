import { ArrowUp, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="py-8 px-4 relative bg-card/50 border-t border-primary/10">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium">
            &copy; 2025 Atharva Nagarsekar. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

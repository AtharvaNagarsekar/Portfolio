import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Removed ExternalLink and Github

// The project data remains the same. Only the links will be ignored by the new code.
const projects = [
  {
    id: 1,
    title: "Fin-AI-lytics - AI Financial Advisor",
    description: "An AI-powered financial advisor with live stock integration and portfolio optimization, achieving 90% prediction accuracy in simulations.",
    image: "/projects/project1.png",
    tags: ["NLP", "AWS", "LSTM", "GenAI", "Data Visualization"]
  },
  {
    id: 2,
    title: "VidGyan - AI Educational Video Generator",
    description: "A generative pipeline that automates the entire educational video creation process, from script generation to audio-visual synchronization.",
    image: "/projects/project2.jpg",
    tags: ["GenAI", "NLP", "Gemini API", "Computer Vision"],

  },
  {
    id: 3,
    title: "Melodix - Mood-Based Music Recommender",
    description: "A full-stack music discovery application designed to enhance user engagement. It leverages a custom machine learning recommender to generate mood-based playlists, driving content discovery and user retention.",
    image: "/projects/project3.png",
    tags: ["Recommender Systems", "Spotify API", "Machine Learning"],
  },
  { id: 4, title: "StyleGen - Conditional GAN Fashion Generator", description: "Architected and trained a Conditional Generative Adversarial Network (CGAN) in PyTorch to generate novel fashion outfits from simple mask inputs, serving as a powerful proof of concept for automated design tools.", image: "/projects/project4.png", tags: ["Computer Vision", "Deep Learning", "GANs", "PyTorch"],  },
  { id: 5, title: "Fake News Detector", description: "Developed a high-performance fake news detector using an ensemble machine learning model. Trained on a large corpus of news articles, the system achieves ~99.7% accuracy in identifying potentially malicious or misleading content.", image: "/projects/project5.png", tags: ["Machine Learning", "NLP", "Ensemble Modeling", "Web Scrapping"], },
  { id: 6, title: "FoodTrail - Food Recommendation System", description: "A deep learning model that suggests personalized dish options based on user preferences, achieving an 85% user satisfaction rate in testing.", image: "/projects/project6.png", tags: ["Deep Learning", "MySQL", "Data Processing"], },
  { id: 7, title: "Nyaya Mitra - Multi-Agent Legal Assistant", description: "Developed a comprehensive AI platform to democratize and accelerate legal services. Nyaya Mitra leverages a team of AI agents to automate research, document analysis, and case prediction, enhancing efficiency for legal professionals", image: "/projects/project7.png", tags: ["Agentic AI", "NLP", "LLM Orchestration", "Semantic Search", "API integration"], demoUrl: "#", githubUrl: "#" },
  { id: 8, title: "Interactive Portfolio", description: "This portfolio is a mission-critical project itself: a digital flight deck designed to navigate visitors through my professional journey. The aviation theme is woven throughout, reflecting a core philosophy of precision, navigation, and systemic thinking.", image: "/projects/project8.png", tags: ["Full Stack Development", "UI/UX"], demoUrl: "#", githubUrl: "#" },
  { id: 9, title: "RetroSnap Image Processing ", description: "Developed an application that uses OpenCV and AI to transform modern photos with the authentic aesthetic of 90s digital cameras.", image: "/projects/project9.png", tags: ["Image Processing", "OpenCV",]},
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl"> {/* NOTE: Main container for content */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance and user experience to solve real-world problems and showcase my skills in the field of AI
        </p>

        {/* --- MAIN CAROUSEL CONTAINER --- */}
        <div 
          className="relative"
          onMouseEnter={resetTimeout}
        >
          {/* --- PART 1: IMAGE CAROUSEL --- */}
          <div className="overflow-hidden rounded-lg shadow-lg bg-card/50 h-96">
            <div
              className="flex transition-transform ease-out duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={`img-${project.id}`} className="w-full flex-shrink-0 h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- PART 2: DETAILS CAROUSEL (SYNCHRONIZED) --- */}
          <div className="overflow-hidden mt-8">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={`details-${project.id}`} className="w-full flex-shrink-0 text-center px-4 md:px-12">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
                    {project.description}
                  </p>
                  {/* --- CHANGE: The individual project links have been removed as requested --- */}
                </div>
              ))}
            </div>
          </div>

          {/* --- NAVIGATION ARROWS (POSITIONED OUTSIDE) --- */}
          {/* --- CHANGE: Arrows moved further out using -left-20 and -right-20 --- */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-20 z-10 p-2 bg-card/50 rounded-full hover:bg-card transition-colors hidden md:block"
            aria-label="Previous project"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 p-2 bg-card/50 rounded-full hover:bg-card transition-colors hidden md:block"
            aria-label="Next project"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AtharvaNagarsekar"
          >
            View all Projects<ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
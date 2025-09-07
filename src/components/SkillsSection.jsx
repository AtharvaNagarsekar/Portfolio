import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Award,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  GaugeCircle,
  Lightbulb,
  Plane,
  Presentation,
  Server,
  Target,
  Trophy,
  UserCheck,
  Users,
  Verified,
} from "lucide-react";

const qualifications = [
  // Technical Skills
  { name: "Generative & Agentic AI", level: 95, category: "technical", format: "bar" },
  { name: "Machine Learning & Deep Learning", level: 95, category: "technical", format: "bar" },
  { name: "LLM Orchestration & Fine-Tuning", level: 90, category: "technical", format: "bar" },
  { name: "Data Engineering", level: 90, category: "technical", format: "bar" },
  { name: "Recommendation & Personalization Engines", level: 90, category: "technical", format: "bar" },
  { name: "Cloud AI Platforms (AWS/GCP/Azure)", level: 80, category: "technical", format: "bar" },
  { name: "Software Engineering", level: 80, category: "technical", format: "bar" },
  { name: "Data Structures & Algorithms", level: 85, category: "technical", format: "bar" },
  { name: "Database Management (DBMS)", level: 80, category: "technical", format: "bar" },

  // Core Competencies
  {
    name: "Problem Solving",
    Icon: Lightbulb,
    description: "Deconstructing complex challenges into clear, actionable plans for system development.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Leadership",
    Icon: UserCheck,
    description: "Guiding teams to their objective with clear direction and a focus on shared mission success.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Data Storytelling",
    Icon: Presentation,
    description: "Translating complex data into compelling narratives that inform strategy and drive decisions.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Critical Thinking",
    Icon: BrainCircuit,
    description: "Applying rigorous, data-driven analysis to evaluate situations and identify optimal pathways.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Collaborative Teamwork",
    Icon: Users,
    description: "Fostering a collaborative environment where shared expertise leads to high-impact results.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Adaptability",
    Icon: GitBranch,
    description: "Thriving in dynamic environments by quickly mastering new tech and navigating unforeseen challenges.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Crew Resource Management",
    Icon: Plane,
    description: "Applying aviation principles to maximize team efficiency, minimize error, and ensure clear communication.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Precision & Accuracy",
    Icon: Target,
    description: "A deep-seated commitment to delivering work that is meticulously accurate and meets the highest standards.",
    category: "competencies",
    format: "card",
  },
  {
    name: "Time & Performance Mgt.",
    Icon: GaugeCircle,
    description: "Effectively managing timelines and resources to ensure on-time delivery without compromising quality.",
    category: "competencies",
    format: "card",
  },
  
  // --- CERTIFICATIONS UPDATED WITH LINKS ---
  // The 'link' property has been added to each certification.
  { name: "Artificial Intelligence: CS50", provider: "Harvard University", Icon: Verified, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1ym9CHVsQCE5CtfqJKpQnFKepws4gHHWL/view" },
  { name: "Machine Learning", provider: "Stanford University (Coursera)", Icon: BrainCircuit, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1Qp4E17kBXgrqiI_ru4qTRjVSITebuX-C/view" },
  { name: "Supervised Machine Learning", provider: "DeepLearning.AI", Icon: BrainCircuit, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1s4-YIFbNo_Dm6XAFqHonrvjFk26lisGI/view" },
  { name: "Advanced Learning Algorithms", provider: "DeepLearning.AI", Icon: BrainCircuit, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1wRlhiFzWwrZwZvWhaTrv5iBnecyhP-Aq/view" },
  { name: "Unsupervised Learning, Recommenders, RL", provider: "DeepLearning.AI", Icon: BrainCircuit, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1pR3BJNP8uWczo4j_nQH_IAUUQBQCHbK-/view" },
  { name: "Cloud Computing", provider: "Duke University (Coursera)", Icon: Cloud, category: "certifications", format: "list", link: "https://drive.google.com/file/d/13F-7rXQV036wENNR50Thiptn4DlGOFdR/view" },
  { name: "Data Engineer", provider: "DataCamp", Icon: Server, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1ocYaHsdaylbxCgTjWtO8Vs5eZinJl9hB/view" },
  { name: "Software Engineering Virtual Experience", provider: "JP Morgan Chase (Forage)", Icon: Briefcase, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1yd39zfRnm_mIgIwrvfl34qsRWCATftGt/view" },
  { name: "Data Science, ML, DL & NLP", provider: "Udemy", Icon: BookOpen, category: "certifications", format: "list", link: "https://drive.google.com/file/d/1dnfZR-3oQzYXOTinwnj2o1GrF6EEe5i9/view" },

  // Achievements
  {
    name: "Best Paper Award: AITA 2025",
    description: "Recognized for innovative research in AI-powered video generation.",
    Icon: Trophy,
    category: "achievements",
    format: "list",
  },
  {
    name: "Hackathon Finalist: S4DS DataHack",
    description: "Proved ability to deliver high-impact, functional prototypes under extreme time constraints.",
    Icon: Award,
    category: "achievements",
    format: "list",
  },
  {
    name: "Academic Excellence",
    description: "Consistent record of high performance (9.3 CGPA) with strong theoretical foundation.",
    Icon: GraduationCap,
    category: "achievements",
    format: "list",
  },
];

const categories = [
  "all",
  "technical",
  "competencies",
  "certifications",
  "achievements",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredQualifications = qualifications.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Professional <span className="text-primary">Qualifications</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQualifications.map((item, key) => {
            // RENDER STYLE 1: PROGRESS BAR
            if (item.format === "bar") {
              if (activeCategory === "all") {
                return (
                  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center gap-2 h-full">
                    <Cpu className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-md">{item.name}</h4>
                  </div>
                );
              }
              return (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                  <h3 className="font-semibold text-lg mb-4 text-left">{item.name}</h3>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-muted-foreground mt-1">{item.level}%</p>
                </div>
              );
            }
            
            // RENDER STYLE 2: INFO CARD (for Competencies)
            if (item.format === "card") {
              const { Icon } = item;
              if (activeCategory === "all") {
                return (
                  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center gap-2 h-full">
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-md">{item.name}</h4>
                  </div>
                );
              }
              return (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col text-left">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg flex-1">{item.name}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            }

            // RENDER STYLE 3: LIST ITEM (for Certs & Achievements)
            if (item.format === "list") {
              const { Icon } = item;
              if (activeCategory === "all") {
                return (
                  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center gap-2 h-full">
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-md">{item.name}</h4>
                  </div>
                );
              }

              // --- CHANGE: Logic to make CERTIFICATIONS clickable ---
              if (item.category === "certifications") {
                return (
                  <a
                    key={key}
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4 text-left transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-md">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.provider}</p>
                    </div>
                  </a>
                );
              }
              if (item.category === "achievements") {
                return (
                  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-start gap-4 text-left h-full">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0 mt-1">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-md mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              }
            }
            
            return null; // Fallback
          })}
        </div>
      </div>
    </section>
  );
};
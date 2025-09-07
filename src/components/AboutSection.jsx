import { Briefcase, Code, User } from "lucide-react";
import { Compass, GaugeCircle, Rocket } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Architect of Intelligent Systems & AI Researcher
            </h3>

            <p className="text-muted-foreground">
            As an AI and DS specialist, I build intelligent systems designed for measurable, real-world impact. From engineering multi-agent legal assistants to developing generative pipelines for automated content, my work focuses on translating the complexities of machine learning into practical and scalable solutions.
            </p>

            <p className="text-muted-foreground">
            I'm driven by a passion for applying cutting edge AI to solve meaningful challenges. As a published researcher, I thrive on the entire process of discovery from deep theoretical exploration to building and deploying robust, high-impact applications.
            As an avid aviation enthusiast, I bring a pilot's mindset of precision, risk-assessment, and systemic thinking to every project I undertake.            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Atharva_Nagarsekar_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Generative AI & LLM Orchestration</h4>
                  <p className="text-muted-foreground">
                  I pilot intelligent systems from blueprint to deployment by orchestrating the full potential of AI and LLMs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GaugeCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning Systems</h4>
                  <p className="text-muted-foreground">
                  Developing predictive models and scalable recommender engines that deliver high accuracy and measurable business value.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Compass className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">NLP & Data Intelligence</h4>
                  <p className="text-muted-foreground">
                  Processing and interpreting complex textual data to enhance retrieval, perform analysis, and unlock actionable insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

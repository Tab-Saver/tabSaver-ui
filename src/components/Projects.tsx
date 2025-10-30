import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Code2, FileCode, Terminal, Laptop } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "PhotoAlarm",
    subtitle: "Photo & Audio verification",
    description:
      "Engineered a Hackathon winning full-stack alarm that prevents snoozing by requiring selfie verification or a 5-second voice recording before deactivation, enhancing user accountability and engagement.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "Lucide React",
      "REST API",
      "LocalStorage",
      "MediaDevices API",
      "Canvas API",
      "Web Audio API",
    ],
    featured: true,
    icon: Code2,
    githubUrl: "https://github.com/omarhamdan010/PhotoAlarm",
    demoUrl: "https://photo-alarm-yfw7.vercel.app/",
  },
  {
    title: "CoverLetterAI",
    subtitle: "Generates Cover letters with AI",
    description:
      "AI suggests 3 different options for paragraphs (open/body/close), to create a perfectly polished cover letter that exports as a PDF or DOCX file.",
    tech: [
      "Vercel Serverless",
      "HTML",
      "REST APIs",
      "Node.js",
      "Google Gemini API",
      "JavaScript",
      "Tailwind",
    ],
    featured: true,
    icon: FileCode,
    githubUrl: "https://github.com/omarayman23/photoAlarm",
    demoUrl: "https://cover-letterai.vercel.app/",
  },
  {
    title: "Algorithm Visuals",
    subtitle: "Real-time representation of algorithms",
    description:
      "Developed an interactive React.js and CSS platform that visualizes 12 core algorithms (BFS, DFS, Dijkstra, A*, sorting/searching) with real-time execution. Implements queue, stack, and grid logic optimized for performance",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Lucide React", "CSS", "Web APIs"],
    featured: false,
    icon: Terminal,
    githubUrl: "https://github.com/omarayman23/algorithmVisuals",
    demoUrl: "https://algorithm-visuals.vercel.app/",
  },
  {
    title: "CalcWiz",
    subtitle: "Calculus Calculator",
    description:
      "Transformed a multi-page application into a high-performance Single-Page Application (SPA) using JavaScript, Math.js, and MathJax, reducing load times by 75%.",
    tech: [
      "Math.js",
      "CSS",
      "JavaScript",
      "Google Fonts API",
      "CDNs",
      "HTML",
      "MathJax",
    ],
    featured: false,
    icon: Laptop,
    githubUrl: "https://github.com/omarayman23/CalcWiz?tab=readme-ov-file",
    demoUrl: "https://calc-wiz-eight.vercel.app/",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center font-bold text-black">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={index}
                  className={`group rounded-2xl transition-all duration-500 overflow-hidden ${
                    project.featured
                      ? "bg-white border-2 border-black hover:shadow-2xl"
                      : "bg-gray-50 border border-gray-300 hover:border-black hover:shadow-xl"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Project Icon */}
                    <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden bg-black flex items-center justify-center">
                      <IconComponent className="w-32 h-32 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Project Content */}
                    <div className="md:col-span-3 p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl text-black mb-2 group-hover:text-gray-700 transition-colors font-bold">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 font-medium">{project.subtitle}</p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white hover:bg-black hover:text-white border-2 border-black transition-all duration-300"
                            title="View Demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white hover:bg-black hover:text-white border-2 border-black transition-all duration-300"
                            title="View on GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-white border-black text-black hover:bg-black hover:text-white transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

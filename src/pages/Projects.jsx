import { motion } from "framer-motion";
import { Github, ExternalLink, Hammer } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    description:
      "A clean and responsive weather application that fetches real-time data from an API and dynamically updates UI elements based on weather conditions.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: "#",
    live: "#",
    status: "Completed",
  },
  {
    title: "Todo App (Glassy UI)",
    description:
      "A modern Todo application built with React and Tailwind CSS featuring a glassmorphism UI and planned authentication flow using React Router.",
    tech: ["React", "Tailwind CSS", "React Router"],
    github: "#",
    live: "#",
    status: "Ongoing",
  },
  {
    title: "Tripz Holidays",
    description: "eveloped a responsive travel booking web application for a client using React (Vite) and Tailwind CSS. Integrated REST APIs with TanStack Query for efficient data fetching and state management. Implemented SEO optimization, Google Analytics (GA4), and Cloudinary for image storage and performance optimization. Collaborated on real-world requirements, focusing on scalability, clean architecture, and production-ready delivery.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "https://tripzholidays.com/",
    status: "Completed",
  },
];

const Projects = () => {
  return (
    <section className="relative container mx-auto px-6 py-24">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            A selection of projects I’ve built while learning and exploring web
            development — focused on clean UI, real functionality, and growth.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all"
            >
              {/* Status */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                  {project.status}
                </span>
                {project.status === "Ongoing" && (
                  <Hammer size={16} className="text-amber-400" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-zinc-100 mb-4 group-hover:text-yellow-100 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-zinc-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-indigo-400 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-indigo-400 transition"
                >
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

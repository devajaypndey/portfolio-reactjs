import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Core Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "RadixUI", "MaterialUI", "TanStack Query"],
    color: "text-indigo-400",
  },
  {
    title: "Backend & Logic",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs"],
    color: "text-emerald-400",
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: ["UI/UX Design", "Figma", "Canva"],
    color: "text-violet-400",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
    color: "text-amber-400",
  },
];

const Skills = () => {
  return (
    <section className="relative container mx-auto px-6 py-24">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100">
            Skills
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            Technologies and tools I actively use to design, build, and ship
            modern web applications.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={30} className={group.color} />
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm rounded-full bg-white/10 text-zinc-300 border border-white/10 hover:bg-white/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

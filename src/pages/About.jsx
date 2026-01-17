import { motion } from "framer-motion";
import { Code2, Palette, Terminal, Coffee } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React, Next, Tailwind CSS, HTML, CSS,",
    color: "text-indigo-400",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "UI/UX, Figma, Canva",
    color: "text-violet-400",
  },
  {
    icon: Terminal,
    title: "Backend",
    desc: "Node.js, Express.js",
    color: "text-emerald-400",
  },
  {
    icon: Coffee,
    title: "Beyond Code",
    desc: "Football, Cinema, Coffee",
    color: "text-amber-400",
  },
];

const About = () => {
  return (
    <section className="relative container mx-auto px-6 py-24">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 text-lg leading-relaxed">
            I’m <span className="text-zinc-200 font-medium">Ajay Pandey</span>, a
            B.Tech IT student and Full Stack Developer from India who enjoys
            building clean, purposeful web experiences — where design and logic
            meet.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              My journey into development started with curiosity — how websites
              work, why some feel effortless, and others don’t. That curiosity
              turned into a habit of building, breaking, and rebuilding things
              better.
            </p>

            <p>
              I enjoy working across the stack, but I’m especially drawn to
              frontend engineering and UI design — crafting interfaces that feel
              intuitive, responsive, and intentional.
            </p>

            <p>
              Outside of code, you’ll find me watching movies, playing cricket,
              or quietly brainstorming ideas with a cup of coffee nearby.
            </p>
          </div>

          {/* Right: Skill cards */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all"
                >
                  <Icon
                    size={34}
                    className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

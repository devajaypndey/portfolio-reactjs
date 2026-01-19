import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Glow background */}
      <div className="absolute w-100 h-100 bg-indigo-500/20 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center gap-8">
        {/* Orb */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-24 h-24 rounded-full bg-linear-to-tr from-cyan-400 via-indigo-500 to-violet-500 shadow-2xl"
        />

        {/* Name */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg font-semibold text-white tracking-wide"
        >
          Ajay Pandey
        </motion.span>

        {/* Loading dots */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm text-white/50 tracking-widest"
        >
          LOADING
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;

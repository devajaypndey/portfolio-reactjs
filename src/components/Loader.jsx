import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="w-20 h-20 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-2xl rotate-45 flex items-center justify-center shadow-xl"
                >
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl" />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Ajay Pandey
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-1 bg-indigo-600 mt-4 rounded-full"
                />
            </div>
        </div>
    );
};

export default Loader;

import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-400/10 blur-[100px] animate-pulse delay-2000" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] dark:opacity-[0.05]" />

            {/* Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-indigo-500/10 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Background;

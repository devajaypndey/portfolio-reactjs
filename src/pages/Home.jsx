import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Code2, Palette, Github, Linkedin, Mail } from 'lucide-react';
import Image from "../assets/image.png"

const Home = () => {
    const navigate = useNavigate();

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = ['React', 'Tailwind', 'JavaScript', 'Next', 'Figma'];

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">

            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex items-center">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* LEFT */}
                    <div className="space-y-8 animate-fade-in">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm text-white/80">Available for freelance</span>
                            <Sparkles size={16} className="text-emerald-400" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-black text-white">
                            AJAY <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-indigo-400 to-violet-400">
                                PANDEY
                            </span>
                        </h1>

                        <p className="text-xl text-white/60">
                            Frontend Developer & UI Designer
                        </p>

                        <p className="text-lg text-white/50 max-w-xl">
                            Transforming ideas into pixel-perfect, interactive experiences.
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA BUTTONS (useNavigate) */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/projects')}
                                className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-xl font-semibold text-white flex items-center gap-2 hover:scale-105"
                            >
                                Explore Projects
                                <ArrowRight size={20} />
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:scale-105"
                            >
                                Get in Touch
                            </button>
                        </div>

                        {/* Social Links (navigate) */}
                        <div className="flex gap-4">
                            <button onClick={() => navigate('/github')} className="icon-btn"><Github size={20} /></button>
                            <button onClick={() => navigate('/linkedin')} className="icon-btn"><Linkedin size={20} /></button>
                            <button onClick={() => navigate('/email')} className="icon-btn"><Mail size={20} /></button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="relative w-full max-w-md aspect-square transition-transform"
                        style={{
                            transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
                        }}
                    >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                            <div className="absolute inset-8 rounded-2xl overflow-hidden">
                                <img
                                    src={Image}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute top-8 -left-6 w-20 h-20 bg-cyan-500 rounded-2xl flex items-center justify-center rotate-12">
                                <Code2 size={32} className="text-white" />
                            </div>

                            <div className="absolute bottom-8 -right-6 w-20 h-20 bg-violet-500 rounded-2xl flex items-center justify-center -rotate-12">
                                <Palette size={32} className="text-white" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                .icon-btn {
                    width: 48px;
                    height: 48px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.6);
                    transition: 0.3s;
                }
                .icon-btn:hover {
                    color: white;
                    transform: translateY(-4px) scale(1.1);
                }
            `}</style>

        </div>
    );
};

export default Home;

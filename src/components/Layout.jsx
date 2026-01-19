import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 -left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-0 -right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent hidden sm:block">
                Ajay Pandey
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-white/10 text-white border border-cyan-400/50"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/Resume_Ajay_Pandey.pdf"
                download
                className="ml-3 px-5 py-2.5 text-sm font-semibold rounded-lg 
             bg-linear-to-r from-cyan-500 to-indigo-500
             text-white flex items-center gap-2
             hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
              >
                Download Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-in slide-in-from-top-5 duration-200">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all ${
                      location.pathname === link.path
                        ? "bg-white/10 text-white border border-cyan-400/50"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="grow relative z-10 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950/50 backdrop-blur-xl border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Footer Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                Ajay Pandey
              </h3>
              <p className="text-sm text-white/60">
                Building digital experiences that matter.
              </p>
              <p className="text-xs text-white/40 mt-1">
                Gurugram, Haryana, India
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/devajaypndey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-pandey-ab3437253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:dev8.ajay@gmail.com"
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://pin.it/3cDgmdnj6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
                aria-label="Pinterest"
              >
                <FaPinterest size={20} />
              </a>
              <a
                href="https://x.com/ajaypndeyyydev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:scale-110"
              >
                <FaXTwitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-white/50">
                &copy; {new Date().getFullYear()} Ajay Pandey
              </p>
              <p className="text-xs text-white/30 mt-1">All rights reserved.</p>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="h-1 w-32 bg-linear-to-r from-cyan-400 to-indigo-400 rounded-full mx-auto"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

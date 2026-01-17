import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>Ajay Pandey - Developer</title>
                <meta name="description" content="Portfolio of Mohit Panchal, a passionate Frontend Developer and UI Designer from Gurugram specializing in React, Tailwind CSS, and modern web technologies." />
                <meta name="keywords" content="Frontend Developer, UI Designer, React, Tailwind CSS, Web Development, Portfolio, Ajay Pandey, Gurugram" />
                <meta name="author" content="Ajay Pandey" />
                <meta property="og:title" content="Mohit Panchal - Frontend Developer & UI Designer" />
                <meta property="og:description" content="Portfolio showcasing modern web development projects and UI designs." />
                <meta property="og:type" content="website" />
            </Helmet>

            {isLoading ? (
                <Loader />
            ) : (
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="skills" element={<Skills />} />
                            <Route path="projects" element={<Projects />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    </Routes>
                </Router>
            )}
        </>
    );
}

export default App;

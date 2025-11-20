import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-void-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                    <Globe className="text-neon-cyan" />
                    <span className="text-white">EARTH<span className="text-neon-cyan">LORD</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-gray-300 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest">Features</a>
                    <a href="#ai-story" className="text-gray-300 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest">AI Story</a>
                    <Link to="/privacy" className="text-gray-300 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest">Privacy</Link>
                    <a href="https://apps.apple.com" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-neon-cyan hover:text-black transition-all transform hover:scale-105">
                        Download
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-void-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
                    <a href="#features" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                    <a href="#ai-story" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>AI Story</a>
                    <Link to="/privacy" className="text-white text-lg" onClick={() => setIsMobileMenuOpen(false)}>Privacy</Link>
                    <a href="https://apps.apple.com" className="bg-neon-cyan text-black px-6 py-3 rounded-lg font-bold text-center">
                        Download App
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

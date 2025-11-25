import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className="fixed w-full z-50 bg-void-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                        EARTH<span className="text-neon-cyan">LORD</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                            {t('nav.home')}
                        </Link>
                        <a href="#features" className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                            {t('nav.features')}
                        </a>
                        <a href="#ai-story" className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                            {t('nav.aiStory')}
                        </a>
                        <Link to="/guide" className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                            {t('nav.guide')}
                        </Link>
                        <Link to="/support" className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors">
                            {t('nav.support')}
                        </Link>
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-void-black border-b border-white/10 py-4 px-6 flex flex-col gap-4">
                        <Link to="/" className="text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>
                            {t('nav.home')}
                        </Link>
                        <a href="#features" className="text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>
                            {t('nav.features')}
                        </a>
                        <a href="#ai-story" className="text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>
                            {t('nav.aiStory')}
                        </a>
                        <Link to="/guide" className="text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>
                            {t('nav.guide')}
                        </Link>
                        <Link to="/support" className="text-gray-300 hover:text-neon-cyan" onClick={() => setIsOpen(false)}>
                            {t('nav.support')}
                        </Link>
                        <div className="pt-2 border-t border-white/10">
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

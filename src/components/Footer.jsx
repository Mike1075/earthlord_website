import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Globe className="text-neon-cyan" />
                        <span className="text-white font-bold text-xl">EARTH<span className="text-neon-cyan">LORD</span></span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
                        <a href="mailto:onestnet@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} AiXue AI. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-neon-cyan transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const videos = [
        '/assets/videos/hero.mp4'
    ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const { t } = useTranslation();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-transparent to-void-black z-10" />
                <div className="absolute inset-0 bg-black/40 z-0" /> {/* Dark overlay for readability */}
                {videos.map((src, index) => (
                    <video
                        key={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-mono mb-6 tracking-widest">
                        {t('hero.systemOnline')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {t('hero.title1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-600">{t('hero.title2')}</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://apps.apple.com"
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center gap-3 overflow-hidden transition-all hover:scale-105"
                        >
                            <Apple className="w-6 h-6" />
                            <span>{t('hero.appStore')}</span>
                            <div className="absolute inset-0 bg-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href="#features"
                            className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-white/5 transition-all"
                        >
                            <span>{t('hero.exploreFeatures')}</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

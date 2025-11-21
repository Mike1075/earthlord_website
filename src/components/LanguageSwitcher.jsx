import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'zh' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-sm text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4" />
            <span className="font-mono">{i18n.language === 'en' ? 'EN' : '中文'}</span>
        </button>
    );
};

export default LanguageSwitcher;

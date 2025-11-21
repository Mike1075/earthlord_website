import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang.startsWith('zh') ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
    };

    const isZh = i18n.language.startsWith('zh');

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/50 text-sm text-white hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)]"
            aria-label="Switch Language"
        >
            <Globe className="w-4 h-4 text-neon-cyan" />
            <span className="font-mono font-bold tracking-wider">{isZh ? 'CN' : 'EN'}</span>
        </button>
    );
};

export default LanguageSwitcher;

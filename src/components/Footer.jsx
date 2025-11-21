import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-void-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400 text-sm">
                    {t('footer.rights')}
                </div>
                <div className="flex gap-6 text-sm text-gray-400">
                    <Link to="/privacy" className="hover:text-neon-cyan transition-colors">{t('footer.privacy')}</Link>
                    <Link to="/terms" className="hover:text-neon-cyan transition-colors">{t('footer.terms')}</Link>
                    <Link to="/age-rating" className="hover:text-neon-cyan transition-colors">{t('footer.ageRating')}</Link>
                    <Link to="/monetization-policy" className="hover:text-neon-cyan transition-colors">{t('footer.monetization')}</Link>
                    <Link to="/app-store-checklist" className="hover:text-neon-cyan transition-colors">{t('footer.appStoreChecklist')}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

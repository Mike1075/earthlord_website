import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">Last Updated: November 20, 2025</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
                    <p className="text-gray-400 mb-4">
                        Welcome to EarthLord, a location-based outdoor strategy game developed by AiXue AI. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
                    <h3 className="text-xl font-bold mt-4 mb-2">2.1 Personal Information</h3>
                    <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-2">
                        <li>Account Information: Email address, Display name, Profile picture.</li>
                        <li>Location Data: Real-time GPS location (required for core gameplay), Location history.</li>
                        <li>Game Data: Player statistics, In-game purchases, Resource inventory.</li>
                        <li>Device Information: Device model, OS version, Unique identifiers.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-400 mb-4">
                        We use the information to provide location-based gameplay, match players, verify territory control, and improve the game experience.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
                    <p className="text-gray-400 mb-4">
                        If you have questions about this Privacy Policy, please contact us at: <a href="mailto:onestnet@gmail.com" className="text-neon-cyan">onestnet@gmail.com</a>
                    </p>

                    <div className="mt-12 p-4 bg-slate-grey rounded-lg border border-white/10">
                        <p className="text-sm text-gray-500">
                            For the full legal text, please refer to the documents within the application settings.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">Terms of Service</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">Last Updated: November 20, 2025</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-400 mb-4">
                        By downloading, installing, or using the EarthLord mobile application, you agree to be bound by these Terms of Service.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility</h2>
                    <p className="text-gray-400 mb-4">
                        You must be at least 13 years of age to use EarthLord. Users between 13-18 years old must have parental consent.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">3. User Conduct</h2>
                    <p className="text-gray-400 mb-4">
                        You agree not to cheat, exploit bugs, use GPS spoofing, or engage in any illegal activities while using the App.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
                    <p className="text-gray-400 mb-4">
                        EarthLord and all related materials are the exclusive property of AiXue AI.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclaimers</h2>
                    <p className="text-gray-400 mb-4">
                        The App is provided "AS IS" without warranties of any kind. You are responsible for your own safety while playing outdoors.
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

export default TermsOfService;

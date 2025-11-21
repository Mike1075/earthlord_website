import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AgeRating = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">Age Rating Guide</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">Last Updated: November 20, 2025</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Recommended Age Rating</h2>
                        <div className="bg-slate-grey p-6 rounded-lg border border-neon-cyan/30 flex items-center gap-6">
                            <div className="bg-black/50 p-4 rounded border border-white/10">
                                <span className="text-4xl font-bold text-neon-cyan">13+</span>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-white mb-2">EarthLord is rated: 13+</p>
                                <p className="text-gray-400">
                                    This rating is based on content analysis according to Apple's updated 2025 App Store age rating system and international content rating standards.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">2. Rating Justification</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold text-neon-cyan mb-3">Why 13+?</h3>
                                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                                    <li><strong>Themes:</strong> Post-apocalyptic setting, territory conquest.</li>
                                    <li><strong>Violence:</strong> Infrequent/Mild realistic and fantasy violence (abstract strategic combat).</li>
                                    <li><strong>Social:</strong> Moderated chat and messaging between players.</li>
                                    <li><strong>Purchases:</strong> In-app subscriptions and consumable items.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold text-neon-cyan mb-3">Why Not Lower/Higher?</h3>
                                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                                    <li><strong>Not 4+/9+:</strong> Strategic warfare themes and real-world location gameplay require maturity.</li>
                                    <li><strong>Not 17+:</strong> No graphic violence, gore, sexual content, profanity, or alcohol/drug references.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">3. Content Description</h2>
                        <div className="space-y-4">
                            <div className="bg-slate-grey p-4 rounded border border-white/10">
                                <h3 className="font-bold text-white">Violence</h3>
                                <p className="text-gray-400 text-sm">Infrequent/Mild. Abstract representation of territorial conflicts. No blood or gore.</p>
                            </div>
                            <div className="bg-slate-grey p-4 rounded border border-white/10">
                                <h3 className="font-bold text-white">User-Generated Content</h3>
                                <p className="text-gray-400 text-sm">Yes (Moderated). Text chat, territory names, avatars. Automated filters and human moderation in place.</p>
                            </div>
                            <div className="bg-slate-grey p-4 rounded border border-white/10">
                                <h3 className="font-bold text-white">Location Services</h3>
                                <p className="text-gray-400 text-sm">Required. Real-time GPS used for core gameplay. Location shown to others is approximate, not precise.</p>
                            </div>
                            <div className="bg-slate-grey p-4 rounded border border-white/10">
                                <h3 className="font-bold text-white">Restricted Content (None)</h3>
                                <p className="text-gray-400 text-sm">No sexual content, profanity, gambling, alcohol/drug references, or horror themes.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">4. Parental Guidance</h2>
                        <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                            <h3 className="text-lg font-bold text-neon-cyan mb-4">Safety Tips for Parents</h3>
                            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
                                <li><strong>Outdoor Safety:</strong> Accompany children under 16 during outdoor gameplay. Ensure they do not trespass or enter dangerous areas.</li>
                                <li><strong>Online Interaction:</strong> Discuss online safety. Teach children not to share personal information.</li>
                                <li><strong>Purchases:</strong> Use iOS Screen Time to limit or disable in-app purchases if desired.</li>
                            </ul>
                            <p className="text-sm text-gray-500">
                                <strong>Parental Controls:</strong> You can use iOS Screen Time settings to restrict app usage, purchases, and location services.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
                        <p className="text-gray-400">
                            For questions about age ratings or to report inappropriate content: <a href="mailto:onestnet@gmail.com" className="text-neon-cyan hover:underline">onestnet@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AgeRating;

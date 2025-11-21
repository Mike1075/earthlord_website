import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MonetizationPolicy = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">Monetization Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">Last Updated: November 20, 2025</p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
                        <p className="text-gray-400">
                            EarthLord offers optional in-app purchases, including auto-renewable subscriptions and consumable items. All purchases are processed securely through Apple's In-App Purchase system. No purchase is required to play; all core gameplay features are free.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">2. Auto-Renewable Subscriptions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Pioneer Pass */}
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 flex flex-col">
                                <h3 className="text-xl font-bold text-neon-cyan mb-2">Pioneer Monthly Pass</h3>
                                <p className="text-3xl font-bold mb-1">$9.99<span className="text-sm text-gray-400 font-normal">/month</span></p>
                                <p className="text-sm text-gray-500 mb-6">Auto-renews monthly</p>
                                <ul className="text-sm text-gray-300 space-y-3 flex-grow">
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> Daily resource bundle (Energy x200, Materials x100)</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> +20% gathering speed</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> +1 building queue slot</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> Priority customer support</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> No ads</li>
                                </ul>
                            </div>

                            {/* Lord's Pass */}
                            <div className="bg-slate-grey p-6 rounded-lg border border-neon-cyan/50 shadow-[0_0_15px_rgba(0,255,255,0.1)] flex flex-col">
                                <h3 className="text-xl font-bold text-neon-cyan mb-2">Lord's Premium Pass</h3>
                                <p className="text-3xl font-bold mb-1">$19.99<span className="text-sm text-gray-400 font-normal">/month</span></p>
                                <p className="text-sm text-gray-500 mb-6">Auto-renews monthly</p>
                                <ul className="text-sm text-gray-300 space-y-3 flex-grow">
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> <strong>All Pioneer benefits</strong></li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> Daily premium bundle (Energy x500, Materials x300, Rare x10)</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> +50% gathering speed</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> +2 building queue slots</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> +3 research queue slots</li>
                                    <li className="flex items-start"><span className="text-neon-cyan mr-2">•</span> Exclusive legendary skins</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 p-4 bg-slate-grey/50 rounded text-sm text-gray-400">
                            <p><strong>Subscription Terms:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and cancel your subscriptions in your Apple Account Settings.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">3. Consumable Items</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Energy Packs</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex justify-between"><span>Small (1,000 Energy)</span> <span>$0.99</span></li>
                                    <li className="flex justify-between"><span>Medium (5,000 Energy)</span> <span>$4.99</span></li>
                                    <li className="flex justify-between"><span>Large (15,000 Energy)</span> <span>$9.99</span></li>
                                    <li className="flex justify-between"><span>Mega (50,000 Energy)</span> <span>$29.99</span></li>
                                </ul>
                            </div>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold text-white mb-4">Time Accelerators</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex justify-between"><span>1-Hour Speed-Up</span> <span>$0.99</span></li>
                                    <li className="flex justify-between"><span>8-Hour Speed-Up</span> <span>$4.99</span></li>
                                    <li className="flex justify-between"><span>24-Hour Speed-Up</span> <span>$9.99</span></li>
                                    <li className="flex justify-between"><span>3-Day Speed-Up</span> <span>$19.99</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">Consumable items are one-time purchases that are used in-game. They cannot be refunded once consumed.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Refund Policy</h2>
                        <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                            <p className="text-gray-400">
                                All sales are final. However, you may be eligible for a refund in certain circumstances under Apple's refund policy.
                            </p>
                            <div>
                                <h3 className="text-lg font-bold text-neon-cyan mb-2">How to Request a Refund</h3>
                                <p className="text-gray-400 mb-2">Refund requests must be made directly to Apple. We do not have the ability to process refunds.</p>
                                <ol className="list-decimal pl-6 text-gray-400 space-y-1">
                                    <li>Go to <a href="https://reportaproblem.apple.com" className="text-neon-cyan hover:underline">reportaproblem.apple.com</a></li>
                                    <li>Sign in with your Apple ID</li>
                                    <li>Find the EarthLord purchase</li>
                                    <li>Select "Report a Problem" and follow the prompts</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact & Support</h2>
                        <p className="text-gray-400 mb-4">
                            For billing issues, please contact Apple Support. For in-game content issues after a purchase, contact us:
                        </p>
                        <ul className="text-gray-400">
                            <li>Email: <a href="mailto:onestnet@gmail.com" className="text-neon-cyan hover:underline">onestnet@gmail.com</a></li>
                            <li>WeChat: aixue2075</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MonetizationPolicy;

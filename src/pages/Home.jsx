import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="min-h-screen bg-void-black text-white selection:bg-neon-cyan selection:text-black">
            <Navbar />
            <Hero />

            {/* Placeholder for other sections */}
            <div id="features" className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center">Game Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-grey p-6 rounded-2xl border border-white/5">
                        <img src="/images/gameplay_concept_map_1763660195356.png" alt="GPS Gameplay" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Real-World Territory</h3>
                        <p className="text-gray-400">Walk to claim land. Your footsteps define your empire.</p>
                    </div>
                    <div className="bg-slate-grey p-6 rounded-2xl border border-white/5">
                        <img src="/images/gameplay_concept_ruins_1763660206931.png" alt="Ruins" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Scavenge Ruins</h3>
                        <p className="text-gray-400">Explore real-world POIs to find resources and loot.</p>
                    </div>
                    <div className="bg-slate-grey p-6 rounded-2xl border border-white/5">
                        <img src="/images/gameplay_concept_base_1763660216922.png" alt="Base Building" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Build & Survive</h3>
                        <p className="text-gray-400">Construct shelters and defend your resources.</p>
                    </div>
                </div>
            </div>

            {/* Media Gallery Section */}
            <div className="py-20 bg-void-black relative overflow-hidden">
                <div className="absolute inset-0 bg-neon-cyan/5 blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-neon-cyan font-mono text-sm tracking-widest mb-2 block">VISUAL ARCHIVES</span>
                        <h2 className="text-4xl font-bold text-white">Concept Art & World Building</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            '/assets/images/3925a373-36ac-4625-a370-d8a873f1d9eb.png',
                            '/assets/images/5bfefe36-4ec5-4c6b-9110-49992d78ffc4.png',
                            '/assets/images/8bd11319-1070-4bf2-aa12-1ad55bd140c7.png',
                            '/assets/images/8ce18115-ec22-48e4-9ff7-0b395d1046dd.png',
                            '/assets/images/d33c8d61-f4d1-4691-9283-32bed0cdaf89.png',
                            '/assets/images/d78c7378-89fc-44cb-b928-221641cbddce.png'
                        ].map((src, index) => (
                            <div key={index} className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                                <img
                                    src={src}
                                    alt={`Concept Art ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-mono text-xs tracking-wider">IMG_REF_{1000 + index}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="ai-story" className="py-20 bg-slate-grey/30">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <img src="/images/ai_matrix_code_1763660227330.png" alt="AI Code" className="rounded-2xl shadow-2xl border border-neon-cyan/20" />
                    </div>
                    <div className="flex-1">
                        <span className="text-neon-cyan font-mono text-sm tracking-widest mb-2 block">BEHIND THE SCENES</span>
                        <h2 className="text-4xl font-bold mb-6">100% AI Developed</h2>
                        <p className="text-gray-300 text-lg mb-6">
                            Every line of code, every mechanic, and every pixel of logic was generated by Claude Code.
                            54,526 lines of code written in just 3 weeks by a single developer.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-neon-cyan pl-4">
                                <div className="text-3xl font-bold text-white">3 Weeks</div>
                                <div className="text-sm text-gray-400">Development Time</div>
                            </div>
                            <div className="border-l-2 border-neon-cyan pl-4">
                                <div className="text-3xl font-bold text-white">54k+</div>
                                <div className="text-sm text-gray-400">Lines of Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

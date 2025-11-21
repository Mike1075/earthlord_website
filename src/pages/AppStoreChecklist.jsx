import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppStoreChecklist = () => {
    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">App Store Submission Checklist</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-4">Last Updated: November 20, 2025</p>
                    <p className="text-gray-400 mb-8">
                        This comprehensive checklist covers all requirements for submitting EarthLord to the Apple App Store based on the latest November 2025 App Store Review Guidelines.
                    </p>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. App Store Connect Account Setup</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">1.1 Developer Account</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Apple Developer Program membership active ($99/year)</li>
                                        <li>Payment and banking information configured</li>
                                        <li>Tax forms completed (W-8/W-9 as applicable)</li>
                                        <li>Agreements, Tax, and Banking status: Active (green)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">1.2 App Record Created</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>App created in App Store Connect</li>
                                        <li>Bundle ID registered and matches Xcode project: <code>com.aixue.earthlord</code></li>
                                        <li>App name "EarthLord" confirmed</li>
                                        <li>Primary language set: English</li>
                                        <li>Additional language added: Chinese (Simplified)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Build and Technical Requirements</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">2.1 Xcode Build</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Built with latest stable Xcode version (Xcode 16+)</li>
                                        <li>iOS deployment target: iOS 16.0 or higher</li>
                                        <li>Supports iPhone and iPad (Universal app)</li>
                                        <li>No deprecated APIs or compiler warnings</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">2.3 Technical Compliance</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>App does not crash on launch or during core gameplay</li>
                                        <li>All features functional (GPS, camera, photos, notifications)</li>
                                        <li>Location services work correctly (foreground and background)</li>
                                        <li>In-app purchases tested and functional</li>
                                        <li>Push notifications deliver properly</li>
                                        <li>No placeholder content or debug features</li>
                                        <li>Respects iOS permission prompts</li>
                                        <li>Supports light and dark mode appropriately</li>
                                        <li>VoiceOver accessibility tested</li>
                                        <li>Offline functionality handled gracefully</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. App Metadata</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">3.1 Basic Information</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Name: "EarthLord"</li>
                                        <li>Subtitle: "Post-Apocalyptic Strategy"</li>
                                        <li>Category: Games &gt; Strategy / Adventure</li>
                                        <li>Content Rights: "I own the rights"</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">3.2 Pricing and Availability</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Base App: Free</li>
                                        <li>Pioneer Monthly Pass: $9.99/month</li>
                                        <li>Lord's Premium Pass: $19.99/month</li>
                                        <li>Consumables configured (Energy, Resources, Speed-ups)</li>
                                        <li>Subscription groups created properly</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">3.3 App Information</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Copyright: © 2025 AiXue AI</li>
                                        <li>Contact Email: onestnet@gmail.com</li>
                                        <li>Privacy Policy URL: Hosted and accessible</li>
                                        <li>Age Rating: 13+ (Infrequent/Mild Violence, Moderated UGC)</li>
                                        <li><strong>New 2025:</strong> Third-party AI disclosure (None)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. App Screenshots</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <p className="text-gray-400 mb-4">Required for all device sizes (6.9", 6.7", 6.5", 12.9" iPad):</p>
                                <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                    <li>Screenshot 1: Main map view with territories</li>
                                    <li>Screenshot 2: Territory detail/building interface</li>
                                    <li>Screenshot 3: Battle or attack screen</li>
                                    <li>Screenshot 4: Social features (alliance, chat)</li>
                                    <li>Screenshot 5: Player profile or achievements</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Legal and Compliance</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">5.1 Required Policies</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li><strong>Privacy Policy:</strong> Covers location data, third-party services, user rights, GDPR/CCPA/COPPA.</li>
                                        <li><strong>Terms of Service:</strong> Covers registration, conduct, IP rights, liability.</li>
                                        <li><strong>Monetization Policy:</strong> Covers subscriptions, auto-renewal, refunds.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">5.2 App Review Information</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>Demo Account provided (Username/Password)</li>
                                        <li>Contact Information provided</li>
                                        <li>Notes for reviewer (Location testing, IAP testing, Battery warning)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. App Privacy Details</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                    <li>Data Collection: Contact Info, Location, User Content, Identifiers, Usage Data, Purchases.</li>
                                    <li>Linked to User: Yes (for all above).</li>
                                    <li>Used for Tracking: No.</li>
                                    <li>Third-Party AI Sharing: No.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Guideline Compliance (2025)</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10 space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">Safety & Performance</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>No objectionable content; moderated UGC.</li>
                                        <li>Physical harm warnings included.</li>
                                        <li>App is complete and functional (no beta/test content).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-neon-cyan mb-2">Business & Legal</h3>
                                    <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                        <li>All payments via Apple In-App Purchase.</li>
                                        <li>Subscription terms clearly disclosed.</li>
                                        <li>Privacy Policy and Terms linked.</li>
                                        <li>Location services used only for app functionality.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Final Pre-Submission Checks</h2>
                            <div className="bg-slate-grey p-6 rounded-lg border border-white/10">
                                <ul className="list-disc pl-6 text-gray-400 space-y-1">
                                    <li>App Store Connect fields completed (Green checkmarks).</li>
                                    <li>Latest build selected (v1.0).</li>
                                    <li>Tested with Demo Account successfully.</li>
                                    <li>Content proofread (No placeholders).</li>
                                    <li>Legal links live and accessible.</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 p-4 bg-slate-grey rounded-lg border border-white/10">
                        <p className="text-sm text-gray-500">
                            This checklist is for internal use by AiXue AI developers and compliance officers.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppStoreChecklist;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, ArrowRight, Send } from 'lucide-react';
import { SITE_URL } from '../../constants';

const ContactSupport: React.FC = () => (
    <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
        <Helmet>
            <title>Contact Support | ACEBET Alliance - 24/7 Customer Assistance & Support</title>
            <meta name="description" content="Need help? Contact ACEBET Alliance support team via Telegram, Email, or Live Chat. We are available 24/7 to assist with all your gaming needs in the Philippines." />
            <link rel="canonical" href={`${SITE_URL}/legal/contact-support`} />
        </Helmet>
        
        <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm uppercase tracking-widest">GET IN TOUCH</div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Contact Us</h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
                    Need help? Our support team is available 24/7 to assist you with any questions or issues across all ACEBET Alliance platforms.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 mb-16">
                {/* Telegram */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-md transition-all">
                    <div className="w-20 h-20 rounded-2xl bg-[#0088cc]/10 text-[#0088cc] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Send size={40} fill="currentColor" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Telegram</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Get instant support via our official Telegram channel. Fastest response time!</p>
                        <a href="https://t.me/ACEBETALLIANCE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0088cc] text-white font-black rounded-xl hover:bg-[#0077b5] transition-all shadow-lg shadow-[#0088cc]/20 uppercase tracking-widest text-sm">
                            Chat on Telegram
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-md transition-all">
                    <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={40} />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Email Support</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Send us detailed inquiries via email. We respond within 24 hours.</p>
                        <a href="mailto:support@acebetalliance.com" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-xl hover:opacity-90 transition-all shadow-lg uppercase tracking-widest text-sm">
                            Send Email
                        </a>
                    </div>
                </div>

                {/* Live Chat */}
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-md transition-all">
                    <div className="w-20 h-20 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <MessageSquare size={40} />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Live Chat</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Chat directly with our support team through the platform. Real-time assistance!</p>
                        <a href="https://t.me/ACEBETALLIANCE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-black rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 uppercase tracking-widest text-sm">
                            Start Live Chat
                        </a>
                    </div>
                </div>
            </div>

            {/* 24/7 Support Info */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white text-center mb-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4">24/7 Support Available</h2>
                    <p className="text-blue-100 mb-8 text-lg font-medium">We're here for you anytime, day or night!</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-sm font-bold uppercase tracking-widest">
                        <div className="flex flex-col gap-1">
                            <span className="text-blue-200">Telegram Response</span>
                            <span className="text-xl">Under 5 minutes</span>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-blue-200">Email Response</span>
                            <span className="text-xl">Within 24 hours</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQs Links */}
            <div className="mb-16">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/services/faqs" className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <span className="font-bold text-slate-900 dark:text-white">Registration Guide</span>
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link to="/legal/privacy-policy" className="flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <span className="font-bold text-slate-900 dark:text-white">Privacy Policy</span>
                        <ArrowRight size={20} className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-slate-100 dark:bg-slate-800/50 rounded-[2.5rem] p-12 border border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Didn't find your answer?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium max-w-xl mx-auto">
                    Our support team is always ready to help! Contact us via Telegram, Email, or Live Chat for personalized assistance.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                     <a href="https://t.me/ACEBETALLIANCE" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        TELEGRAM
                    </a>
                    <a href="mailto:support@acebetalliance.com" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        EMAIL
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default ContactSupport;

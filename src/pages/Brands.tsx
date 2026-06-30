import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Star, ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import { PLATFORMS, SITE_URL } from '../constants';
import { Link } from 'react-router-dom';

export const Brands: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Trusted Casino Brands | ACEBET Alliance Partner Network</title>
                <meta name="description" content="Explore the most reliable online casino and betting brands in the Philippines. ACEBET Alliance only partners with licensed and secure platforms." />
                <link rel="canonical" href={`${SITE_URL}/brands`} />
            </Helmet>
            <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm uppercase">TRUSTED ALLIANCES</div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Our Partner Brands</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">We only partner with the most reliable, licensed, and secure gaming platforms in the industry.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {PLATFORMS.map((b, i) => (
                        <div key={b.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                            <div className="aspect-[7/4] w-full rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center p-4">
                                <img 
                                    src={b.image}
                                    alt={b.name} 
                                    className="object-contain rounded-2xl max-h-full max-w-full"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${b.badgeColor}`}>{b.type}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{b.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">{b.desc}</p>
                                <div className="flex gap-3">
                                    <Link 
                                        to={`/brands/${b.id.replace('brand-', '')}`}
                                        className="flex-grow rounded-xl btn-primary py-4 text-sm font-black text-center text-white transition-all shadow-lg hover:shadow-xl uppercase"
                                    >
                                        Review Site
                                    </Link>
                                    <a 
                                        href={b.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-6">Alliance Quality Standards</h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">Every brand in our alliance undergoes a rigorous vetting process to ensure they meet our high standards for security, fairness, and player satisfaction.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Licensed & Regulated",
                                    "Fast Payouts Guaranteed",
                                    "Fair Play Certification",
                                    "24/7 Customer Support",
                                    "Advanced Data Encryption",
                                    "Responsible Gaming Tools"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-blue-50 font-bold text-sm">
                                        <CheckCircle className="text-blue-300 shrink-0" size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-80 aspect-square rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-8">
                             <div className="text-center">
                                <Shield size={64} className="text-white mx-auto mb-6" fill="currentColor" />
                                <div className="text-2xl font-black mb-2">VERIFIED</div>
                                <p className="text-xs text-blue-200">ACEBET Alliance Certified</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

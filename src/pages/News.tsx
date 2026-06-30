import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Newspaper, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { SITE_URL } from '../constants';

export const News: React.FC = () => {
    const articles = [
        { title: 'The Rise of E-Sports Betting in 2026', date: 'Mar 20, 2026', category: 'Industry', excerpt: 'Discover the latest trends and insights on how e-sports betting is evolving in the current year and what it means for players.' },
        { title: 'New Security Protocols for Online Casinos', date: 'Mar 18, 2026', category: 'Security', excerpt: 'ACEBET Alliance implements state-of-the-art encryption and security measures to protect player data and transactions.' },
        { title: 'Top 10 Slot Games to Play This Month', date: 'Mar 15, 2026', category: 'Gaming', excerpt: 'Check out our hand-picked selection of the most exciting and rewarding slot games available across our partner platforms.' },
        { title: 'Understanding Crypto Payments in Betting', date: 'Mar 12, 2026', category: 'Finance', excerpt: 'A comprehensive guide to using Bitcoin, Ethereum, and USDT for fast and anonymous deposits and withdrawals.' },
        { title: 'AceBet Alliance Expands to New Markets', date: 'Mar 10, 2026', category: 'Company', excerpt: 'We are proud to announce our expansion into new regions, bringing premium gaming experiences to more players across Asia.' },
        { title: 'How to Manage Your Betting Bankroll', date: 'Mar 05, 2026', category: 'Guide', excerpt: 'Expert tips and strategies on how to manage your funds effectively and ensure a responsible and enjoyable gaming experience.' },
    ];

    return (
        <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>Latest Casino News & Gaming Updates | ACEBET Alliance</title>
                <meta name="description" content="Stay updated with the latest news, trends, and updates from ACEBET Alliance. Industry insights, security protocols, and gaming guides." />
                <link rel="canonical" href={`${SITE_URL}/news`} />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm uppercase">STAY INFORMED</div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Latest News & Updates</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">Your source for the latest industry insights, platform updates, and expert gaming guides.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {articles.map((a, i) => (
                        <article key={i} className="group flex flex-col sm:flex-row gap-8 bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                            <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 sm:w-48">
                                <img 
                                    src={`https://picsum.photos/seed/news${i}/400/400`} 
                                    alt={a.title} 
                                    className="h-full w-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
                                    <span>{a.category}</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                    <span className="text-slate-500">{a.date}</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                                    {a.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {a.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 hover:gap-4 transition-all uppercase tracking-widest">
                                    READ MORE <ArrowRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 border border-slate-200 dark:border-slate-700 shadow-lg text-center">
                     <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6"><Newspaper size={32} /></div>
                     <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Subscribe to Our Newsletter</h2>
                     <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">Get the latest gaming news, exclusive promotions, and expert betting tips delivered straight to your inbox.</p>
                     <form className="max-w-md mx-auto flex gap-2">
                        <input type="email" placeholder="Email Address" className="flex-1 px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all" />
                        <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg uppercase tracking-widest">JOIN</button>
                     </form>
                </div>
            </div>
        </div>
    );
};

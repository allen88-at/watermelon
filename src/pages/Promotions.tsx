import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Gift, Star, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_URL } from '../constants';

export const Promotions: React.FC = () => {
    const promos = [
        { 
            title: '100% Welcome Bonus', 
            category: 'New Member', 
            desc: 'Double your first deposit up to ₱5,000. Start your journey with a massive boost!',
            terms: 'Min deposit ₱100. 20x Turnover.',
            color: 'from-blue-600 to-indigo-700'
        },
        { 
            title: 'Daily Rebate 1.2%', 
            category: 'All Games', 
            desc: 'Get unlimited daily rebate for all your bets, win or lose. No cap on earnings!',
            terms: 'Calculated daily at 12:00 PM.',
            color: 'from-slate-800 to-slate-950'
        },
        { 
            title: 'Weekly Lucky Draw', 
            category: 'Event', 
            desc: 'Win up to ₱100,000 every Sunday. Every ₱1,000 bet earns you one entry ticket.',
            terms: 'Winners announced on Telegram.',
            color: 'from-red-600 to-rose-700'
        },
        { 
            title: 'Refer a Friend', 
            category: 'Affiliate', 
            desc: 'Earn ₱500 for every friend you refer who makes a successful deposit.',
            terms: 'Friend must deposit min ₱500.',
            color: 'from-emerald-600 to-teal-700'
        },
        { 
            title: 'VIP Birthday Gift', 
            category: 'VIP Only', 
            desc: 'Exclusive rewards and personalized gifts on your special day. We celebrate you!',
            terms: 'Available for VIP Level 2 and above.',
            color: 'from-purple-600 to-violet-700'
        },
        { 
            title: 'Slot Tournament', 
            category: 'Slots', 
            desc: 'Compete for the ₱1,000,000 prize pool. Climb the leaderboard and win big!',
            terms: 'Selected JILI and PG Soft slots.',
            color: 'from-amber-500 to-orange-600'
        },
    ];

    return (
        <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>Casino Bonuses & Promotions | ACEBET Alliance Rewards</title>
                <meta name="description" content="Claim exclusive welcome bonuses, daily rebates, and weekly rewards at ACEBET Alliance. Boost your winnings with the best promos in the Philippines." />
                <link rel="canonical" href={`${SITE_URL}/promotions`} />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm uppercase">BIGGER REWARDS</div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Exclusive Promotions</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">Boost your bankroll with our premium selection of bonuses and rewards.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {promos.map((p, i) => (
                        <div key={i} className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all">
                            <div className={`h-3 bg-gradient-to-r ${p.color}`}></div>
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{p.category}</span>
                                    <Gift className="text-blue-500 opacity-20 group-hover:opacity-100 transition-opacity" size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{p.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                                
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase mb-8">
                                    <Clock size={12} /> {p.terms}
                                </div>

                                <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${p.color} text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group-hover:gap-4`}>
                                    CLAIM BONUS <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-200 dark:border-slate-700 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">General Promotion Terms</h2>
                            <div className="space-y-4">
                                {[
                                    "One promotion per player/account/IP address.",
                                    "Turnover requirements must be met before withdrawal.",
                                    "ACEBET Alliance reserves the right to modify or cancel promotions.",
                                    "Standard Terms and Conditions apply to all bonuses."
                                ].map((term, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                        <span>{term}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-72 aspect-square rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                             <div className="text-center">
                                <Star size={48} className="text-amber-400 mx-auto mb-4" fill="currentColor" />
                                <div className="text-2xl font-black text-slate-900 dark:text-white">VIP REWARDS</div>
                                <p className="text-xs text-slate-500 mt-2">Coming Soon</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

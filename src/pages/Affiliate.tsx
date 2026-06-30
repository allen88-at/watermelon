import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Percent, Headset, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_URL } from '../constants';

export const Affiliate: React.FC = () => (
    <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
        <Helmet>
            <title>Casino Affiliate Program & Partnerships | ACEBET Alliance</title>
            <meta name="description" content="Join the ACEBET Alliance Affiliate Program and earn up to 45% commission. Partner with the leading gaming platform in the Philippines today." />
            <link rel="canonical" href={`${SITE_URL}/services/affiliate`} />
        </Helmet>
        
        <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-[10px] font-black mb-6 shadow-sm uppercase tracking-widest">PARTNER PROGRAM</div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Join ACEBET Affiliate</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                    Earn up to 45% commission by referring players to the Philippines' #1 gaming platform.
                </p>
                <div className="flex justify-center">
                    <a 
                        href="https://t.me/ACEBETALLIANCE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-8 px-10 py-4 text-white font-bold rounded-xl shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm inline-flex items-center gap-2"
                    >
                        Become a Partner <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                    { icon: <Percent className="text-blue-600" />, title: "High Commission", desc: "Earn competitive rates starting from 30% up to 50% revenue share.", bg: "bg-blue-50" },
                    { icon: <Headset className="text-green-600" />, title: "Dedicated Support", desc: "Get a personal account manager to help you maximize your earnings.", bg: "bg-green-50" },
                    { icon: <Zap className="text-amber-600" />, title: "Fast Payouts", desc: "Monthly on-time payments via your preferred payment method.", bg: "bg-amber-50" },
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-[32px] border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:shadow-xl transition-all">
                        <div className={`w-16 h-16 rounded-2xl ${item.bg} dark:bg-slate-900 flex items-center justify-center mx-auto mb-6`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Card */}
            <div className="bg-white dark:bg-slate-800 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-2xl overflow-hidden">
                <div className="p-8 md:p-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Apply as an Affiliate with <span className="text-blue-600">ACEBET ALLIANCE</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed">
                        Earn Up to <span className="font-bold text-slate-900 dark:text-white">50% Commission</span> Every Month! Ready to turn your referrals into steady monthly income? With our high-paying affiliate program, you'll earn a commission based on the company's net profit every month!
                    </p>

                    {/* Commission Formula */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 mb-12 border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Commission Formula:</h4>
                        <p className="text-slate-600 dark:text-slate-300 font-bold italic">Net Profit = Customer Win/Loss - 100% Promotion Fee</p>
                    </div>

                    {/* Plan A */}
                    <div className="mb-12">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Plan A: Fixed Commission (40%)</h3>
                        <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Active Members</th>
                                        <th className="px-6 py-4">Net Win</th>
                                        <th className="px-6 py-4 text-right">Commission</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-bold text-slate-600 dark:text-slate-300 divide-y divide-slate-50 dark:divide-slate-700">
                                    <tr>
                                        <td className="px-6 py-4">5</td>
                                        <td className="px-6 py-4">₱1,000</td>
                                        <td className="px-6 py-4 text-right text-green-600">40%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Plan B */}
                    <div className="mb-16">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Plan B: Staircase Commission (up to 50%)</h3>
                        <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-700">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-900 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Active Members</th>
                                        <th className="px-6 py-4">Net Win</th>
                                        <th className="px-6 py-4 text-right">Commission</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-bold text-slate-600 dark:text-slate-300 divide-y divide-slate-50 dark:divide-slate-700">
                                    {[
                                        { members: '5', win: '₱1,000', comm: '30%' },
                                        { members: '10', win: '₱1,000', comm: '35%' },
                                        { members: '15', win: '₱10,000', comm: '40%' },
                                        { members: '20', win: '₱10,000', comm: '45%' },
                                        { members: '30', win: '₱100,000', comm: '50%' },
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="px-6 py-4">{row.members}</td>
                                            <td className="px-6 py-4">{row.win}</td>
                                            <td className="px-6 py-4 text-right text-green-600">{row.comm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* How to become an agent */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] p-8 md:p-12 mb-12 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8">How to become an agent?</h3>
                        <div className="space-y-4">
                            {[
                                "Register as an agent with ACE ALLIANCE by filling in application information.",
                                "Wait for account approval and receive your login credentials via the email and Telegram you provided.",
                                "Log in to the agent backend and review your commission plan.",
                                "Start referring players with your own affiliate link and track their activity in real-time.",
                                "Commissions are settled by 6:00 PM - you can request a withdrawal right after.",
                                "Need help? Contact Customer Service 24/7."
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <motion.a 
                            animate={{ 
                                boxShadow: ["0 0 0 0 rgba(37, 99, 235, 0)", "0 0 0 20px rgba(37, 99, 235, 0)", "0 0 0 0 rgba(37, 99, 235, 0)"] 
                            }}
                            transition={{ 
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            href="https://t.me/ACEBETALLIANCE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-12 py-5 text-white font-bold rounded-2xl shadow-2xl shadow-blue-600/30 uppercase tracking-widest flex items-center gap-3 mx-auto w-fit"
                        >
                            JOIN AFFILIATE NOW <ArrowRight size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

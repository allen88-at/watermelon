import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    CreditCard, Landmark, Bitcoin, 
    ShieldCheck, Zap, Globe, 
    CheckCircle2, HelpCircle, 
    ArrowRight, Smartphone, Lock
} from 'lucide-react';
import { SITE_URL } from '../constants';

export const Payments: React.FC = () => (
    <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
        <Helmet>
            <title>Fast & Secure Casino Payment Methods | ACEBET Alliance</title>
            <meta name="description" content="Secure and fast payment methods for ACEBET Alliance. We support GCash, Maya, Bank Transfers, and Crypto for players in the Philippines." />
            <link rel="canonical" href={`${SITE_URL}/services/payments`} />
        </Helmet>
        
        <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-[10px] font-black mb-6 shadow-sm uppercase tracking-widest">TRANSACTION GUIDE</div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Fast & Secure Payments</h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                    We offer a wide range of localized payment solutions tailored for the Philippine market, ensuring your funds are always safe and accessible.
                </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {[
                    { icon: <ShieldCheck size={20} />, text: "SSL Encrypted" },
                    { icon: <Zap size={20} />, text: "Instant Deposit" },
                    { icon: <Lock size={20} />, text: "Secure Storage" },
                    { icon: <Globe size={20} />, text: "24/7 Support" },
                ].map((badge, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <span className="text-blue-600">{badge.icon}</span>
                        <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{badge.text}</span>
                    </div>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="space-y-12">
                {/* Security Standard Section */}
                <section className="bg-[#0a0f1a] rounded-[40px] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden border border-blue-500/20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full -mr-64 -mt-64 blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full -ml-64 -mb-64 blur-[120px] pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                <ShieldCheck size={14} /> SECURITY PROTOCOL
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Security Standard</span>
                            </h2>
                            <p className="text-slate-400 mb-8 leading-relaxed text-lg font-medium">
                                Your financial safety is our top priority. We employ multi-layered security measures to ensure every transaction is protected.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Lock size={20} />, title: "256-bit Encryption", desc: "Military-grade SSL protection for all data.", color: "text-blue-400" },
                                    { icon: <CheckCircle2 size={20} />, title: "PAGCOR Verified", desc: "Fully licensed and regulated operations.", color: "text-cyan-400" },
                                    { icon: <Smartphone size={20} />, title: "2FA Verification", desc: "Multi-factor authentication for withdrawals.", color: "text-blue-400" },
                                    { icon: <ShieldCheck size={20} />, title: "Fraud Detection", desc: "AI-powered real-time monitoring system.", color: "text-cyan-400" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color} shrink-0 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-80 aspect-square rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center p-8 relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]"></div>
                        <div className="text-center relative z-10">
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                                   <img
                                   src="/images/ace fair games union.jpg"
                                   alt="ACE Verified Logo"
                                className="w-60 h-60 mx-auto relative z-10 object-contain rounded-md"
                                />
                                </div>
                                <div className="text-2xl font-black mb-2 uppercase tracking-tighter text-white">SECURE & VERIFIED</div>
                                <p className="text-xs text-slate-400 font-bold">ACEBET Alliance Certified</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* E-Wallets Section */}
                <section className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6">
                                <Smartphone size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">E-Wallets</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                The most popular way to play in the Philippines. Fast, convenient, and accessible from your mobile phone.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { name: "GCash", speed: "Instant", limit: "₱100 - ₱50,000", desc: "The #1 mobile wallet in PH. Seamless integration with all our brands." },
                                { name: "Maya", speed: "Instant", limit: "₱100 - ₱50,000", desc: "Secure and reliable. Perfect for high-volume transactions." },
                                { name: "GrabPay", speed: "1-3 Mins", limit: "₱200 - ₱30,000", desc: "Use your Grab credits to fund your gaming account safely." },
                                { name: "ShopeePay", speed: "1-5 Mins", limit: "₱100 - ₱20,000", desc: "Fast and easy checkout using your Shopee account." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-black text-slate-900 dark:text-white mb-1">{item.name}</h4>
                                    <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest mb-3">
                                        <span className="text-green-600">Speed: {item.speed}</span>
                                        <span className="text-blue-600">Limit: {item.limit}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bank Transfer Section */}
                <section className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex flex-col md:flex-row-reverse gap-12">
                        <div className="md:w-1/3">
                            <div className="w-16 h-16 rounded-3xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-6">
                                <Landmark size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Bank Transfers</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Traditional banking for larger transactions. We support all major Philippine banks via InstaPay and PESONet.
                            </p>
                        </div>
                        <div className="md:w-2/3 space-y-6">
                            <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-4">Supported Banks</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {["BDO", "BPI", "Metrobank", "UnionBank", "RCBC", "Landbank", "Security Bank", "PNB"].map((bank, i) => (
                                        <div key={i} className="px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                            {bank}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30 flex gap-3 items-start">
                                    <HelpCircle className="text-amber-600 shrink-0" size={16} />
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Bank transfers via InstaPay are usually credited within 15 minutes. PESONet transfers may take up to 24 hours depending on banking hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Crypto Section */}
                <section className="bg-white dark:bg-slate-800 rounded-[40px] p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/3">
                            <div className="w-16 h-16 rounded-3xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center mb-6">
                                <Bitcoin size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Cryptocurrency</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                The ultimate in privacy and speed. No limits, no boundaries. Perfect for high-rollers and tech-savvy players.
                            </p>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { name: "USDT (TRC20)", speed: "5-10 Mins", limit: "No Max", desc: "The most stable and low-fee option for crypto users." },
                                { name: "Bitcoin (BTC)", speed: "10-30 Mins", limit: "No Max", desc: "The gold standard of crypto. Secure and globally recognized." },
                                { name: "Ethereum (ETH)", speed: "5-15 Mins", limit: "No Max", desc: "Fast smart-contract based transactions for modern players." },
                                { name: "Litecoin (LTC)", speed: "2-5 Mins", limit: "No Max", desc: "Ultra-fast and extremely low fees for daily transactions." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-black text-slate-900 dark:text-white mb-1">{item.name}</h4>
                                    <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest mb-3">
                                        <span className="text-green-600">Speed: {item.speed}</span>
                                        <span className="text-blue-600">Limit: {item.limit}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Detailed Guide Section */}
            <div className="mt-20 bg-slate-900 rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Understanding Our Payment Ecosystem</h2>
                            <div className="space-y-6 text-slate-400 leading-relaxed">
                                <p>
                                    At ACEBET Alliance, we understand that the speed and reliability of payments are the most critical factors for our players. That's why we've built a robust financial infrastructure that connects directly with the Philippines' leading financial institutions. Whether you're a casual player using GCash or a professional using Crypto, our system is designed to handle your transactions with military-grade security.
                                </p>
                                
                                {/* Transaction Timeline Visualization */}
                                <div className="py-8">
                                    <h4 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-6">Average Processing Timeline</h4>
                                    <div className="relative">
                                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2" />
                                        <div className="relative flex justify-between">
                                            {[
                                                { time: "0m", label: "Request", color: "bg-blue-500" },
                                                { time: "5m", label: "Verification", color: "bg-blue-500" },
                                                { time: "15m", label: "Processing", color: "bg-blue-500" },
                                                { time: "30m", label: "Completed", color: "bg-emerald-500" },
                                            ].map((point, i) => (
                                                <div key={i} className="flex flex-col items-center gap-2 relative z-10">
                                                    <div className={`w-3 h-3 rounded-full ${point.color} ring-4 ring-slate-900`} />
                                                    <span className="text-[10px] font-bold text-white">{point.time}</span>
                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{point.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Our withdrawal process is streamlined to ensure you get your winnings as fast as possible. Most e-wallet withdrawals are processed within 30 minutes, while bank transfers are handled within the same business day. We pride ourselves on having the highest successful transaction rate in the industry, meaning you spend less time worrying about your funds and more time enjoying the game.
                                </p>
                                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "No hidden transaction fees",
                                        "24/7 dedicated payment support",
                                        "Automated deposit verification",
                                        "High-limit withdrawal support"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-blue-500" size={18} />
                                            <span className="text-sm font-bold text-slate-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                                    <Zap className="text-blue-400" /> Deposit Process
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Select Method", desc: "Choose from GCash, Maya, Bank, or Crypto." },
                                        { step: "02", title: "Enter Amount", desc: "Input your desired deposit amount (Min ₱100)." },
                                        { step: "03", title: "Confirm", desc: "Follow the provider's secure checkout page." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-2xl font-bold text-blue-500/50">{s.step}</div>
                                            <div>
                                                <div className="font-bold text-white">{s.title}</div>
                                                <div className="text-sm text-slate-400">{s.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-emerald-400" /> Withdrawal Process
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Request", desc: "Go to your wallet and click 'Withdraw'." },
                                        { step: "02", title: "Verification", desc: "Our system verifies your turnover requirements." },
                                        { step: "03", title: "Receive", desc: "Funds arrive in your account within 15-30 mins." }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-2xl font-bold text-emerald-500/50">{s.step}</div>
                                            <div>
                                                <div className="font-bold text-white">{s.title}</div>
                                                <div className="text-sm text-slate-400">{s.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center lg:text-left">
                        <a href="/brands" className="inline-flex px-8 py-4 btn-primary text-white font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all items-center gap-3 uppercase tracking-widest text-sm min-w-[240px] justify-center">
                            REIVEW OTHER BRAND <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

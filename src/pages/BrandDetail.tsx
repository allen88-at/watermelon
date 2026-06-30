import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Star, Shield, Zap, CreditCard, 
  ArrowRight, CheckCircle2, AlertCircle,
  ExternalLink, Trophy, Users, Gift,
  Smartphone, HelpCircle, ClipboardList,
  ChevronRight, Download, Settings, Play,
  Gamepad2, Wallet, ArrowDownToLine, ArrowUpFromLine,
  ShieldCheck, Clock, Lock, Banknote, Coins, Globe
} from 'lucide-react';
import { BRAND_REVIEWS, PLATFORMS, PAYMENT_PROVIDERS, SITE_URL } from '../constants';

export const BrandDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const brandKey = `brand-${id}`;
    const brand = BRAND_REVIEWS[brandKey];
    const platform = PLATFORMS.find(p => p.id === brandKey);

    if (!brand || !platform) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-2xl font-bold">Brand not found</h1>
                <Link to="/brands" className="text-blue-600 hover:underline mt-4 inline-block">Back to Brands</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>{brand.reviewTitle || `${brand.name} Review & Bonus | ACEBET Alliance`}</title>
                <meta name="description" content={brand.reviewContent ? (brand.reviewContent.length > 155 ? brand.reviewContent.substring(0, 152) + '...' : brand.reviewContent) : `Read our expert review of ${brand.name}. Get exclusive bonuses, check RTP, and start playing at the top-rated casino platform in the Philippines.`} />
                <link rel="canonical" href={`${SITE_URL}/brands/${id}`} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <img 
                    src={brand.banner} 
                    alt={brand.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 pb-4 md:pb-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white p-2 shadow-2xl overflow-hidden shrink-0">
                                <img src={platform.logo} alt={brand.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${platform.badgeColor}`}>
                                        {platform.type}
                                    </span>
                                    <div className="flex items-center gap-1 text-amber-400">
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                        <Star size={16} fill="currentColor" />
                                    </div>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">{brand.name}</h1>
                                <p className="text-slate-300 mt-2 font-medium max-w-xl line-clamp-2">{brand.reviewTitle}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <a 
                                href={brand.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none px-10 py-5 btn-primary text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group text-lg"
                            >
                                PLAY NOW <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Review Content */}
                        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">{brand.reviewTitle}</h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                    {brand.reviewContent}
                                </p>
                                <p className="mt-6 text-slate-600 dark:text-slate-300">
                                    {brand.name} has been a cornerstone of the ACEBET Alliance, providing players with a seamless and high-quality gaming experience. Their commitment to security and fair play is evident in every aspect of their operation. Whether you are a fan of high-RTP slots or immersive live dealer tables, this platform has something for everyone.
                                </p>
                            </div>

                            {/* Why Popular Section */}
                            {brand.whyPopular && (
                                <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-700">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                        <Users className="text-blue-600" /> Why {brand.name} is Popular in the Philippines
                                    </h3>
                                    <div className="prose prose-slate dark:prose-invert max-w-none">
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {brand.whyPopular}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Backup Domains Section */}
                            {brand.altDomains && brand.altDomains.length > 0 && (
                                <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-700">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                        <Zap className="text-amber-500" /> Backup Domains & Official Links
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {brand.altDomains.map((domain: any, idx: number) => (
                                            <a 
                                                key={idx}
                                                href={domain.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-colors group"
                                            >
                                                <span className="font-bold text-slate-700 dark:text-slate-200">{domain.name}</span>
                                                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                                    <ExternalLink size={18} />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Ratings Grid */}
                            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.entries(brand.ratings).map(([key, value]: [string, any]) => (
                                    <div key={key} className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">
                                            {value}<span className="text-sm ml-0.5 opacity-70">%</span>
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{key}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gaming Ecosystem Section */}
                        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                                    <Globe size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Gaming Ecosystem</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                                {/* Connection Lines (Desktop) */}
                                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-700 -translate-y-1/2 z-0" />
                                
                                {[
                                    { icon: <Smartphone size={24} />, title: "Mobile App", desc: "Optimized for iOS & Android devices." },
                                    { icon: <Globe size={24} />, title: "Web Platform", desc: "Seamless browser-based gaming experience." },
                                    { icon: <ShieldCheck size={24} />, title: "Secure Server", desc: "Military-grade data protection & fair play." },
                                ].map((item, i) => (
                                    <div key={i} className="relative z-10 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 text-center group hover:border-blue-500 transition-all">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-blue-600 flex items-center justify-center mx-auto mb-4">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-black text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Registration Steps */}
                        <section>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <ClipboardList className="text-blue-600" /> How to Register at {brand.name}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {brand.registrationSteps.map((step: string, i: number) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 font-medium">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Payment & Withdrawals Section */}
                        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                                    <Wallet size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Payment & Withdrawals</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                        <ArrowDownToLine size={16} className="text-blue-600" /> Supported Methods
                                    </h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {PAYMENT_PROVIDERS.map((provider: any, i: number) => (
                                            <div key={i} className="aspect-[2/1] bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700 p-2 flex items-center justify-center group hover:border-blue-500 transition-colors">
                                                <img src={provider.image} alt={provider.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                        <ShieldCheck size={16} className="text-emerald-600" /> Payment Security
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                                            <Lock size={18} className="text-emerald-600" />
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">256-bit SSL Encryption</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                                            <Zap size={18} className="text-blue-600" />
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Instant Payment Settlement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100 dark:border-slate-700">
                                            <th className="py-4 text-xs font-black uppercase tracking-widest text-slate-400">Method</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest text-slate-400">Min/Max</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest text-slate-400">Speed</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest text-slate-400 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {brand.paymentDetails.map((pay: any, i: number) => {
                                            const provider = PAYMENT_PROVIDERS.find(p => p.name === pay.method);
                                            return (
                                                <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                                                                {provider ? (
                                                                    <img src={provider.image} alt={pay.method} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                                                ) : (
                                                                    <CreditCard size={16} className="text-blue-600" />
                                                                )}
                                                            </div>
                                                            <span className="font-bold text-slate-900 dark:text-white">{pay.method}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{pay.min} - {pay.max}</span>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400">
                                                            <Clock size={14} className="text-blue-500" />
                                                            {pay.speed}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 text-right">
                                                        <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest">
                                                            Verified
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <h5 className="font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <ArrowDownToLine size={18} className="text-blue-600" /> How to Deposit
                                    </h5>
                                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                        <li className="flex gap-3">
                                            <span className="font-black text-blue-600">01.</span>
                                            Log in and click on the "Deposit" or "Wallet" button.
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-black text-blue-600">02.</span>
                                            Select your preferred method (GCash, Maya, Bank, etc.).
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-black text-blue-600">03.</span>
                                            Enter the amount and follow the on-screen instructions.
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                                    <h5 className="font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <ArrowUpFromLine size={18} className="text-emerald-600" /> How to Withdraw
                                    </h5>
                                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                        <li className="flex gap-3">
                                            <span className="font-black text-emerald-600">01.</span>
                                            Go to the "Withdrawal" section in your account dashboard.
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-black text-emerald-600">02.</span>
                                            Choose your withdrawal method and enter the amount.
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="font-black text-emerald-600">03.</span>
                                            Submit your request; funds are usually processed in 15 mins.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Popular Promos */}
                        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                                    <Gift size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Popular Promotions</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {brand.popularPromos.map((promo: string, i: number) => (
                                    <div key={i} className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg group cursor-pointer relative">
                                        <img src={promo} alt="Promotion" className="w-full h-auto" referrerPolicy="no-referrer" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                ))}
                            </div>
                            {brand.promoContent && (
                                <div className="mt-8 p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex gap-4 items-start">
                                    <AlertCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Popular Promotions</h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                            {brand.promoContent}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Game Selection */}
                        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center">
                                    <Trophy size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">Top Games at {brand.name}</h3>
                            </div>
                            <div className="space-y-10">
                                {Object.entries(brand.games).map(([provider, images]: [string, any]) => (
                                    <div key={provider}>
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">{provider} Gaming</h4>
                                            <div className="h-px flex-1 mx-4 bg-slate-200 dark:bg-slate-700" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {images.map((img: string, i: number) => (
                                                <div key={i} className="aspect-[5/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                                    <img src={img} alt="Game" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {brand.gameContent && (
                                <div className="mt-10 p-8 bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex gap-4 items-start">
                                    <Gamepad2 className="text-amber-500 shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">Top Games Selection</h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                            {brand.gameContent}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* App Guide CTA */}
                        <section className="bg-[#0a192f] rounded-[40px] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative group">
                            {/* Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-indigo-900/40" />
                            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
                            
                            {/* ACEBET Watermark Logo */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
                                <span className="text-[20vw] font-black tracking-tighter rotate-[-15deg] whitespace-nowrap">
                                    ACEBET ACEBET ACEBET
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-widest mb-6">
                                        <Smartphone size={14} /> Mobile Experience
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
                                        Download the <span className="text-blue-400">{brand.name}</span> Official App
                                    </h3>
                                    <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                                        Take your gaming to the next level. Get instant access to exclusive bonuses, faster withdrawals, and a premium mobile interface.
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                        <a 
                                            href={brand.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-10 py-5 btn-primary text-white font-black rounded-2xl shadow-lg shadow-blue-600/20 flex items-center gap-2 group/btn"
                                        >
                                            DOWNLOAD NOW <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                            <div className="flex -space-x-2">
                                                {[1,2,3].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a192f] bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                                                        {String.fromCharCode(64 + i)}
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-xs font-bold text-slate-400">50k+ Active Users</span>
                                        </div>
                                    </div>
                                </div>

                                {/* iPhone Frame */}
                                <div className="relative w-[280px] h-[580px] shrink-0">
                                    {/* Phone Body */}
                                    <div className="absolute inset-0 bg-[#1a1a1a] rounded-[50px] border-[8px] border-[#333] shadow-2xl overflow-hidden">
                                        {/* Notch */}
                                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#333] rounded-b-2xl z-50 flex items-center justify-center gap-2">
                                            <div className="w-12 h-1 bg-[#1a1a1a] rounded-full" />
                                            <div className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
                   {/* Buttons */}
                                    <div className="h-[32px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[80px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[120px] rounded-l-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[174px] rounded-l-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -right-[15px] top-[142px] rounded-r-lg"></div>
                                        </div>

                                        {/* Screen Content */}
                                        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                                            {brand.appGuideImage ? (
                                                <img 
                                                    src={brand.appGuideImage} 
                                                    alt="App Interface" 
                                                    className="w-full h-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center gap-4 text-slate-700">
                                                    <Smartphone size={60} strokeWidth={1} />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">ACEBET Mobile</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Screen Reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                                    </div>

                                    {/* Side Buttons */}
                                    <div className="absolute left-[-2px] top-24 w-[3px] h-12 bg-[#333] rounded-l-sm" />
                                    <div className="absolute left-[-2px] top-40 w-[3px] h-16 bg-[#333] rounded-l-sm" />
                                    <div className="absolute left-[-2px] top-60 w-[3px] h-16 bg-[#333] rounded-l-sm" />
                                    <div className="absolute right-[-2px] top-32 w-[3px] h-20 bg-[#333] rounded-r-sm" />
                                </div>
                            </div>
                        </section>

                        {/* Detailed App Guide with Icons */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                                <h3 className="text-xl font-black uppercase tracking-widest text-slate-400">App Installation Guide</h3>
                                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm text-center group hover:border-blue-500 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mx-auto mb-6">
                                        <Download size={32} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3">1. Download</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Click the download button to get the official APK file directly from {brand.name}.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm text-center group hover:border-blue-500 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center mx-auto mb-6">
                                        <Settings size={32} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3">2. Install</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Enable "Unknown Sources" in your settings and install the application on your device.
                                    </p>
                                </div>

                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm text-center group hover:border-blue-500 transition-colors">
                                    <div className="w-16 h-16 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-500 flex items-center justify-center mx-auto mb-6">
                                        <Play size={32} />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3">3. Play</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Log in with your account and enjoy seamless gaming with exclusive app bonuses.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4">Why use the {brand.name} App?</h4>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                        {brand.appGuide}
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {brand.appGuideContent}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Brand FAQs */}
                        <section>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <HelpCircle className="text-blue-600" /> Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                {[...(brand.faqs || []), ...(brand.extraFaqs || [])].map((faq: any, i: number) => (
                                    <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                                            <span className="text-blue-600 shrink-0">Q:</span> {faq.q}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 pl-8">
                                            <span className="text-slate-400 font-bold mr-2">A:</span> {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            {brand.officialSiteLink && (
                                <div className="mt-12 p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl text-center border border-dashed border-slate-300 dark:border-slate-700">
                                    <p className="text-slate-600 dark:text-slate-400 font-bold mb-4">
                                        Our site: visit the {brand.name} website to play now
                                    </p>
                                    <a 
                                        href={brand.officialSiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 btn-primary text-white font-black rounded-xl"
                                    >
                                        Visit {brand.name} <ExternalLink size={18} />
                                    </a>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Stats */}
                        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm sticky top-24">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Quick Facts</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-slate-500 text-sm font-bold">Withdrawal Speed</span>
                                    <span className="text-slate-900 dark:text-white font-bold text-sm">5-15 Mins</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-slate-500 text-sm font-bold">Min Deposit</span>
                                    <span className="text-slate-900 dark:text-white font-bold text-sm">₱50</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-700">
                                    <span className="text-slate-500 text-sm font-bold">License</span>
                                    <span className="text-slate-900 dark:text-white font-bold text-sm">PAGCOR Verified</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-500 text-sm font-bold">Support</span>
                                    <span className="text-slate-900 dark:text-white font-bold text-sm">24/7 Live Chat</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Payment Methods</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {brand.paymentDetails.map((pay: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1 shadow-sm">
                                                    <CreditCard size={16} className="text-blue-600" />
                                                </div>
                                                <span className="font-black text-sm text-slate-900 dark:text-white">{pay.method}</span>
                                            </div>
                                            <span className="text-[10px] font-black text-green-600 uppercase">{pay.speed}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">Pros & Cons</h3>
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        {brand.pros.map((pro: string, i: number) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                                                <span>{pro}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-3">
                                        {brand.cons.map((con: string, i: number) => (
                                            <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                                <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                                                <span>{con}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={brand.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-8 w-full py-4 btn-primary text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                PLAY NOW <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

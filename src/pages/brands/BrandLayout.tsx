import React from 'react';
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
import { PAYMENT_PROVIDERS, SITE_URL } from '../../constants';
import { cn } from '../../lib/utils';

interface BrandLayoutProps {
    brand: any;
    platform: any;
}

export const BrandLayout: React.FC<BrandLayoutProps> = ({ brand, platform }) => {
    const theme = platform.theme || {
        primary: '#2563eb', // Default blue-600
        secondary: '#1d4ed8', // Default blue-700
        background: '#f8fafc', // Default slate-50
        card: '#ffffff', // Default white
        text: '#0f172a', // Default slate-900
        accent: '#3b82f6' // Default blue-500
    };

    const isDark = theme.background !== '#ffffff';

    const themeStyles = {
        '--brand-primary': theme.primary,
        '--brand-secondary': theme.secondary,
        '--brand-bg': theme.background,
        '--brand-card': theme.card,
        '--brand-text': theme.text,
        '--brand-accent': theme.accent,
        '--brand-muted': isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
        '--brand-border': isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    } as React.CSSProperties;

    return (
        <div 
            className="pt-24 pb-20 animate-fade-in min-h-screen" 
            style={{ 
                ...themeStyles,
                backgroundColor: 'var(--brand-bg)',
                color: 'var(--brand-text)'
            }}
        >
            <Helmet>
                <title>{brand.reviewTitle || `${brand.name} Review & Bonus | ACEBET Alliance`}</title>
                <meta name="description" content={`Read our expert review of ${brand.name}. Get exclusive bonuses, check RTP, and start playing at the top-rated casino platform in the Philippines.`} />
                <link rel="canonical" href={`${SITE_URL}/brands/${platform.id.replace('brand-', '')}`} />
            </Helmet>

            {/* Hero Section */}
            <div 
                className="relative overflow-hidden pt-32 pb-20 px-4"
                style={{ backgroundColor: 'var(--brand-bg)' }}
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -z-10 opacity-20" style={{ backgroundColor: 'var(--brand-primary)' }} />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] -z-10 opacity-10" style={{ backgroundColor: 'var(--brand-secondary)' }} />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm" style={{ backgroundColor: 'var(--brand-muted)', borderColor: 'var(--brand-border)' }}>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80" style={{ color: 'var(--brand-text)' }}>ACEBET ALLIANCE • Trusted</span>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] flex flex-col gap-2" style={{ color: 'var(--brand-text)' }}>
                                    <span>{brand.name}:</span>
                                    <span className="opacity-60">{brand.reviewTitle.split(':')[1] || brand.reviewTitle}</span>
                                </h1>
                                <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl opacity-70 mt-6" style={{ color: 'var(--brand-text)' }}>
                                    {brand.reviewContent.split('.')[0]}. Experience the #1 trusted gaming platform in the Philippines with instant withdrawals and premium support.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href={brand.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 text-white font-black rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 group text-lg hover:scale-105 active:scale-95"
                                    style={{ backgroundColor: 'var(--brand-primary)' }}
                                >
                                    Start Playing Now <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a 
                                    href="#download" 
                                    className="px-10 py-5 font-black rounded-2xl border backdrop-blur-md transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                                    style={{ backgroundColor: 'var(--brand-muted)', color: 'var(--brand-text)', borderColor: 'var(--brand-border)' }}
                                >
                                    Explore App <Download size={20} />
                                </a>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: 'Slot Games', value: '15,000+', icon: Gamepad2 },
                                    { label: 'Live Support', value: '24/7', icon: HelpCircle },
                                    { label: 'Fast Withdraw', value: '3 - 30 Min', icon: Zap },
                                    { label: 'Min Deposit', value: '50 PHP', icon: Banknote }
                                ].map((stat, i) => (
                                    <div key={i} className="p-4 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: 'var(--brand-muted)', borderColor: 'var(--brand-border)' }}>
                                        <div className="text-xl font-black mb-1" style={{ color: 'var(--brand-text)' }}>{stat.value}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-40" style={{ color: 'var(--brand-text)' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Payment Tags */}
                            <div className="flex flex-wrap gap-3">
                                {PAYMENT_PROVIDERS.slice(0, 6).map((p, i) => (
                                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border" style={{ backgroundColor: 'var(--brand-muted)', borderColor: 'var(--brand-border)' }}>
                                        <div className="w-4 h-4 rounded-full bg-white/10 p-0.5">
                                            <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-[10px] font-black opacity-60 uppercase tracking-widest" style={{ color: 'var(--brand-text)' }}>{p.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Graphic - Brand Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <div className="relative group w-full max-w-[600px]">
                                {/* Background glow */}
                                <div className="absolute -inset-10 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
                                
                                <div className="relative transition-transform duration-700 group-hover:scale-105">
                                    <img 
                                        src={brand.banner} 
                                        alt={brand.name} 
                                        className="w-full h-auto object-contain drop-shadow-2xl"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Main Review */}
                        <section 
                            className="rounded-[40px] p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-xl"
                            style={{ backgroundColor: 'var(--brand-card)' }}
                        >
                            <h2 className="text-4xl font-black mb-8 tracking-tight" style={{ color: 'var(--brand-text)' }}>{brand.reviewTitle}</h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed opacity-90" style={{ color: 'var(--brand-text)' }}>
                                    {brand.reviewContent}
                                </p>
                            </div>
                            {brand.whyPopular && (
                                <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-700">
                                    <h3 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: 'var(--brand-text)' }}>
                                        <Users style={{ color: 'var(--brand-primary)' }} /> Why {brand.name} is Popular in the Philippines
                                    </h3>
                                    <p className="opacity-90 leading-relaxed" style={{ color: 'var(--brand-text)' }}>
                                        {brand.whyPopular}
                                    </p>

                                    {/* Backup Domains & Ratings Section - Image Style */}
                                    <div 
                                        className="mt-10 p-6 md:p-10 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl"
                                        style={{ backgroundColor: 'var(--brand-muted)' }}
                                    >
                                        <div className="flex items-center gap-3 mb-8">
                                            <Zap className="text-amber-500" size={24} fill="currentColor" />
                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight" style={{ color: 'var(--brand-text)' }}>Backup Domains & Official Links</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                            {brand.altDomains.map((link: any, i: number) => (
                                                <a 
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all group shadow-sm hover:border-[var(--brand-primary)]"
                                                    style={{ backgroundColor: 'var(--brand-card)' }}
                                                >
                                                    <span className="font-bold" style={{ color: 'var(--brand-text)' }}>{link.name}</span>
                                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors" style={{ backgroundColor: 'var(--brand-primary)' }}>
                                                        <ExternalLink size={18} />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {Object.entries(brand.ratings).map(([key, value]: [string, any]) => (
                                                <div key={key} className="p-6 border border-slate-200 dark:border-slate-700/50 rounded-2xl text-center shadow-sm" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                                    <div className="text-3xl font-black mb-1" style={{ color: 'var(--brand-text)' }}>{value}%</div>
                                                    <div className="text-[10px] font-black opacity-50 uppercase tracking-widest" style={{ color: 'var(--brand-text)' }}>{key}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Registration Steps Section - Redesigned to match Gaming Ecosystem style */}
                                    <div 
                                        className="mt-12 p-8 md:p-12 rounded-[40px] border border-slate-800 shadow-2xl"
                                        style={{ backgroundColor: 'var(--brand-card)' }}
                                    >
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--brand-primary)' }}>
                                                <Globe size={28} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black" style={{ color: 'var(--brand-text)' }}>How to Join & Play at {brand.name}</h3>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {brand.registrationSteps.map((step: string, i: number) => (
                                                <div key={i} className="flex flex-col items-center text-center p-8 rounded-[32px] border transition-all border-slate-200 dark:border-slate-800 hover:border-[var(--brand-primary)]" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                                    <div className="w-16 h-16 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 shadow-inner" style={{ backgroundColor: 'var(--brand-bg)' }}>
                                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--brand-muted)', color: 'var(--brand-primary)' }}>
                                                            <span className="text-xl font-black">{i + 1}</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="font-black mb-3 text-lg" style={{ color: 'var(--brand-text)' }}>Step {i + 1}</h4>
                                                    <p className="opacity-70 text-sm leading-relaxed font-medium" style={{ color: 'var(--brand-text)' }}>
                                                        {step}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Pros & Cons */}
                        <section className="space-y-8">
                            <h2 className="text-3xl font-black flex items-center gap-3" style={{ color: 'var(--brand-text)' }}>
                                <Trophy className="text-amber-500" /> Pros & Cons: Honest Review of {brand.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-6 md:p-8">
                                <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-2">
                                    <CheckCircle2 size={24} /> PROS
                                </h3>
                                <ul className="space-y-4">
                                    {brand.pros.map((pro: string, idx: number) => (
                                        <li key={idx} className="flex gap-3 font-medium" style={{ color: 'var(--brand-text)' }}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-3xl p-6 md:p-8">
                                <h3 className="text-xl font-black text-rose-600 mb-6 flex items-center gap-2">
                                    <AlertCircle size={24} /> CONS
                                </h3>
                                <ul className="space-y-4">
                                    {brand.cons.map((con: string, idx: number) => (
                                        <li key={idx} className="flex gap-3 font-medium opacity-80" style={{ color: 'var(--brand-text)' }}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                        {/* Games Section */}
                        <section 
                            className="rounded-3xl p-6 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm"
                            style={{ backgroundColor: 'var(--brand-card)' }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--brand-primary)' }}>
                                    <Trophy size={28} />
                                </div>
                                <h3 className="text-2xl font-black" style={{ color: 'var(--brand-text)' }}>Top Games at {brand.name}</h3>
                            </div>
                            <div className="space-y-12">
                                {Object.entries(brand.games).map(([provider, games]: [string, any]) => (
                                    <div key={provider}>
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="text-sm font-black uppercase tracking-[0.2em] opacity-50" style={{ color: 'var(--brand-text)' }}>{provider} Gaming</h4>
                                            <div className="h-px flex-1 mx-4 bg-slate-200 dark:bg-slate-700" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                                            {games.map((game: any, i: number) => (
                                                <div key={i} className="group flex flex-col rounded-2xl p-3 border border-slate-100 dark:border-slate-800 transition-all hover:border-[var(--brand-primary)]" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                                    <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                                                        <img 
                                                            src={game.image} 
                                                            alt={game.name} 
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                                            referrerPolicy="no-referrer" 
                                                        />
                                                    </div>
                                                    <div className="mt-3 flex-1">
                                                        <h5 className="font-black text-sm uppercase tracking-tight mb-1 transition-colors group-hover:text-[var(--brand-primary)]" style={{ color: 'var(--brand-text)' }}>
                                                            {game.name}
                                                        </h5>
                                                        <p className="text-[11px] opacity-60 leading-tight" style={{ color: 'var(--brand-text)' }}>
                                                            {game.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {brand.gameContent && (
                                <div className="mt-10 p-6 md:p-8 rounded-2xl border border-amber-100 dark:border-amber-900/30" style={{ backgroundColor: 'rgba(245,158,11,0.05)' }}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                                            <Gamepad2 size={20} />
                                        </div>
                                        <h4 className="text-sm font-black text-amber-600 uppercase tracking-widest">Top Games Selection</h4>
                                    </div>
                                    <p className="opacity-80 leading-relaxed text-sm" style={{ color: 'var(--brand-text)' }}>
                                        {brand.gameContent}
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* Promotion Banners Section */}
                        {brand.promotionBanners && (
                            <section 
                                className="rounded-3xl p-6 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm"
                                style={{ backgroundColor: 'var(--brand-card)' }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--brand-primary)' }}>
                                        <Gift size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black" style={{ color: 'var(--brand-text)' }}>Exclusive Promotions</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {brand.promotionBanners.map((banner: string, i: number) => (
                                        <div key={i} className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                                            <img 
                                                src={banner} 
                                                alt={`Promotion ${i + 1}`} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {brand.promoContent && (
                                    <div className="mt-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-700" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                                        <p className="opacity-80 leading-relaxed text-sm italic" style={{ color: 'var(--brand-text)' }}>
                                            {brand.promoContent}
                                        </p>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* Payment & Withdrawals Section */}
                        <section 
                            className="rounded-3xl p-6 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm"
                            style={{ backgroundColor: 'var(--brand-card)' }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--brand-primary)' }}>
                                    <Wallet size={28} />
                                </div>
                                <h3 className="text-2xl font-black" style={{ color: 'var(--brand-text)' }}>Payment & Withdrawals</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black uppercase tracking-widest opacity-50 flex items-center gap-2" style={{ color: 'var(--brand-text)' }}>
                                        <ArrowDownToLine size={16} style={{ color: 'var(--brand-primary)' }} /> Supported Methods
                                    </h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        {PAYMENT_PROVIDERS.map((provider: any, i: number) => (
                                            <div key={i} className="aspect-[2/1] rounded-xl border border-slate-100 dark:border-slate-700 p-2 flex items-center justify-center group transition-colors hover:border-[var(--brand-primary)]" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                                                <img src={provider.image} alt={provider.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black uppercase tracking-widest opacity-50 flex items-center gap-2" style={{ color: 'var(--brand-text)' }}>
                                        <ShieldCheck size={16} className="text-emerald-600" /> Payment Security
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center gap-3 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/30" style={{ backgroundColor: 'rgba(16,185,129,0.05)' }}>
                                            <Lock size={18} className="text-emerald-600" />
                                            <span className="text-xs font-bold opacity-80" style={{ color: 'var(--brand-text)' }}>256-bit SSL Encryption</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                            <Zap size={18} style={{ color: 'var(--brand-primary)' }} />
                                            <span className="text-xs font-bold opacity-80" style={{ color: 'var(--brand-text)' }}>Instant Payment Settlement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100 dark:border-slate-700">
                                            <th className="py-4 text-xs font-black uppercase tracking-widest opacity-50" style={{ color: 'var(--brand-text)' }}>Method</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest opacity-50" style={{ color: 'var(--brand-text)' }}>Min/Max</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest opacity-50" style={{ color: 'var(--brand-text)' }}>Speed</th>
                                            <th className="py-4 text-xs font-black uppercase tracking-widest opacity-50 text-right" style={{ color: 'var(--brand-text)' }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {brand.paymentDetails.map((pay: any, i: number) => {
                                            const provider = PAYMENT_PROVIDERS.find(p => p.name === pay.method);
                                            return (
                                                <tr key={i} className="group transition-colors hover:bg-white/5">
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                                                                {provider ? (
                                                                    <img src={provider.image} alt={pay.method} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                                                ) : (
                                                                    <CreditCard size={16} style={{ color: 'var(--brand-primary)' }} />
                                                                )}
                                                            </div>
                                                            <span className="font-bold" style={{ color: 'var(--brand-text)' }}>{pay.method}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className="text-sm font-bold opacity-60" style={{ color: 'var(--brand-text)' }}>{pay.min} - {pay.max}</span>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-2 text-sm font-bold opacity-60" style={{ color: 'var(--brand-text)' }}>
                                                            <Clock size={14} style={{ color: 'var(--brand-primary)' }} />
                                                            {pay.speed}
                                                        </div>
                                                    </td>
                                                    <td className="py-4 text-right">
                                                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                                                            Verified
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* App Download Section */}
                        <section 
                            id="download"
                            className="rounded-[40px] p-6 md:p-16 overflow-hidden relative shadow-2xl"
                            style={{ 
                                backgroundColor: 'var(--brand-card)',
                                color: 'var(--brand-text)'
                            }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-8">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-widest" style={{ backgroundColor: 'var(--brand-muted)', borderColor: 'var(--brand-border)', color: 'var(--brand-primary)' }}>
                                        <Smartphone size={14} /> Mobile Experience
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                                        Download the <br />
                                        <span style={{ color: 'var(--brand-primary)' }}>{brand.name}</span> <br />
                                        Official App
                                    </h2>
                                    <p className="opacity-70 text-lg leading-relaxed max-w-md">
                                        Take your gaming to the next level. Get instant access to exclusive bonuses, faster withdrawals, and a premium mobile interface.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a 
                                            href={platform.appUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-8 py-4 text-white font-black rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
                                            style={{ backgroundColor: 'var(--brand-primary)' }}
                                        >
                                            DOWNLOAD NOW <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                        <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                            <div className="flex -space-x-2">
                                                {[1,2,3].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                                        <img src={`https://i.pravatar.cc/100?u=${brand.name}${i}`} alt="User" />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-xs font-bold opacity-50 uppercase tracking-widest">80k+ Active Users</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex justify-center lg:justify-end">
                                 <div className="relative flex justify-center lg:justify-end">
                                 <div className="w-[280px]">                                        
                                            <img 
                                            src={brand.appGuideImage || "https://picsum.photos/seed/app/600/1200"} 
                                            alt="App Preview" 
                                            className="w-full h-auto object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'var(--brand-primary)', opacity: 0.2 }} />
                                    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'var(--brand-secondary)', opacity: 0.2 }} />
                                </div>
                            </div>

                            {/* Watermark */}
                            <div className="absolute -bottom-10 -right-10 text-[10rem] md:text-[15rem] font-black text-slate-500/[0.05] select-none pointer-events-none uppercase tracking-tighter leading-none rotate-[-12deg] z-0">
                                ACEBET
                            </div>

                            {/* Installation Guide */}
                            <div className="mt-24 relative z-10">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] opacity-30 whitespace-nowrap">App Installation Guide</h3>
                                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { step: '1. Download', desc: `Click the download button to get the official APK file directly from ${brand.name}.`, icon: Download, color: 'var(--brand-primary)' },
                                        { step: '2. Install', desc: "Enable 'Unknown Sources' in your settings and install the application on your device.", icon: Settings, color: 'var(--brand-accent)' },
                                        { step: '3. Play', desc: "Log in with your account and enjoy seamless gaming with exclusive app bonuses.", icon: Play, color: 'var(--brand-secondary)' }
                                    ].map((item, i) => (
                                        <div key={i} className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/50 text-center space-y-4 transition-colors hover:bg-white/5" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                            <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center" style={{ backgroundColor: 'var(--brand-muted)', color: item.color }}>
                                                <item.icon size={28} />
                                            </div>
                                            <h4 className="text-lg font-black">{item.step}</h4>
                                            <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Use Section */}
                            <div className="mt-12 p-6 md:p-12 rounded-[32px] border border-slate-200 dark:border-slate-700 relative z-10" style={{ backgroundColor: 'var(--brand-muted)' }}>
                                <h3 className="text-2xl font-black mb-6">Why use the {brand.name} App?</h3>
                                <div className="space-y-6 opacity-80 leading-relaxed">
                                    <p className="font-bold">{brand.appGuide}</p>
                                    <p className="text-sm">{brand.appGuideContent}</p>
                                </div>
                            </div>
                        </section>

                        {/* FAQs */}
                        <section className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black mb-8 flex items-center gap-3" style={{ color: 'var(--brand-text)' }}>
                                    <HelpCircle style={{ color: 'var(--brand-primary)' }} /> Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {brand.faqs.map((faq: any, idx: number) => (
                                        <div 
                                            key={idx} 
                                            className="rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
                                            style={{ backgroundColor: 'var(--brand-card)' }}
                                        >
                                            <h3 className="text-lg font-black mb-3 flex gap-3" style={{ color: 'var(--brand-text)' }}>
                                                <span style={{ color: 'var(--brand-primary)' }}>Q:</span> {faq.q}
                                            </h3>
                                            <p className="opacity-70 leading-relaxed pl-8" style={{ color: 'var(--brand-text)' }}>
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button below FAQ - Image Style */}
                            <div 
                                className="rounded-[40px] p-8 md:p-12 border-2 border-dashed border-slate-800 dark:border-slate-700 text-center shadow-2xl"
                                style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                            >
                                <p className="opacity-70 text-sm md:text-base font-medium mb-6" style={{ color: 'var(--brand-text)' }}>
                                    Our site: visit the {brand.name} website to play now
                                </p>
                                <a 
                                    href={brand.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full py-4 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 group text-lg shadow-lg"
                                    style={{ 
                                        backgroundColor: 'var(--brand-primary)',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    Visit {brand.name} <ExternalLink size={20} />
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Stats */}
                        <div 
                            className="rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 shadow-sm"
                            style={{ backgroundColor: 'var(--brand-card)' }}
                        >
                            <h3 className="text-xl font-black mb-6 uppercase tracking-tight" style={{ color: 'var(--brand-text)' }}>Quick Overview</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--brand-muted)', color: 'var(--brand-primary)' }}>
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black opacity-40 uppercase tracking-widest" style={{ color: 'var(--brand-text)' }}>License</div>
                                        <div className="text-sm font-black" style={{ color: 'var(--brand-text)' }}>PAGCOR Verified</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400" style={{ backgroundColor: 'rgba(16,185,129,0.05)' }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black opacity-40 uppercase tracking-widest" style={{ color: 'var(--brand-text)' }}>Payout Speed</div>
                                        <div className="text-sm font-black" style={{ color: 'var(--brand-text)' }}>5-15 Mins</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400" style={{ backgroundColor: 'rgba(245,158,11,0.05)' }}>
                                        <Trophy size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black opacity-40 uppercase tracking-widest" style={{ color: 'var(--brand-text)' }}>Win Rate</div>
                                        <div className="text-sm font-black" style={{ color: 'var(--brand-text)' }}>97.5% Average RTP</div>
                                    </div>
                                </div>
                            </div>
                            <a 
                                href={brand.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full mt-8 py-4 text-white font-black rounded-xl shadow-lg flex items-center justify-center gap-2 group"
                                style={{ backgroundColor: 'var(--brand-primary)' }}
                            >
                                VISIT OFFICIAL SITE <ExternalLink size={18} />
                            </a>
                        </div>

                        {/* Ratings */}
                        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
                            <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Alliance Rating</h3>
                            <div className="space-y-6">
                                {Object.entries(brand.ratings).map(([key, value]: [string, any]) => (
                                    <div key={key}>
                                        <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-2 text-slate-400">
                                            <span className="capitalize">{key}</span>
                                            <span className="text-slate-900 dark:text-white">{value}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full rounded-full"
                                                style={{ 
                                                    width: `${value}%`,
                                                    backgroundColor: 'var(--brand-primary)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                                <div className="text-4xl font-black mb-1" style={{ color: 'var(--brand-primary)' }}>4.9</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Overall ACEBET Score</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

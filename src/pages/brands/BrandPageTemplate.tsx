import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Star, Shield, Zap, 
  ExternalLink, Trophy, Users, 
  ChevronRight, CheckCircle2,
  Wallet, ShieldCheck,
  Download, HelpCircle
} from 'lucide-react';
import { BRAND_REVIEWS, PLATFORMS, PAYMENT_PROVIDERS, SITE_URL } from '../../constants';

interface BrandPageTemplateProps {
    brandId: string;
}

const BrandPageTemplate: React.FC<BrandPageTemplateProps> = ({ brandId }) => {
    const brand = BRAND_REVIEWS[brandId];
    const platform = PLATFORMS.find(p => p.id === brandId);

    if (!brand || !platform) return null;

    return (
        <div className="pt-20 pb-20 animate-fade-in bg-black min-h-screen text-white">
            <Helmet>
                <title>{`${brand.name} | ACEBET Alliance - #1 Trusted Online Casino in Philippines`}</title>
                <meta name="description" content={`${brand.name} Review: ${brand.reviewTitle}. Get exclusive bonuses, fast GCash payouts, and play top JILI slots. Licensed by PAGCOR.`} />
                <meta name="keywords" content={`${brand.name}, online casino Philippines, GCash casino, JILI slots, PAGCOR licensed casino`} />
                <link rel="canonical" href={`${SITE_URL}/brands/${brandId.replace('brand-', '')}`} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-[600px] w-full overflow-hidden">
                <img 
                    src={brand.banner} 
                    alt={brand.name} 
                    className="w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <div className="max-w-7xl mx-auto px-4 w-full text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                            <Shield size={14} /> PAGCOR LICENSED & VERIFIED
                        </div>
                        
                        <div className="mb-10 relative inline-block">
                            <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 rounded-full" />
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-gradient-to-br from-white to-slate-100 p-3 shadow-2xl mx-auto overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img src={platform.logo} alt={brand.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 uppercase italic">
                            {brand.name}
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-yellow-500 font-bold mb-12 tracking-tight max-w-3xl mx-auto drop-shadow-lg">
                            {brand.reviewTitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a 
                                href={brand.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black rounded-2xl shadow-[0_10px_40px_rgba(234,179,8,0.3)] transition-all flex items-center justify-center gap-3 group text-xl uppercase italic tracking-tighter"
                            >
                                PLAY NOW <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <span className="text-sm font-black text-white uppercase tracking-widest">4.9/5.0 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <Zap className="text-yellow-500" />, label: "Payout Speed", value: "5-15 Mins" },
                        { icon: <Trophy className="text-yellow-500" />, label: "Daily Payout", value: "₱8M+" },
                        { icon: <ShieldCheck className="text-yellow-500" />, label: "License", value: "PAGCOR" },
                        { icon: <Users className="text-yellow-500" />, label: "Active Players", value: "50k+" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] text-center shadow-2xl">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/5">
                                {stat.icon}
                            </div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-xl font-black text-white">{stat.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-24">
                        {/* About Section */}
                        <section className="relative">
                            <div className="absolute -left-8 top-0 w-1 h-20 bg-yellow-500 rounded-full" />
                            <h2 className="text-4xl font-black text-white mb-10 tracking-tighter uppercase italic">Expert Review</h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-xl leading-relaxed text-slate-300 font-medium">
                                    {brand.reviewContent}
                                </p>
                                <div className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
                                    <h3 className="text-2xl font-black text-yellow-500 mb-6 flex items-center gap-3 uppercase italic">
                                        <Users /> Why Players Love {brand.name}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        {brand.whyPopular}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Game Selection */}
                        <section>
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Top Games</h2>
                                <div className="flex gap-2">
                                    <div className="w-12 h-1 bg-yellow-500 rounded-full" />
                                    <div className="w-4 h-1 bg-white/20 rounded-full" />
                                </div>
                            </div>
                            
                            <div className="space-y-16">
                                {Object.entries(brand.games).map(([provider, images]: [string, any]) => (
                                    <div key={provider} className="group">
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="text-xs font-black uppercase tracking-[0.3em] text-yellow-500/50">{provider} Gaming</span>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                            {images.map((img: string, i: number) => (
                                                <div key={i} className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group/item relative">
                                                    <img src={img} alt="Game" className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-6">
                                                        <button className="w-full py-3 bg-yellow-500 text-black font-black rounded-xl text-xs uppercase tracking-widest">Play Now</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Payment Methods */}
                        <section className="bg-[#0f172a]/50 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                                <div>
                                    <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic">Fast Payments</h2>
                                    <p className="text-slate-400 font-medium">Instant deposits and withdrawals via local PH channels.</p>
                                </div>
                                <div className="flex -space-x-4">
                                    {PAYMENT_PROVIDERS.slice(0, 4).map((p: any, i: number) => (
                                        <div key={i} className="w-16 h-16 rounded-2xl bg-white p-2 border-4 border-[#0f172a] shadow-xl overflow-hidden">
                                            <img src={p.image} alt={p.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {brand.paymentDetails.map((pay: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-yellow-500/30 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                                <Wallet size={24} />
                                            </div>
                                            <div>
                                                <div className="font-black text-white uppercase tracking-widest text-sm">{pay.method}</div>
                                                <div className="text-xs text-slate-500 font-bold">{pay.min} - {pay.max}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs font-black text-yellow-500 uppercase tracking-widest mb-1">{pay.speed}</div>
                                            <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-black uppercase">
                                                <ShieldCheck size={12} /> Verified
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Registration Steps */}
                        <section>
                            <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase italic text-center">How to Register</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {brand.registrationSteps.map((step: string, i: number) => (
                                    <div key={i} className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center group hover:bg-yellow-500/5 hover:border-yellow-500/30 transition-all">
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-500 text-black font-black flex items-center justify-center shadow-lg">
                                            {i + 1}
                                        </div>
                                        <p className="text-lg font-bold text-slate-200 mt-4">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* App Guide */}
                        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-yellow-500 to-yellow-600 p-10 md:p-16 text-black">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-3xl" />
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-black text-[10px] font-black uppercase tracking-widest mb-6">Mobile Gaming</div>
                                    <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase italic leading-none">Download {brand.name} App</h2>
                                    <p className="text-black/80 font-bold text-lg mb-10 leading-relaxed">
                                        {brand.appGuideContent}
                                    </p>
                                    <div className="space-y-4">
                                        {brand.appGuide.map((step: string, i: number) => (
                                            <div key={i} className="flex items-center gap-4 font-black text-sm uppercase tracking-tight">
                                                <div className="w-6 h-6 rounded-full bg-black text-yellow-500 flex items-center justify-center text-[10px]">{i + 1}</div>
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-4">
                                        <a href={platform.appUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-yellow-500 font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform uppercase italic tracking-tighter">
                                            <Download size={20} /> Download for Android
                                        </a>
                                        <a href={platform.appUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black/10 text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform uppercase italic tracking-tighter border border-black/10">
                                            <Download size={20} /> Download for iOS
                                        </a>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-black/20 blur-3xl rounded-full" />
                                    <img 
                                        src={brand.appGuideImage} 
                                        alt="App Preview" 
                                        className="relative w-full max-w-[300px] mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-6 hover:rotate-0 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section>
                            <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase italic">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {brand.faqs.map((faq: any, i: number) => (
                                    <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group">
                                        <h3 className="text-xl font-black text-white mb-4 flex items-center gap-3 uppercase italic">
                                            <HelpCircle className="text-yellow-500" /> {faq.q}
                                        </h3>
                                        <p className="text-slate-400 font-medium leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* SEO Content Section */}
                        <section className="pt-20 border-t border-white/5">
                            <h2 className="text-3xl font-black text-white mb-10 tracking-tighter uppercase italic">About {brand.name} Online Casino</h2>
                            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-6">
                                <p>
                                    Welcome to the official review of <strong>{brand.name}</strong>, the premier online gaming destination in the Philippines. As a key partner of the <strong>ACEBET Alliance</strong>, {brand.name} has consistently delivered top-tier entertainment, security, and reliability to thousands of Filipino players.
                                </p>
                                <p>
                                    Whether you are looking for the latest <strong>JILI slots</strong>, immersive <strong>Live Casino</strong> experiences from Evolution Gaming, or high-stakes <strong>Sports Betting</strong>, {brand.name} offers a comprehensive platform designed for the modern gamer. Licensed by <strong>PAGCOR</strong>, the platform ensures a fair and transparent environment where your data and funds are always protected by military-grade encryption.
                                </p>
                                <p>
                                    One of the standout features of {brand.name} is its seamless integration with local payment methods like <strong>GCash</strong> and <strong>Maya</strong>. This allows for near-instant deposits and withdrawals, ensuring that you spend more time playing and less time waiting. Join the thousands of satisfied winners today and experience why {brand.name} is rated as the #1 online casino in the Philippines.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-[3rem] p-10 text-black shadow-[0_20px_50px_rgba(234,179,8,0.2)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Official Partner</div>
                                    <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase italic leading-none">Start Winning Today</h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            "Free Register 100 Bonus",
                                            "Instant GCash Payouts",
                                            "24/7 VIP Support",
                                            "PAGCOR Licensed"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 font-black text-sm uppercase tracking-tight">
                                                <CheckCircle2 size={18} /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <a 
                                        href={brand.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full py-5 bg-black text-yellow-500 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors shadow-xl uppercase italic tracking-tighter text-lg"
                                    >
                                        PLAY NOW <ChevronRight size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 text-center">
                                <Shield size={48} className="text-yellow-500 mx-auto mb-4" fill="currentColor" />
                                <div className="text-lg font-black text-white mb-1 uppercase italic">ACEBET Certified</div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">100% Secure & Verified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandPageTemplate;

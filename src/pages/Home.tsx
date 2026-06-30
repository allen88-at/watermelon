import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Trophy, Users, Percent, Clock, Smartphone, 
  ChevronLeft, ChevronRight, ArrowRight, Star,
  ShieldCheck, CheckCircle, Zap, Landmark, Shield,
  Gift, RefreshCw, Network, Handshake, TrendingUp, Search, BarChart, Heart,
  LayoutDashboard, Globe2, Wallet, Lock, Headset, Sparkles, ShieldAlert
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  STATS, PLATFORMS, BANNERS, GAMES, WINNERS, 
  TESTIMONIALS, SECURITY_FEATURES, FAQS, ARTICLES, SITE_URL
} from '../constants';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>ACEBET Alliance | Philippines' #1 Trusted Gaming Hub</title>
                <meta name="description" content="Join ACEBET Alliance, the Philippines' most trusted gaming network. Instant GCash deposits, fast withdrawals, and 24/7 support for over 10M players." />
                <link rel="canonical" href={`${SITE_URL}/`} />
            </Helmet>
            
            <Hero />
            <WhatIsSection />
            <StatsSection />
            <AppDownloadSection />
            <BannersSection />
            <HotGamesSection />
            <WinnersCarousel />
            <PlatformsGrid />
            <ComparisonTable />
            <TestimonialsSection />
            <NewsSection />
            <SecuritySection />
            <FAQSection />
        </>
    );
};

const NetworkAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: any[] = [];
        const particleCount = 60;
        const connectionDistance = 180;
        let isVisible = false;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.size = Math.random() * 2 + 1;
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 242, 255, 0.6)';
                ctx.fill();
            }
        }

        let resizeObserver: ResizeObserver;
        const parent = canvas.parentElement;
        
        if (parent) {
            resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    canvas.width = entry.contentRect.width;
                    canvas.height = entry.contentRect.height;
                    particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
                }
            });
            resizeObserver.observe(parent);
        }

        const animate = () => {
            if (!isVisible) return;
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update(canvas.width, canvas.height);
                p1.draw(ctx);

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 242, 255, ${0.3 * (1 - dist / connectionDistance)})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };




        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    animate();
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            },
            { threshold: 0 }
        );
        
        observer.observe(canvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (resizeObserver) resizeObserver.disconnect();
            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Hero = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5; 
        const rotateY = ((x - centerX) / centerX) * 5;
        setRotate({ x: rotateX, y: rotateY });
    };
    const handleRandomNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        const urls = PLATFORMS.map(p => p.url);
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        window.open(randomUrl, '_blank');
    };

    return (
        <section className="relative pt-32 pb-20 min-h-[85vh] overflow-hidden bg-[#050b14]">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                
                <NetworkAnimation />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
                <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        OFFICIAL PARTNER
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
                        ACEBET ALLIANCE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Best Philippines</span> <br />
                        Trusted Platform
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        #1 Trusted Gaming Platform Network in the Philippines. Instant GCash/PayMaya deposits, fast 24h withdrawals, and 24/7 support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                        <button onClick={handleRandomNavigation} className="px-8 py-4 btn-primary text-white font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center leading-none">Get Started</button>
                        <button onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-all flex items-center justify-center">View Platforms</button>
                    </div>
                    <div className="flex justify-center lg:justify-start gap-8 sm:gap-12">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-400">10M+</div>
                            <div className="text-xs sm:text-sm text-slate-500 font-bold tracking-widest mt-1 uppercase">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-400">4.9★</div>
                            <div className="text-xs sm:text-sm text-slate-500 font-bold tracking-widest mt-1 uppercase">User Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-400">24/7</div>
                            <div className="text-xs sm:text-sm text-slate-500 font-bold tracking-widest mt-1 uppercase">Support</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full max-w-[600px] lg:max-w-[600px] mx-auto">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[600/550]">
                        <img 
                            src="/images/hero acebet.jpg" 
                            alt="AceBet Alliance Promotion" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatIsSection = () => (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border-t-4 border-cyan-500 dark:border-cyan-400 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 dark:bg-cyan-900/20 rounded-full blur-[80px] opacity-60 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold tracking-wider mb-4 uppercase">ABOUT US</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ACEBET ALLIANCE</span>?
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                            The Philippines' premier hub for trusted, secure, and fast online gaming.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] md:text-lg font-medium">
                            <p>
                                If you've been searching for a betting site that actually gets what <strong className="text-slate-900 dark:text-white">Filipino players</strong> need, you've found it.
                                <strong className="text-blue-600 dark:text-cyan-400"> ACEBET ALLIANCE</strong> started with one simple idea: give players a place where they can deposit with
                                <strong className="text-slate-900 dark:text-white"> GCash & Maya</strong>, withdraw fast, and trust that their money is safe.
                            </p>
                            <p>
                                We know how frustrating it is when platforms don't support local payment methods or take forever to process withdrawals.
                                That's exactly why we built ACEBET ALLIANCE differently. Whether you're using <strong className="text-blue-600 dark:text-cyan-400">GCash, Maya, or Bank Transfer</strong> -
                                your deposits show up in seconds.
                            </p>
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-bold text-slate-900 dark:text-white">10M+</div>
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-tight">Trusted<br/>Players</div>
                                </div>
                                <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm italic">
                                    "Focused on one thing: being the best betting platform for Filipino players."
                                </p>
                            </div>
                        </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Instant GCash', desc: 'Direct integration with GCash & Maya.', icon: '🇵🇭', color: 'bg-blue-50 dark:bg-slate-800 text-blue-600' },
                                { title: 'Fast Payouts', desc: 'Withdrawals processed in 5-15 mins.', icon: '⚡', color: 'bg-amber-50 dark:bg-slate-800 text-amber-600' },
                                { title: 'Massive Games', desc: 'Slots, Live Casino, Sabong & more.', icon: '🎰', color: 'bg-purple-50 dark:bg-slate-800 text-purple-600' },
                                { title: '100% Secure', desc: 'Bank-level encryption & verification.', icon: '🛡️', color: 'bg-green-50 dark:bg-slate-800 text-green-600' },
                            ].map((item, i) => (
                                <div key={i} className={`p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-800`}>
                                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-2xl mb-4 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{item.desc}</p>
                                </div>
                            ))}
                            </div>
                            <a href="https://t.me/ACEBETALLIANCE" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all">
                                <img src="/images/telegram" alt="ACEBET Alliance Promotion" className="w-full h-auto object-cover" referrerPolicy="no-referrer" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
            <div className="glass-card rounded-2xl p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            <div className="mb-4 p-4 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"><stat.icon size={32} /></div>
                            <div className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const AppDownloadSection = () => {
    return (
        <section id="download" className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm">
                        <Smartphone size={16} />
                        MOBILE EXPERIENCE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                        Download the <span className="text-blue-600 dark:text-blue-400">Official App</span> <br />
                        for Every Platform
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
                        Experience the ultimate convenience with our dedicated mobile applications. Fast, secure, and optimized for your device. All 7 major platforms are available for immediate download.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {PLATFORMS.map((platform) => (
                        <div 
                            key={platform.id}
                            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col items-center text-center group hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                        >
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 mb-4">
                                <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="font-black text-slate-900 dark:text-white text-xl mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{platform.name}</h4>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-6">Official App</p>
                            <a 
                                href={platform.appUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 leading-none"
                            >
                                Download Now <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Keyword Rich Content Section */}
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">ACEBET Alliance: Philippines' #1 Trusted Platform</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        ACEBET Alliance stands as the pinnacle of online gaming in the Philippines. As the most trusted platform network, we provide a unified gateway to the country's top-tier gaming brands. Our commitment to security, transparency, and player satisfaction has made us the preferred choice for millions of Filipino enthusiasts. When you choose ACEBET, you're choosing a legacy of excellence and a future of innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Instant GCash & Maya Deposits</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        We understand that time is of the essence. That's why ACEBET Alliance features seamless integration with GCash and Maya, the Philippines' leading digital wallets. Enjoy instant deposits and lightning-fast withdrawals, ensuring your funds are always where you need them. Our automated payment system operates 24/7, providing you with the most efficient financial experience in the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                    <Trophy size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Premium Mobile Gaming Experience</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        The ACEBET App brings the full casino experience directly to your pocket. Optimized for both iOS and Android, our mobile applications offer high-definition graphics, smooth gameplay, and intuitive navigation. Whether you're playing JILI Slots, Evolution Live Casino, or engaging in Sports Betting, our app ensures a lag-free and immersive environment. Download the official app today and play anytime, anywhere.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">24/7 Dedicated Customer Support</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        At ACEBET Alliance, our players are our priority. Our professional support team is available 24/7 to assist you with any inquiries or technical issues. From account verification to game rules and withdrawal assistance, we are here to ensure your journey is smooth and enjoyable. Join our community of over 10 million active users and experience the gold standard of customer service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/20">
                                    <Smartphone size={28} />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                    Why Choose the <span className="text-blue-600">ACEBET Alliance</span> App?
                                </h4>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-md">Experience the future of fortune in the palm of your hand with our meticulously engineered platform.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                    <Sparkles size={24} />
                                </div>
                                <h5 className="text-lg font-black text-slate-900 dark:text-white mb-3">Innovation & Reliability</h5>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                                    A beacon of innovation for players in the Philippines, providing a seamless and immersive gaming experience optimized for mobile.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-emerald-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h5 className="text-lg font-black text-slate-900 dark:text-white mb-3">Military-Grade Security</h5>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                                    Advanced security with SSL encryption and 2FA. Integrated with GCash and Maya for 5-minute withdrawals, 24/7.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                    <LayoutDashboard size={24} />
                                </div>
                                <h5 className="text-lg font-black text-slate-900 dark:text-white mb-3">Intuitive UX</h5>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                                    Navigate thousands of games from JILI, PG Soft, and Evolution with ease. Personalized recommendations based on your playstyle.
                                </p>
                            </div>

                            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-purple-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                    <Headset size={24} />
                                </div>
                                <h5 className="text-lg font-black text-slate-900 dark:text-white mb-3">Gold Standard Support</h5>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                                    Direct line to our world-class 24/7 support team. From account setup to game rules, we ensure your journey is smooth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BannersSection = () => (
    <section id="promotions" className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">Popular Promotions</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Claim your exclusive bonuses and rewards today</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BANNERS.map((banner, i) => (
                    <div key={i} className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800 group transition-all duration-300">
                        <div className="w-full aspect-[710/470] overflow-hidden relative">
                            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-slate-900 dark:text-white font-black text-xl mb-2">{banner.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 font-medium min-h-[40px]">{banner.desc}</p>
                            <a href={banner.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors">{banner.btnText} <ArrowRight size={16} /></a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Trophy size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">AceBet Alliance Promotions</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                AceBet Alliance has prepared a wide variety of promotional activities for all new and old players. We believe that a high-quality bonus system can significantly enhance players' gaming fun and winning opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"><Zap size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">First Deposit Bonus</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Currently, the most popular promotion is the "First Deposit Bonus", where new members can receive up to a 300% extra bonus on their first deposit, doubling your starting capital.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"><Landmark size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Daily Rebate Program</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Regardless of winning or losing, players can receive a certain percentage of feedback based on their betting amount every day, which is a significant income for long-term players.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"><Star size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Limited-Time Events</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                For specific holidays or new game launches, we introduce limited-time events such as "Lucky Draws" or "Leaderboard Competitions" with prizes ranging from cash to luxury travel.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/20">
                                <Gift size={28} />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                Comprehensive Guide to <span className="text-blue-600">Promotions</span>
                            </h4>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-md">Our ecosystem is designed to provide tangible value through innovative reward structures.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Trophy size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Rewarding Loyalty</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We understand that online gaming requires more than just great games; it requires a commitment to providing tangible value through innovative promotional structures.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <RefreshCw size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Multi-Tiered System</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Unlike traditional platforms, we provide a dynamic range of incentives that evolve with the player's journey, starting from the massive First Deposit Bonus.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Zap size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Leading Rebates</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Our Daily Rebate Program is industry-leading in transparency. Every bet counts, offering a percentage-based return on total valid turnover.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Star size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Interactive Events</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Beyond financial incentives, we host Leaderboard Competitions that foster community, where players can track progress in real-time.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <ShieldCheck size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Security & Fairness</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                All terms are clearly stated with no hidden clauses. We use automated systems to track bonus progress fairly for all members.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Smartphone size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Provider Exclusives</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We collaborate with giants like JILI and PG Soft to bring exclusive promotions featuring higher RTPs and unique tournament structures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HotGamesSection = () => (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 relative">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">Hot Games Today</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Trending games with highest RTP and jackpot wins</p>
                <a href="/hot-game" className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline absolute right-0 bottom-0">
                    View All <ArrowRight size={18} />
                </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {GAMES.slice(0, 6).map((game, i) => (
                    <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden transition-all duration-300 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl">
                        <div className="relative w-full aspect-[5/3] overflow-hidden">
                            <img src={game.image} alt={game.name} className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
                            <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black rounded-full uppercase shadow-md flex items-center justify-center min-h-[24px]">{game.badge}</div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                <a href={game.url} target="_blank" rel="noopener noreferrer" className="w-full py-2 bg-blue-600 text-white text-xs font-black rounded-lg text-center hover:bg-blue-700 transition-colors">Play Now</a>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 truncate">{game.name}</h3>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-[10px] font-black">
                                    <span className="text-slate-400 uppercase tracking-widest">RTP</span>
                                    <span className="text-blue-600 dark:text-blue-400">{game.rtp}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" style={{ width: game.rtp }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-10 sm:hidden">
                <a href="/hot-game" className="w-full py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white font-bold flex items-center justify-center gap-2">
                    View All Games <ArrowRight size={18} />
                </a>
            </div>
        </div>
    </section>
);

const WinnersCarousel = () => (
    <section className="py-12 overflow-hidden bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2"><span className="text-2xl">🏆</span> Latest Winners</h2>
        </div>
        <div className="flex animate-scroll-carousel gap-6 min-w-max px-4">
            {[...WINNERS, ...WINNERS, ...WINNERS, ...WINNERS].map((winner, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl flex items-center gap-4 min-w-[300px] border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-xl font-bold text-white shadow-md">{winner.name[0]}</div>
                    <div>
                        <div className="font-bold text-slate-900 dark:text-white">{winner.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Won on <span className="text-blue-600 dark:text-blue-400 font-bold">{winner.game}</span></div>
                        <div className="text-slate-900 dark:text-white font-black text-lg">{winner.amount}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const PlatformsGrid = () => (
    <section id="platforms" className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">Our Platform Network</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Choose the perfect platform for your gaming experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PLATFORMS.map((platform, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl group hover:border-blue-300 dark:hover:border-blue-500 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 group-hover:border-blue-400 transition-all shadow-md bg-white p-1"><img src={platform.logo} alt={platform.name} className="w-full h-full object-cover rounded-lg" loading="lazy" /></div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{platform.name}</h3>
                            </div>
                            <span className={cn("px-3 py-1 rounded-full text-xs font-bold border uppercase shadow-sm flex items-center justify-center min-h-[24px]", platform.badgeColor)}>{platform.type}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">{platform.desc}</p>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-slate-800">
                            <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Official Partner</span>
                            <div className="flex gap-4">
                                <a href={`/brands/${platform.id.replace('brand-', '')}`} className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-blue-700 dark:hover:text-blue-300">View Details</a>
                                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><ArrowRight size={18} /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Shield size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Top Gaming Platforms</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                AceBet Alliance has established a powerful network of "Top Gaming Platforms", dedicated to becoming a safe and reliable gaming alliance recommendation in the hearts of players worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"><Zap size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Industry-Leading Partners</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We cooperate deeply with industry-leading game developers such as JILI, Evolution Gaming, and PG Soft to ensure our network provides the latest and hottest game content.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"><CheckCircle size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Legal & Secure</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                All platforms in the AceBet Alliance network hold legal gaming licenses and use advanced SSL encryption technology to protect players' personal information and transaction data.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"><Users size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Asia's Most Popular Brands</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Brands such as BETSO88 and SSBET77 have won the favor of millions of players with their excellent localization services and ultra-fast payment experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-xl shadow-cyan-600/20">
                                <Network size={28} />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                Evolution of the <span className="text-cyan-600">Network</span>
                            </h4>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-md">We have created an ecosystem where quality and security are guaranteed through strategic curation.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <LayoutDashboard size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">New Paradigm</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Representing a new paradigm in online gaming by curating only the most reputable platforms for our ecosystem.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Handshake size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Global Partners</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Strategic partnerships with giants like JILI and Evolution Gaming allow us to offer unparalleled content variety.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Lock size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Military Security</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We employ military-grade encryption and multi-factor authentication across all platforms to ensure data safety.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Globe2 size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Localized Excellence</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Focusing on what players truly value: fast payouts, GCash options, and 24/7 native support in the Philippines.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <TrendingUp size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Future Innovation</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Constantly exploring new technologies like blockchain for faster transactions and AI-driven recommendations.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-cyan-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Shield size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Unified Support</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Our network provides a unified support system to mediate and ensure swift resolution for any partner platform issues.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ComparisonTable = () => (
    <section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white">Platform Comparison</h2>
            <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-x-auto border border-slate-200 dark:border-slate-700 shadow-xl">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">Platform</th>
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">RTP</th>
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">Games</th>
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">Bonus</th>
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">Speed</th>
                            <th className="p-6 text-blue-700 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">Rating</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {[
                            { name: 'BETSO88', rtp: '97.00%', games: '1,000+', bonus: '100% Welcome Bonus', speed: '⚡⚡⚡⚡ Very Fast' },
                            { name: 'MILYON88', rtp: '97.00%', games: '1,000+', bonus: '300% First Deposit', speed: '⚡⚡⚡⚡ Very Fast' },
                            { name: 'JILINO1', rtp: '96.85%', games: '1,000+', bonus: '300% New Member Bonus', speed: '⚡⚡⚡⚡ Very Fast' },
                            { name: 'SWERTE99', rtp: '96.85%', games: '1,000+', bonus: '100% First Deposit', speed: '⚡⚡⚡⚡ Very Fast' },
                            { name: 'SSBET77', rtp: '96.85%', games: '1,000+', bonus: '400% Welcome Bonus', speed: '⚡⚡⚡⚡ Very Fast' },
                            { name: '7SPIN', rtp: '96.85%', games: '4,000+', bonus: '400% First Deposit', speed: '⚡⚡⚡ Instant' },
                            { name: 'SPINOY88', rtp: '96.85%', games: '4,000+', bonus: 'FreeSpin Card 100 spin', speed: '⚡⚡⚡ Instant' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors">
                                <td className="p-6 font-bold text-slate-900 dark:text-white">
                                    <a href={`/brands/${row.name.toLowerCase()}`} className="hover:text-blue-600 transition-colors underline decoration-blue-500/30 underline-offset-4">
                                        {row.name}
                                    </a>
                                </td>
                                <td className="p-6 text-slate-600 dark:text-slate-300 font-medium">{row.rtp}</td>
                                <td className="p-6 text-slate-600 dark:text-slate-300 font-medium">{row.games}</td>
                                <td className="p-6 text-slate-600 dark:text-slate-300 font-medium">{row.bonus}</td>
                                <td className="p-6 text-green-600 dark:text-green-400 font-bold">{row.speed}</td>
                                <td className="p-6 text-yellow-500 text-xs flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-16 bg-white dark:bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><Percent size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Transparent Information</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                The AceBet Alliance Platform Comparison aims to provide players with the most transparent and detailed information. We analyze major brands under our cooperation comprehensively.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"><Trophy size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">High RTP & Variety</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Our partner platforms provide an RTP of up to 97%, with game selections ranging from classic slots and live casinos to Philippine-style Sabong betting.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"><Zap size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Speed & Security</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                All listed platforms have been strictly screened to ensure support for local payment methods like GCash and Maya, with withdrawals completed in 5-15 minutes.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"><ShieldCheck size={24} /></div>
                        <div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Commitment to Integrity</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                This comparison is our commitment to player integrity. We help you find the most perfect home, whether you seek high bonuses or a stable experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-xl shadow-amber-600/20">
                                <Search size={28} />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                In-Depth <span className="text-amber-600">Analysis</span>
                            </h4>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium max-w-md">We provide the most transparent and detailed information to help you find your perfect gaming home.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <BarChart size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Data-Driven</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We take the guesswork out by providing a comprehensive comparison based on Transparency, Variety, Speed, and Integrity.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Percent size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Unvarnished RTP</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We dive deep into terms, analyzing wagering requirements and RTP percentages. Brands like BETSO88 offer up to 97%.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Zap size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Non-Negotiable Speed</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                A platform only makes our list if it supports instant deposits and provides withdrawal times among the fastest in the industry.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Wallet size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Payment Integration</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Integrating with GCash and Maya ensures players access winnings in 5-15 minutes, setting a new standard for convenience.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <Heart size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Integrity First</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                We are an alliance. If a platform fails to meet our high standards for fairness, it is removed from our network immediately.
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-amber-600 flex items-center justify-center mb-6 shadow-sm transition-transform">
                                <RefreshCw size={24} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 dark:text-white mb-4">Weekly Updates</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Updated weekly to reflect latest changes. We track new launches and shifts in speed to ensure data is always current.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white">What Our Winners Say?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl transition-transform duration-300 border border-slate-200 dark:border-slate-700 shadow-lg">
                        <div className="flex gap-1 mb-4 text-yellow-500 text-xs">{[...Array(t.rating)].map((_, r) => <Star key={r} fill="currentColor" size={16} />)}</div>
                        <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed font-medium">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-600 flex items-center justify-center font-bold text-xl text-white shadow-md">{t.name[0]}</div>
                            <div><div className="font-bold text-slate-900 dark:text-white">{t.name}</div><div className="text-xs text-slate-500 dark:text-slate-400 font-bold">{t.loc}</div></div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Platform: {t.platform}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SecuritySection = () => (
    <section className="py-16 px-4 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-12">Secure & Verified Payments</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {SECURITY_FEATURES.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="mb-4 relative">
                            <feature.icon className={cn("w-12 h-12 relative z-10", feature.color)} strokeWidth={1.5} />
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 text-sm font-bold transition-colors">{feature.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const DynamicWaveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let offset = 0;
        let isVisible = false;

        let resizeObserver: ResizeObserver;
        const parent = canvas.parentElement;
        
        if (parent) {
            resizeObserver = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    canvas.width = entry.contentRect.width;
                    canvas.height = entry.contentRect.height;
                }
            });
            resizeObserver.observe(parent);
        }

        const draw = () => {
            if (!isVisible) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const width = canvas.width;
            const height = canvas.height;
            const centerY = height / 2;
            const speed = 0.01;

            const waves = [
                {
                    amplitude: 50,
                    frequency: 0.003,
                    speed: 1,
                    color: '#3b82f6', // blue-500
                    lineWidth: 4,
                    glow: 20,
                    verticalOffset: 0
                },
                {
                    amplitude: 40,
                    frequency: 0.004,
                    speed: 0.8,
                    color: '#2563eb', // blue-600
                    lineWidth: 3,
                    glow: 15,
                    verticalOffset: 20
                },
                {
                    amplitude: 30,
                    frequency: 0.005,
                    speed: 1.2,
                    color: '#60a5fa', // blue-400
                    lineWidth: 2,
                    glow: 10,
                    verticalOffset: -20
                }
            ];

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.lineWidth = wave.lineWidth;
                ctx.strokeStyle = wave.color;
                ctx.shadowBlur = wave.glow;
                ctx.shadowColor = wave.color;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';

                for (let x = 0; x <= width; x += 2) {
                    const y = centerY + wave.verticalOffset + Math.sin(x * wave.frequency + offset * wave.speed) * wave.amplitude;
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            });

            offset += speed;
            animationFrameId = requestAnimationFrame(draw);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
        draw();
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            },
            { threshold: 0 }
        );
        
        observer.observe(canvas);

        return () => {

            cancelAnimationFrame(animationFrameId);
            if (resizeObserver) resizeObserver.disconnect();            
            observer.disconnect();            
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-50 dark:opacity-40"
        />
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section id="faq" className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            <DynamicWaveBackground />
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className={cn(
                            "bg-white dark:bg-slate-900 rounded-xl overflow-hidden transition-all shadow-sm border",
                            openIndex === i ? 'border-blue-400 dark:border-blue-600 shadow-md' : 'border-slate-200 dark:border-slate-800'
                        )}>
                            <button className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                                <span className="font-bold text-lg text-slate-800 dark:text-slate-200">{faq.q}</span>
                                <ChevronRight className={cn("transform transition-transform", openIndex === i ? 'rotate-90 text-blue-600 dark:text-blue-400' : 'text-slate-400')} />
                            </button>
                            <div className={cn("overflow-hidden transition-all duration-300", openIndex === i ? 'max-h-96 p-6 pt-0' : 'max-h-0')}>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const NewsSection = () => {
    const displayedNews = ARTICLES.slice(0, 3);
    return (
        <section id="news" className="py-20 px-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-3 shadow-sm uppercase">LATEST UPDATES</div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">News & Events</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Stay updated with the latest tournaments, system upgrades, and payment channel news.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayedNews.map((item) => (
                        <div key={item.id} className="group flex flex-col h-full bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                            <div className="relative w-full aspect-[600/400] overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-lg shadow-sm">{item.category}</span></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3 uppercase tracking-wider">Jan 08, 2026</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed line-clamp-2">{item.excerpt}</p>
                                <Link to={`/articles/${item.slug}`} aria-label={`Read More ${item.title}`}> {item.title} <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

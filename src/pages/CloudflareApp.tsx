import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Download, 
  CheckCircle2,
  ArrowRight,
  Lock,
  ShieldAlert,
  Info,
  Activity,
  EyeOff,
  Server
} from 'lucide-react';
import { SITE_URL } from '../constants';

export const CloudflareApp: React.FC = () => {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      <Helmet>
        <title>1.1.1.1 APP - Optimize Connection & Security | ACEBET</title>
        <meta name="description" content="Learn how to use Cloudflare 1.1.1.1 VPN (WARP) to optimize your network connection, solve latency issues, and ensure privacy for gaming." />
        <link rel="canonical" href={`${SITE_URL}/cloudflare-app`} />
      </Helmet>

      {/* Watermark Background */}
      <div className="absolute top-40 -left-20 text-[20vw] font-black text-slate-100 dark:text-slate-900/20 select-none pointer-events-none -rotate-12 z-0">
        1.1.1.1
      </div>
      <div className="absolute bottom-40 -right-20 text-[20vw] font-black text-slate-100 dark:text-slate-900/20 select-none pointer-events-none rotate-12 z-0">
        1.1.1.1
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
                  Network Optimization Tool
                </span>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-tight">
                  1.1.1.1 APP <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Safer & Faster</span> Internet
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                  1.1.1.1 (WARP) by Cloudflare is a free VPN app designed to enhance internet privacy and speed. For online gamers, it's the best partner to solve connection instability and lag.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a 
                    href="https://1.1.1.1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
                  >
                    Download Now <Download size={20} />
                  </a>
                  <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                    View Tutorial
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                {/* iPhone Mockup */}
                <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 border-[12px] rounded-[3rem] h-[600px] w-[300px] shadow-2xl">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 dark:bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-10 h-1 bg-slate-800 dark:bg-slate-700 rounded-full" />
                  </div>

                  {/* Buttons */}
                  <div className="h-[32px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -right-[15px] top-[142px] rounded-r-lg"></div>
                  
                  {/* Screen Content */}
                  <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-slate-900 relative">
                    <img 
                      src="/images/cloudflare/download 1.1.1.1" 
                      alt="1.1.1.1 App Screenshot" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Why do players need 1.1.1.1?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            WARP optimizes your connection path through Cloudflare's global network, providing a smoother gaming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-amber-500" />,
              title: "Lower Latency (Ping)",
              desc: "Optimize routing to avoid congested nodes, reducing lag and disconnection risks during gameplay."
            },
            {
              icon: <Lock className="text-blue-500" />,
              title: "Protect Your Privacy",
              desc: "Encrypt all traffic to prevent ISP or third-party monitoring, ensuring your account and data security."
            },
            {
              icon: <Globe className="text-emerald-500" />,
              title: "Bypass Restrictions",
              desc: "Easily break through blocks if your network environment restricts access to specific games or websites."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">How to get started?</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Follow these simple steps to enhance your connection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Download the App",
                desc: "Search \"1.1.1.1\" in App Store or Google Play, or visit the official website directly.",
                image: "/images/cloudflare/download the app"
              },
              {
                step: "02",
                title: "Initial Setup",
                desc: "Open the app, agree to privacy terms, and install the VPN profile as prompted.",
                image: "/images/cloudflare/initial setup"
              },
              {
                step: "03",
                title: "Enable WARP Mode",
                desc: "Tap the big switch on the home screen; it's active when it shows \"Connected\".",
                image: "/images/cloudflare/enable"
              },
              {
                step: "04",
                title: "Start Gaming",
                desc: "Now you can open your game and enjoy a more stable and faster connection experience!",
                image: "/images/cloudflare/completed"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-black mb-6 shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                
                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-6">{item.title}</h4>
                
                {/* iPhone Mockup */}
                <div className="relative mx-auto border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 border-[8px] rounded-[2.2rem] h-[420px] w-[210px] shadow-2xl overflow-hidden mb-8 group transition-transform duration-500">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 dark:bg-slate-800 rounded-b-lg z-20 flex items-center justify-center">
                    <div className="w-6 h-1 bg-slate-800 dark:bg-slate-700 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="rounded-[1.6rem] overflow-hidden w-full h-full bg-slate-900 relative">
                    <img 
                      src={item.image} 
                      alt={`Step ${item.step} Screenshot`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VPN Deep Dive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 z-10 relative">
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-8 md:p-16 shadow-xl overflow-hidden relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  <Info size={12} /> Knowledge Base
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
                  Understanding VPN:<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">The Invisibility Cloak of the Internet</span>
                </h2>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    In today's digital age, a VPN (Virtual Private Network) is no longer just for tech experts; it's an essential tool for every internet user, especially online gamers. 1.1.1.1 with WARP technology is essentially an optimized VPN service.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    VPN stands for Virtual Private Network. Simply put, it creates an encrypted "tunnel" between your device and the internet. When you connect to a VPN, all your network traffic travels through this tunnel to the VPN server before reaching its destination. This not only hides your real IP address but also protects your data from being intercepted by third parties.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-1">
                      <EyeOff size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-sm mb-1">Privacy Masking</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Hide your real IP and prevent tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mt-1">
                      <Server size={18} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-sm mb-1">Virtual Location</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Unlock global content and games</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-10">
                {/* Pros Section */}
                <div>
                  <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 dark:text-white mb-6">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <CheckCircle2 size={20} />
                    </div>
                    Core Advantages of Using a VPN (Pros)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Ultimate Privacy & Security", desc: "Encrypt all transmitted data to prevent ISPs, governments, or hackers on public Wi-Fi from snooping on your browsing history." },
                      { title: "Bypass Geo-Restrictions", desc: "Switch your virtual location to anywhere in the world to easily unlock region-locked game servers or streaming content." },
                      { title: "Optimize Gaming Connection", desc: "Provides more direct routing, effectively lowering Ping and reducing packet loss and instability during gameplay." },
                      { title: "Defend Against DDoS Attacks", desc: "Hiding your real IP address makes it impossible for malicious attackers to launch traffic attacks against your home network." }
                    ].map((pro, i) => (
                      <div key={i} className="group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 transition-colors">{pro.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{pro.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cons Section */}
                <div>
                  <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 dark:text-white mb-6">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
                      <ShieldAlert size={20} />
                    </div>
                    Potential Disadvantages & Risks (Cons)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Connection Speed Loss", desc: "Encryption overhead and rerouting through servers can cause a slight drop in speed, depending on server quality and distance." },
                      { title: "Security Risks of Free Services", desc: "Some low-quality free VPNs may log and sell your data; choosing a reputable provider is crucial." },
                      { title: "Detection & Blocking", desc: "Some strict platforms may detect and block known VPN IPs, preventing access to certain applications." }
                    ].map((con, i) => (
                      <div key={i} className="group p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-500 transition-colors">{con.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{con.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Summary Card */}
            <div className="mt-16 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                <Activity size={32} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2">Why Choose 1.1.1.1 WARP?</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Unlike traditional VPNs, 1.1.1.1 WARP is built for "speed." It doesn't focus on switching countries but rather on leveraging Cloudflare's massive global network to find the fastest path for your data. For gamers seeking stable connections, it's the perfect balance of security and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 z-10 relative">
        <div className="p-12 rounded-[3rem] bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">Ready to upgrade your gaming experience?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
              Download 1.1.1.1 now for unprecedented speed and stability. Completely free, no data limits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://1.1.1.1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-blue-500 font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-2"
              >
                Visit Official Website <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

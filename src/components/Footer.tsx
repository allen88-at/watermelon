import React from 'react';
import { Link } from 'react-router-dom';
import { PAYMENT_PROVIDERS } from '../constants';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 border-b border-slate-800 pb-16">
                  <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest mb-10">Payment Methods</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {PAYMENT_PROVIDERS.map((provider, i) => (
                      <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-2 w-24 h-12 flex items-center justify-center overflow-hidden">
                        <img src={provider.image} alt={provider.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter mb-6"><span className="text-blue-600">ACEBET</span><span className="text-white">ALLIANCE</span></Link>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-md">#1 Trusted Gaming Platform in the Philippines. Instant deposits, fast withdrawals, and secure gaming environment verified by international authorities.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link to="/#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><a href="/#platforms" className="hover:text-blue-400 transition-colors">Our Platforms</a></li>
                            <li><a href="/#news" className="hover:text-blue-400 transition-colors">News & Guides</a></li>
                            <li><a href="/#faq" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-3 text-slate-400">
                            <li><Link to="/legal/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/legal/terms-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/legal/responsible-gaming" className="hover:text-blue-400 transition-colors">Responsible Gaming</Link></li>
                            <li><Link to="/legal/contact-support" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-center">
                  <h4 className="text-white font-bold mb-2">ACEBET ALLIANCE - Your Ultimate Gaming Destination!</h4>
                  <p className="text-slate-500 text-sm mb-4">Copyright © 2025</p>
                  <p className="text-slate-400 text-sm max-w-3xl mx-auto mb-6 leading-relaxed">Dive into the world of ACEBET ALLIANCE and experience unmatched gaming excitement. Discover top-notch games, exclusive promotions, and complete security. <br /> Sign up at ACEBET ALLIANCE today and embark on your journey to fortune. Enjoy every moment with thrill and confidence!</p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-slate-500 mt-8 pt-8 border-t border-slate-800/50">
                    <div className="flex items-center gap-4"><span>18+ Play Responsibly</span><span className="w-1 h-1 bg-slate-700 rounded-full"></span><span>SSL Secured</span><span className="w-1 h-1 bg-slate-700 rounded-full"></span><span>GCB Licensed</span></div>
                  </div>
                </div>
            </div>
        </footer>
    );
};

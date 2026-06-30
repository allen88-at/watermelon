import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { FAQS, SITE_URL } from '../constants';

export const Faqs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = FAQS.filter(faq => 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>ACEBET Alliance FAQs | Casino Help & Support Center</title>
                <meta name="description" content="Find answers to common questions about ACEBET Alliance. Learn about deposits, withdrawals, and promotions for players in the Philippines." />
                <link rel="canonical" href={`${SITE_URL}/services/faqs`} />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-xs font-bold mb-6 shadow-sm uppercase">SUPPORT CENTER</div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">Everything you need to know about ACEBET Alliance and our partner platforms.</p>
                </div>

                <div className="relative mb-12">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400"><Search size={20} /></div>
                    <input 
                        type="text" 
                        placeholder="Search for questions..." 
                        className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 shadow-lg transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="space-y-4 mb-20">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all">
                                <button 
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.q}</span>
                                    {openIndex === i ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-slate-400" />}
                                </button>
                                {openIndex === i && (
                                    <div className="px-8 pb-8 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-50 dark:border-slate-700 pt-6">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700">
                             <HelpCircle size={48} className="mx-auto text-slate-300 mb-4" />
                             <p className="text-slate-500 dark:text-slate-400 font-medium">No results found for "{searchQuery}"</p>
                        </div>
                    )}
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black mb-4">Still have questions?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto">Our 24/7 customer support team is always ready to help you with any issues or inquiries.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2">
                                <MessageCircle size={20} fill="currentColor" /> LIVE CHAT
                            </button>
                            <button className="px-8 py-4 bg-blue-500 text-white font-black rounded-xl hover:bg-blue-400 transition-all shadow-lg flex items-center gap-2">
                                TELEGRAM SUPPORT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

export const FloatingBonus: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false); 

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {isExpanded ? (
                <div className="relative animate-fade-in origin-bottom-left">
                    <button 
                        onClick={() => setIsExpanded(false)} 
                        className="absolute -top-2 -right-2 bg-white dark:bg-slate-700 text-slate-400 dark:text-slate-200 hover:text-red-500 rounded-full p-1 border border-slate-100 dark:border-slate-600 shadow-md transition-all z-20"
                    >
                        <X size={14} />
                    </button>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-0.5 rounded-xl shadow-xl shadow-blue-500/20">
                        <div className="bg-white dark:bg-slate-800 p-2 pr-3 rounded-[10px] flex items-center gap-3 border border-blue-100 dark:border-slate-700">
                            <div className="text-3xl shrink-0">🎁</div>
                            <div className="flex flex-col">
                                <div className="font-black text-blue-600 dark:text-blue-400 text-[10px] tracking-wider whitespace-nowrap uppercase">WELCOME BONUS</div>
                                <div className="font-bold text-slate-800 dark:text-white text-xs leading-tight">Get Free 400%</div>
                            </div>
                            <a 
                                href="https://7spin.ph/promotion/127?p=ACESEO" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-slate-900 dark:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold whitespace-nowrap hover:bg-slate-800 dark:hover:bg-blue-500 transition-colors shadow-sm"
                            >
                                CLAIM
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={() => setIsExpanded(true)}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white transition-transform animate-bounce-slow group relative"
                >
                    <span className="text-2xl transition-transform">🎁</span>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
                    </span>
                </button>
            )}
        </div>
    );
};

import React, { useState, useEffect } from 'react';
import { Send, ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';

export const FloatingControls: React.FC = () => {
    const [showTop, setShowTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <>
            <a href="https://t.me/ACEBETALLIANCE" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-4 z-40 w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center shadow-lg border-2 border-white group" aria-label="Chat on Telegram">
                <Send fill="white" className="text-white" size={26} />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white animate-pulse">1</div>
            </a>
            <button 
                onClick={scrollToTop} 
                className={cn(
                    "fixed bottom-24 left-4 sm:left-auto sm:right-20 z-40 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600",
                    showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                )}
            >
                <ArrowUp size={24} />
            </button>
        </>
    );
};

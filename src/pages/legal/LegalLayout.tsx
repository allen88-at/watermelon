import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LegalLayoutProps {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children, icon }) => (
    <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6">
                    {icon}
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{title}</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">Last Updated: March 2026</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm prose prose-slate dark:prose-invert max-w-none">
                {children}
            </div>
        </div>
    </div>
);

export default LegalLayout;

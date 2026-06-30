import React from 'react';

export const Ticker: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden py-2.5 shadow-sm transition-colors duration-300">
            <div className="flex animate-scroll-ticker gap-16 whitespace-nowrap min-w-full">
                {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="text-lg">📢</span> Welcome to <span className="text-blue-600 dark:text-blue-400 font-bold">ACEBET ALLIANCE</span> - The #1 Trusted Online Casino in Philippines!</span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="text-lg">🎁</span> New Member Special: Get <span className="text-red-500 font-black">100% Welcome Bonus</span> up to 20,000 PHP!</span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="text-lg">⚡</span> Instant Deposits & Withdrawals via <span className="text-blue-600 dark:text-blue-400 font-bold">GCash, Maya & Bank Transfer</span> available 24/7.</span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="text-lg">💎</span> Join our <span className="text-purple-600 dark:text-purple-400 font-bold">VIP Program</span> for exclusive rewards and priority support.</span>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"><span className="text-lg">🔥</span> Hot Game Alert: <span className="text-slate-900 dark:text-white font-black">Super Ace</span> RTP is currently 98.2%! Play Now.</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

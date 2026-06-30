import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Flame, Star, TrendingUp, Play, Info, Search, Filter, Clock, Zap, ChevronRight } from 'lucide-react';
import { RTP_GAMES, SITE_URL } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const PROVIDERS = ['ALL', 'JILI', 'PG Soft', 'FC', 'PP', 'JDB', 'VP', 'EVO'];

export const HotGames: React.FC = () => {
    const [activeProvider, setActiveProvider] = useState('ALL');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredGames = useMemo(() => {
        return RTP_GAMES.filter(game => {
            const matchesProvider = activeProvider === 'ALL' || game.provider.toLowerCase().includes(activeProvider.toLowerCase());
            const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesProvider && matchesSearch;
        });
    }, [activeProvider, searchQuery]);

    return (
        <div className="pt-24 pb-20 animate-fade-in bg-[#0a0f1a] min-h-screen text-slate-300">
            <Helmet>
                <title>Live Slot RTP & Hot Casino Games | ACEBET Alliance</title>
                <meta name="description" content="Real-time RTP data for the hottest casino games. Track winning trends and play top slots with the highest payouts at ACEBET Alliance." />
                <link rel="canonical" href={`${SITE_URL}/hot-game`} />
            </Helmet>

            {/* Hero Section */}
            <div className="relative overflow-hidden py-16 border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                <Zap size={12} fill="currentColor" /> Live Data Stream
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                                HOT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GAMES</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-xl font-medium">
                                Real-time Return to Player (RTP) tracking across all partner platforms. Updated every 60 seconds.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Update</span>
                                <span className="text-sm font-black text-white flex items-center gap-2">
                                    <Clock size={14} className="text-blue-400" /> 10 Mins ago
                                </span>
                            </div>
                            <div className="w-px h-8 bg-white/10"></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Players</span>
                                <span className="text-sm font-black text-white flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> 21,482
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="sticky top-20 z-40 bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
                            {PROVIDERS.map((provider) => (
                                <button
                                    key={provider}
                                    onClick={() => setActiveProvider(provider)}
                                    className={`px-5 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap border ${
                                        activeProvider === provider
                                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {provider}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-colors text-white placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Game Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredGames.map((game, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2, delay: i * 0.02 }}
                                key={game.name}
                                className="group relative"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                                    <div className="aspect-[5/3] relative overflow-hidden">
                                        <img 
                                            src={game.image} 
                                            alt={game.name} 
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60"></div>
                                        
                                        {/* RTP Badge */}
                                        <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-black shadow-lg">
                                            {game.rtp}
                                        </div>

                                        {/* Hot Indicator */}
                                        {parseFloat(game.rtp) > 96.5 && (
                                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 flex items-center justify-center text-red-500 animate-pulse">
                                                <Flame size={16} fill="currentColor" />
                                            </div>
                                        )}

                                        {/* Hover Actions */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                                            <a 
                                                href={game.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-xl"
                                            >
                                                <Play size={16} fill="currentColor" /> PLAY NOW
                                            </a>
                                            <button className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-md text-white text-xs font-black flex items-center justify-center gap-2 hover:bg-white/20 transition-colors border border-white/10">
                                                <Info size={16} /> DETAILS
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1 truncate">
                                            {game.provider}
                                        </div>
                                        <h3 className="font-bold text-white text-sm truncate mb-3">{game.name}</h3>
                                        
                                        {/* RTP Bar */}
                                        <div className="space-y-1.5">
                                            <div className="flex items-center justify-between text-[10px] font-black">
                                                <span className="text-slate-500 uppercase">Live RTP</span>
                                                <span className={parseFloat(game.rtp) > 96.5 ? 'text-green-400' : 'text-blue-400'}>
                                                    {game.rtp}
                                                </span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: game.rtp }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className={`h-full rounded-full ${
                                                        parseFloat(game.rtp) > 96.5 
                                                            ? 'bg-gradient-to-r from-green-500 to-emerald-400' 
                                                            : 'bg-gradient-to-r from-blue-600 to-cyan-400'
                                                    }`}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredGames.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
                            <Search size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
                        <p className="text-slate-500">Try adjusting your filters or search query.</p>
                        <button 
                            onClick={() => { setActiveProvider('ALL'); setSearchQuery(''); }}
                            className="mt-6 text-blue-400 font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Winners Ticker */}
            <div className="bg-white/5 border-y border-white/5 py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3">
                            <TrendingUp className="text-green-500" /> LIVE WINNERS
                        </h2>
                        <button className="text-xs font-black text-blue-400 flex items-center gap-1 hover:underline uppercase tracking-widest">
                            View All <ChevronRight size={14} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Jha***e23', game: 'Super Ace', amount: '₱145,000', time: '2m ago' },
                            { name: 'Mar***e08', game: 'Fortune Gems', amount: '₱82,500', time: '5m ago' },
                            { name: 'Ken***yd99', game: 'Boxing King', amount: '₱240,000', time: '12m ago' }
                        ].map((winner, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 font-black">
                                    {winner.name[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm font-bold text-white truncate">{winner.name}</span>
                                        <span className="text-[10px] text-slate-500 font-medium">{winner.time}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-400 truncate">{winner.game}</span>
                                        <span className="text-sm font-black text-green-400">{winner.amount}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


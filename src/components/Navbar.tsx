import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Facebook, Twitter, Send, Youtube, Instagram, Music, Globe } from 'lucide-react';
import { NAV_STRUCTURE, SOCIAL_MEDIA_BRANDS, PLATFORMS } from '../constants';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = (name: string) => {
        setDropdownOpen(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const handleNavClick = (item: any) => {
        if (item.type === 'link') {
            navigate(item.path);
            setIsOpen(false);
        } else if (item.type === 'anchor') {
            if (location.pathname !== '/') {
                navigate(item.path);
            } else {
                const id = item.path.split('#')[1];
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
            setIsOpen(false);
        }
    };

    const handleRandomNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        const urls = PLATFORMS.map(p => p.url);
        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        window.open(randomUrl, '_blank');
    };

    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case 'facebook': return <Facebook size={18} className="text-[#1877F2]" />;
            case 'x': return <span className="font-bold text-sm text-black dark:text-white w-[18px] h-[18px] flex items-center justify-center">𝕏</span>;
            case 'telegram': return <Send size={18} className="text-[#26A5E4]" />;
            case 'youtube': return <Youtube size={18} className="text-[#FF0000]" />;
            case 'instagram': return <Instagram size={18} className="text-[#E4405F]" />;
            case 'tiktok': return <Music size={18} className="text-black dark:text-white" />;
            default: return null;
        }
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter group shrink-0 mr-4">
                            <span className="text-blue-600 group-hover:text-blue-500 transition-colors">ACEBET</span>
                            <span className="text-slate-900 dark:text-white">ALLIANCE</span>
                        </Link>
                        <div className="hidden lg:flex items-center gap-6">
                            {NAV_STRUCTURE.map((link) => {
                                if (link.type === 'dropdown') {
                                    return (
                                        <div key={link.name} className="relative group">
                                            <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 whitespace-nowrap">
                                                {link.name} <ChevronDown size={14} />
                                            </button>
                                            <div className="absolute top-full left-0 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-xl p-2 hidden group-hover:block border border-slate-100 dark:border-slate-700 animate-fade-in">
                                                {link.items?.map(subItem => (
                                                    <button 
                                                        key={subItem.id} 
                                                        onClick={() => handleNavClick(subItem)}
                                                        className="block w-full text-left px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap"
                                                    >
                                                        {subItem.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <button 
                                        key={link.name} 
                                        onClick={() => handleNavClick(link)} 
                                        className={cn(
                                            "text-sm font-bold uppercase tracking-wide transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap",
                                            link.isHot ? 'text-red-500 animate-pulse' : 'text-slate-600 dark:text-slate-300'
                                        )}
                                    >
                                        {link.isHot && '🔥 '}{link.name}
                                    </button>
                                );
                            })}
                            
                            <div className="relative group">
                                <button className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 whitespace-nowrap">
                                    <Globe size={16} className="text-blue-500" />
                                    Social Media <ChevronDown size={14} />
                                </button>
                                <div className="absolute top-full right-0 w-80 bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-5 hidden group-hover:block border border-slate-100 dark:border-slate-700 animate-fade-in">
                                    <div className="space-y-5">
                                        {SOCIAL_MEDIA_BRANDS.map((brand) => (
                                            <div key={brand.name} className="flex items-center justify-between group/brand">
                                                <span className="text-sm font-black text-slate-900 dark:text-white group-hover/brand:text-blue-600 transition-colors">{brand.name}</span>
                                                <div className="flex items-center gap-2.5">
                                                    {brand.links.map((link) => (
                                                        <a 
                                                            key={link.platform} 
                                                            href={link.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:shadow-md transition-all"
                                                            title={link.platform}
                                                        >
                                                            {getSocialIcon(link.platform)}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 ml-4">
                                <a href="#" onClick={handleRandomNavigation} className="px-6 py-2 btn-primary text-white text-sm font-black rounded-lg hover:shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all whitespace-nowrap flex items-center justify-center leading-none">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="lg:hidden flex items-center gap-4">
                          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                          </button>
                        </div>
                    </div>
                </div>
            </nav>
            {isOpen && <div className="lg:hidden fixed inset-0 bg-slate-900/60 z-[60] backdrop-blur-sm" onClick={() => setIsOpen(false)} />}
            <div className={cn(
                "lg:hidden fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-[70]",
                isOpen ? 'translate-x-0' : '-translate-x-full'
            )}>
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                         <span className="font-black text-xl tracking-tighter"><span className="text-blue-600">ACEBET</span><span className="text-slate-900 dark:text-white">ALLIANCE</span></span>
                        <button onClick={() => setIsOpen(false)} className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><X size={20} /></button>
                    </div>
                    <div className="flex flex-col gap-2">
                        {NAV_STRUCTURE.map((link) => {
                            if (link.type === 'dropdown') {
                                return (
                                    <div key={link.name} className="border-b border-slate-50 dark:border-slate-800">
                                        <button onClick={() => toggleDropdown(link.name)} className="w-full flex justify-between items-center text-lg font-bold uppercase tracking-wide py-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-all">
                                            {link.name} <ChevronDown size={16} className={cn("transform transition-transform", dropdownOpen[link.name] ? 'rotate-180' : '')} />
                                        </button>
                                        {dropdownOpen[link.name] && (
                                            <div className="pl-4 flex flex-col gap-2 pb-2">
                                                {link.items?.map(subItem => (
                                                    <button key={subItem.id} onClick={() => handleNavClick(subItem)} className="text-left text-base font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 py-1">
                                                        {subItem.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            return (
                                <button key={link.name} onClick={() => handleNavClick(link)} className={cn(
                                    "text-left text-lg font-bold uppercase tracking-wide py-3 border-b border-slate-50 dark:border-slate-800 hover:text-blue-600 hover:pl-2 transition-all",
                                    link.isHot ? 'text-red-500' : 'text-slate-700 dark:text-slate-200'
                                )}>
                                    {link.isHot && '🔥 '}{link.name}
                                </button>
                            );
                        })}
                        
                        <div className="border-b border-slate-50 dark:border-slate-800">
                            <button onClick={() => toggleDropdown('social')} className="w-full flex justify-between items-center text-lg font-bold uppercase tracking-wide py-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-all">
                                Social Media <ChevronDown size={16} className={cn("transform transition-transform", dropdownOpen['social'] ? 'rotate-180' : '')} />
                            </button>
                            {dropdownOpen['social'] && (
                                <div className="pl-4 flex flex-col gap-4 pb-4 mt-2">
                                    {SOCIAL_MEDIA_BRANDS.map((brand) => (
                                        <div key={brand.name} className="flex flex-col gap-2">
                                            <span className="text-sm font-black text-slate-900 dark:text-white">{brand.name}</span>
                                            <div className="flex items-center gap-2">
                                                {brand.links.map((link) => (
                                                    <a 
                                                        key={link.platform} 
                                                        href={link.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
                                                    >
                                                        {getSocialIcon(link.platform)}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="#" onClick={(e) => { setIsOpen(false); handleRandomNavigation(e); }} className="mt-8 w-full py-4 btn-primary flex items-center justify-center text-white font-black rounded-xl shadow-lg text-lg leading-none">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

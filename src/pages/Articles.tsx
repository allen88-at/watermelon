import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { ARTICLES, ARTICLE_CATEGORIES, SITE_URL } from '../constants';

import { Link, useSearchParams } from 'react-router-dom';

export const Articles: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'All';
    const [activeCategory, setActiveCategory] = React.useState(categoryParam);

    useEffect(() => {
        if (categoryParam !== activeCategory) {
            setActiveCategory(categoryParam);
        }
    }, [categoryParam]);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setSearchParams({ category: cat });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredArticles = activeCategory === 'All' 
        ? ARTICLES 
        : ARTICLES.filter(article => article.category === activeCategory);

    return (
        <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>Gaming Guides & Betting Strategy | ACEBET Alliance</title>
                <meta name="description" content="Read expert gaming articles, betting strategies, and tips from ACEBET Alliance. Master your favorite casino games and win big in the Philippines." />
                <link rel="canonical" href={`${SITE_URL}/articles`} />
            </Helmet>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 shadow-sm uppercase">KNOWLEDGE BASE</div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Gaming Articles & Guides</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">Expert insights, betting strategies, and the latest trends in the gaming industry.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {ARTICLE_CATEGORIES.map((cat, i) => (
                        <button 
                            key={i} 
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${activeCategory === cat ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {filteredArticles.map((article, i) => (
                        <Link key={article.id} to={`/articles/${article.slug}`} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                        <div className="aspect-video overflow-hidden relative">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleCategoryChange(article.category);
                                }}
                                className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-blue-600 text-[10px] font-black text-white uppercase tracking-widest shadow-lg hover:bg-blue-700 transition-colors z-10"
                            >
                                {article.category}
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                <div className="flex items-center gap-1"><Calendar size={12} /> {article.date}</div>
                                <div className="flex items-center gap-1"><User size={12} /> ACEBET Editor</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors">{article.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                            <div className="flex items-center gap-2 text-sm font-black text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all uppercase tracking-widest">
                                READ ARTICLE <ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 border border-slate-200 dark:border-slate-700 shadow-lg text-center">
                 <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-6"><BookOpen size={32} /></div>
                 <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Subscribe to Our Newsletter</h2>
                 <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">Get the latest gaming news, exclusive promotions, and expert betting tips delivered straight to your inbox.</p>
                 <form className="max-w-md mx-auto flex gap-2">
                    <input type="email" placeholder="Email Address" className="flex-1 px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all" />
                    <button className="px-8 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg uppercase tracking-widest">JOIN</button>
                 </form>
            </div>
        </div>
    </div>
);
};

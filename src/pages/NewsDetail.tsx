import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Tag, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { ARTICLES } from '../constants';

export const NewsDetail: React.FC = () => {
    const { id: slug } = useParams<{ id: string }>();
    const article = ARTICLES.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-2xl font-bold">News article not found</h1>
                <Link to="/news" className="text-blue-600 hover:underline mt-4 inline-block">Back to News</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 animate-fade-in bg-slate-50 dark:bg-slate-950 min-h-screen">
            <Helmet>
                <title>{article.title} | ACEBET Alliance News</title>
                <meta name="description" content={article.excerpt.length > 147 ? `${article.excerpt.substring(0, 147)}...` : article.excerpt} />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4">
                <Link to="/news" className="inline-flex items-center gap-2 text-sm font-black text-blue-600 dark:text-blue-400 mb-8 hover:gap-4 transition-all uppercase tracking-widest">
                    <ArrowLeft size={16} /> BACK TO NEWS
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6">
                        <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                            {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1 text-slate-500"><User size={12} /> ACEBET News Desk</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
                        {article.title}
                    </h1>
                    <div className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm mb-12">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {article.content}
                        <p className="mt-6 text-slate-600 dark:text-slate-300">
                            Stay tuned to ACEBET Alliance for the most reliable news and updates in the Philippine online gaming industry. We are committed to providing our players with the latest information on tournaments, platform upgrades, and secure payment methods.
                        </p>
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-700 flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Share:</span>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><Share2 size={18} /></button>
                                <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><MessageSquare size={18} /></button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Tag size={16} className="text-blue-600" />
                            <div className="flex gap-2">
                                <span className="text-[10px] font-black px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 uppercase">News</span>
                                <span className="text-[10px] font-black px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 uppercase">Updates</span>
                                <span className="text-[10px] font-black px-2 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-500 uppercase">PH Gaming</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related News */}
                <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Related News</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ARTICLES.filter(a => a.slug !== slug).slice(0, 2).map(a => (
                            <Link key={a.id} to={`/news/${a.slug}`} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all">
                                <div className="aspect-video w-full overflow-hidden">
                                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{a.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2">{a.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

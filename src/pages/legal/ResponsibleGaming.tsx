import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { SITE_URL } from '../../constants';

const ResponsibleGaming: React.FC = () => (
    <LegalLayout 
        title="Responsible Gaming" 
        icon={<Heart size={32} />}
    >
        <Helmet>
            <title>Responsible Gaming | ACEBET Alliance - Play Safe & Stay in Control</title>
            <meta name="description" content="ACEBET Alliance is committed to responsible gaming. Discover tools, self-exclusion options, and resources to help you maintain control and play safely in the Philippines." />
            <link rel="canonical" href={`${SITE_URL}/legal/responsible-gaming`} />
        </Helmet>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">1. Introduction</h2>
            <p>ACEBET Alliance is committed to providing a safe and responsible gaming environment. We believe that gaming should always be a fun and entertaining activity. However, for some individuals, it can become a problem. Our goal is to provide the tools and information necessary to help our players maintain control and play responsibly.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">2. Underage Gambling</h2>
            <p>Gambling under the age of 18 is strictly prohibited. We implement rigorous age verification procedures to ensure that all our players meet the legal age requirement. We also encourage parents to use filtering software to prevent minors from accessing gaming websites.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">3. Self-Assessment</h2>
            <p>If you are concerned about your gaming habits, consider the following questions:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Do you gamble to escape from a boring or unhappy life?</li>
                <li>Do you gamble until your last penny is gone?</li>
                <li>Have you ever lied to cover up the amount of money or time you spend gambling?</li>
                <li>Have others ever criticized your gambling?</li>
                <li>Have you lost interest in your family, friends, or hobbies due to gambling?</li>
            </ul>
            <p className="mt-4">If you answered "yes" to any of these questions, you may have a gambling problem and should seek assistance.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">4. Maintaining Control</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">4.1 Set Limits</h3>
                    <p>Establish a budget for your gaming sessions and stick to it. Never gamble with money that is needed for essential expenses like rent, food, or bills.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">4.2 Time Management</h3>
                    <p>Set a time limit for your gaming and take regular breaks. It's easy to lose track of time when you're immersed in a game.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">4.3 Don't Chase Losses</h3>
                    <p>Accept that losing is part of the game. Never try to win back what you've lost by increasing your bets.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">5. Cooling-Off and Self-Exclusion</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">5.1 Cooling-Off Period</h3>
                    <p>If you feel you need a short break, you can request a cooling-off period. During this time, your account will be temporarily suspended, and you will not be able to place bets or receive marketing materials.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">5.2 Self-Exclusion</h3>
                    <p>For a more permanent solution, we offer self-exclusion. You can choose to exclude yourself from our services for a period ranging from 6 months to 5 years, or even permanently. Once self-excluded, you will not be able to reactivate your account until the period has expired.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">6. Getting Help</h2>
            <p>If you or someone you know is struggling with a gambling problem, there are many organizations that can provide support and advice:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Gamblers Anonymous:</strong> A fellowship of men and women who share their experience, strength, and hope with each other that they may solve their common problem.</li>
                <li><strong>Gambling Therapy:</strong> Provides online support and counseling for anyone affected by gambling.</li>
                <li><strong>Local Support Services:</strong> Many countries have dedicated helplines and support groups for problem gambling.</li>
            </ul>
        </section>

        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-black mb-2">Need a Break?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">If you would like to set limits on your account or request self-exclusion, please contact our support team immediately.</p>
            <Link to="/legal/contact-support" className="inline-flex items-center gap-2 text-blue-600 font-black hover:underline">
                Contact Support <ArrowRight size={16} />
            </Link>
        </div>
    </LegalLayout>
);

export default ResponsibleGaming;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { SITE_URL } from '../../constants';

const TermsConditions: React.FC = () => (
    <LegalLayout 
        title="Terms & Conditions" 
        icon={<FileText size={32} />}
    >
        <Helmet>
            <title>Terms & Conditions | ACEBET Alliance - Rules & Regulations</title>
            <meta name="description" content="Review the official Terms and Conditions of ACEBET Alliance. Understand the rules, eligibility, financial terms, and user agreements for using our trusted gaming platform in the Philippines." />
            <link rel="canonical" href={`${SITE_URL}/legal/terms-conditions`} />
        </Helmet>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the ACEBET Alliance platform, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services. These terms constitute a legally binding agreement between you and ACEBET Alliance.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">2. Eligibility</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">2.1 Age Requirement</h3>
                    <p>You must be at least 18 years of age (or the legal age for gambling in your jurisdiction) to use our services. By using the platform, you represent and warrant that you meet this age requirement.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">2.2 Geographic Restrictions</h3>
                    <p>Our services are intended for users in jurisdictions where online gaming is legal. It is your responsibility to ensure that your use of ACEBET Alliance complies with all local laws and regulations.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">2.3 Account Restrictions</h3>
                    <p>We reserve the right to refuse service, terminate accounts, or restrict access to any user at our sole discretion, particularly if we suspect fraudulent or illegal activity.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">3. Account Registration and Security</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">3.1 Account Creation</h3>
                    <p>When creating an account, you must provide accurate, current, and complete information. You are responsible for keeping this information updated.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">3.2 Account Security</h3>
                    <p>You are solely responsible for maintaining the confidentiality of your account credentials (username and password). Any activity occurring under your account is your responsibility. Notify us immediately of any unauthorized use.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">3.3 One Account Per Person</h3>
                    <p>Each individual is permitted only one account across the ACEBET Alliance network. Creating multiple accounts to exploit bonuses or bypass restrictions is strictly prohibited and will lead to immediate account suspension and forfeiture of funds.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">4. Use of Services</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">4.1 Permitted Use</h3>
                    <p>You may use our services for personal, non-commercial entertainment purposes only. You agree to use the platform in a manner consistent with all applicable laws.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">4.2 Prohibited Activities</h3>
                    <p>Prohibited activities include, but are not limited to: money laundering, collusion, using automated software (bots), exploiting software bugs, and providing false information. Any attempt to manipulate the outcome of games is strictly forbidden.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">5. Financial Terms</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">5.1 Deposits</h3>
                    <p>Deposits must be made using supported payment methods (e.g., GCash, Maya, Bank Transfer). Funds must originate from an account held in your own name. The minimum deposit is 50 ₱.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">5.2 Withdrawals</h3>
                    <p>Withdrawals are subject to verification and may take 5-15 minutes on average. Large withdrawals or suspicious activity may require additional KYC (Know Your Customer) documentation and extended processing time.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">5.3 Bonuses and Promotions</h3>
                    <p>All bonuses are subject to specific terms, including turnover (wagering) requirements. We reserve the right to cancel bonuses if we suspect "bonus hunting" or other forms of abuse.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">5.4 Currency</h3>
                    <p>The primary currency of the platform is the Philippine Peso (₱). All transactions and balances are tracked in this currency unless otherwise specified.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">6. Responsible Gaming</h2>
            <p>ACEBET Alliance is committed to promoting responsible gaming. We provide tools for self-exclusion and deposit limits. Gaming should be viewed as entertainment, not a source of income. If you feel you are losing control, please contact our support team or a professional help organization.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">7. Intellectual Property</h2>
            <p>All content on the ACEBET Alliance platform, including logos, graphics, text, and software, is the property of ACEBET Alliance or its licensors and is protected by intellectual property laws. You are granted a limited, non-exclusive license to access the platform for personal use.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">8. Privacy and Data Protection</h2>
            <p>Your use of the platform is also governed by our Privacy Policy. We collect and process your data to provide and improve our services, ensuring compliance with data protection regulations.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">9. Disclaimer of Warranties</h2>
            <p>The services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the platform will be error-free or uninterrupted.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">10. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, ACEBET Alliance shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of the platform, including loss of funds due to connectivity issues or unauthorized account access.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">11. Account Suspension and Termination</h2>
            <p>We reserve the right to suspend or terminate your account at any time, with or without notice, for violations of these terms, fraudulent activity, or at the request of law enforcement. Upon termination, any remaining balance may be forfeited if the termination is due to a breach of these terms.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">12. Dispute Resolution</h2>
            <p>Any disputes arising from these terms or your use of the platform should first be directed to our customer support team. If a resolution cannot be reached, the dispute shall be governed by the laws of the jurisdiction in which ACEBET Alliance is registered.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">13. Modifications to Terms</h2>
            <p>We may update these Terms & Conditions from time to time. Your continued use of the platform after such changes constitutes your acceptance of the new terms. We recommend reviewing this page periodically.</p>
        </section>

        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-black mb-2">Questions About These Terms?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">If you have any questions or concerns regarding our Terms of Service, please don't hesitate to contact us.</p>
            <Link to="/legal/contact-support" className="inline-flex items-center gap-2 text-blue-600 font-black hover:underline">
                Contact Support <ArrowRight size={16} />
            </Link>
        </div>
    </LegalLayout>
);

export default TermsConditions;

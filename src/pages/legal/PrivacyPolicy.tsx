import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { SITE_URL } from '../../constants';

const PrivacyPolicy: React.FC = () => (
    <LegalLayout 
        title="Privacy Policy" 
        icon={<ShieldCheck size={32} />}
    >
        <Helmet>
            <title>Privacy Policy | ACEBET Alliance - Data Protection & Player Security</title>
            <meta name="description" content="Read the Privacy Policy of ACEBET Alliance. Learn how we protect your data, ensure privacy, and maintain a safe, fair, and responsible gaming environment for all players in the Philippines." />
            <link rel="canonical" href={`${SITE_URL}/legal/privacy-policy`} />
        </Helmet>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">1. Introduction</h2>
            <p>At ACEBET Alliance, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our gaming platform. By using our services, you consent to the data practices described in this policy.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">2.1 Personal Information</h3>
                    <p>When you register, we collect information that can identify you, such as your full name, email address, phone number, and date of birth. We also collect payment details (e.g., GCash or bank account numbers) to process transactions.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">2.2 Automatically Collected Information</h3>
                    <p>We automatically collect certain technical data when you access our platform, including your IP address, browser type, device information, operating system, and usage patterns (e.g., pages visited, time spent on the site).</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">2.3 Gaming Activity Information</h3>
                    <p>To provide a fair and secure gaming environment, we record your betting history, game results, transaction records, and interactions with our support team.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Provision:</strong> To create and manage your account, process deposits and withdrawals, and provide customer support.</li>
                <li><strong>Security & Fraud Prevention:</strong> To monitor for suspicious activity, prevent money laundering, and ensure compliance with our Terms & Conditions.</li>
                <li><strong>Platform Improvement:</strong> To analyze usage trends and improve the functionality and user experience of our platform.</li>
                <li><strong>Marketing:</strong> With your consent, we may send you promotional offers, newsletters, and updates about new features or games.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and requests from law enforcement or regulatory authorities.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">4. Information Sharing</h2>
            <p>We do not sell your personal information to third parties. However, we may share your data with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us with payment processing, data analysis, email delivery, and hosting services.</li>
                <li><strong>Legal Requirements:</strong> If required by law, we may disclose your information to comply with legal processes or protect the rights, property, or safety of ACEBET Alliance and our users.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business assets.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">5. Data Security</h2>
            <p>We implement industry-standard security measures, including SSL encryption and firewalls, to protect your data from unauthorized access, alteration, or disclosure. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">6. Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide you with services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">7. Your Rights</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-bold mb-2">7.1 Access and Correction</h3>
                    <p>You have the right to access the personal information we hold about you and request corrections if any data is inaccurate or incomplete.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">7.2 Data Deletion</h3>
                    <p>You may request the deletion of your account and associated personal data, subject to our legal and regulatory retention requirements.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">7.3 Marketing Opt-Out</h3>
                    <p>You can opt-out of receiving promotional communications from us at any time by following the unsubscribe instructions in our emails or contacting support.</p>
                </div>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">8. Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to track activity on our platform and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">9. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will take steps to delete that information immediately.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-black mb-4">10. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
        </section>

        <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-black mb-2">Privacy Concerns?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">If you have any questions about how we handle your data or wish to exercise your rights, please contact our Data Protection Officer.</p>
            <Link to="/legal/contact-support" className="inline-flex items-center gap-2 text-blue-600 font-black hover:underline">
                Contact Support <ArrowRight size={16} />
            </Link>
        </div>
    </LegalLayout>
);

export default PrivacyPolicy;

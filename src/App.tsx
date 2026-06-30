import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Home } from './pages/Home';

// Lazy Load Pages
const Promotions = lazy(() => import('./pages/Promotions').then(m => ({ default: m.Promotions })));
const Brands = lazy(() => import('./pages/Brands').then(m => ({ default: m.Brands })));
const News = lazy(() => import('./pages/News').then(m => ({ default: m.News })));
const Payments = lazy(() => import('./pages/Payments').then(m => ({ default: m.Payments })));
const Affiliate = lazy(() => import('./pages/Affiliate').then(m => ({ default: m.Affiliate })));
const HotGames = lazy(() => import('./pages/HotGames').then(m => ({ default: m.HotGames })));
const Faqs = lazy(() => import('./pages/Faqs').then(m => ({ default: m.Faqs })));
const Articles = lazy(() => import('./pages/Articles').then(m => ({ default: m.Articles })));
const BrandDetail = lazy(() => import('./pages/BrandDetail').then(m => ({ default: m.BrandDetail })));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail').then(m => ({ default: m.ArticleDetail })));
const CloudflareApp = lazy(() => import('./pages/CloudflareApp').then(m => ({ default: m.CloudflareApp })));

const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const ResponsibleGaming = lazy(() => import('./pages/legal/ResponsibleGaming'));
const ContactSupport = lazy(() => import('./pages/legal/ContactSupport'));

const Betso88 = lazy(() => import('./pages/brands/Betso88').then(m => ({ default: m.Betso88 })));
const Milyon88 = lazy(() => import('./pages/brands/Milyon88').then(m => ({ default: m.Milyon88 })));
const Jilino1 = lazy(() => import('./pages/brands/Jilino1').then(m => ({ default: m.Jilino1 })));
const Swerte99 = lazy(() => import('./pages/brands/Swerte99').then(m => ({ default: m.Swerte99 })));
const Ssbet77 = lazy(() => import('./pages/brands/Ssbet77').then(m => ({ default: m.Ssbet77 })));
const SevenSpin = lazy(() => import('./pages/brands/7Spin').then(m => ({ default: m.SevenSpin }))); 
const Spinoy88 = lazy(() => import('./pages/brands/Spinoy88').then(m => ({ default: m.Spinoy88 })));

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { FloatingBonus } from './components/FloatingBonus';
import { ScrollToTop } from './components/ScrollToTop';

// utils
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PageLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-[80vh]">
    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
  </div>
);

export default function App() {
  const [isDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
          <Navbar />
          
          <main className="flex-grow flex flex-col">
            <Suspense fallback={<PageLoader />}>
              <div className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/promotions" element={<Promotions />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/news" element={<News />} />
                <Route path="/services/payments" element={<Payments />} />
                <Route path="/services/affiliate" element={<Affiliate />} />
                <Route path="/hot-game" element={<HotGames />} />
                <Route path="/services/faqs" element={<Faqs />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetail />} />
                <Route path="/cloudflare-app" element={<CloudflareApp />} />

                {/* Brand Routes */}
                <Route path="/brands/betso88" element={<Betso88 />} />
                <Route path="/brands/milyon88" element={<Milyon88 />} />
                <Route path="/brands/jilino1" element={<Jilino1 />} />
                <Route path="/brands/swerte99" element={<Swerte99 />} />
                <Route path="/brands/ssbet77" element={<Ssbet77 />} />
                <Route path="/brands/7spin" element={<SevenSpin />} />
                <Route path="/brands/spinoy88" element={<Spinoy88 />} />

                <Route path="/brands/:id" element={<BrandDetail />} />

                {/* Legal */}
                <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/legal/terms-conditions" element={<TermsConditions />} />
                <Route path="/legal/responsible-gaming" element={<ResponsibleGaming />} />
                <Route path="/legal/contact-support" element={<ContactSupport />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              </div>
              <Footer />
            </Suspense>
          </main>


          <FloatingControls />
          <FloatingBonus />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
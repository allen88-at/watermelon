import React from 'react';
import { 
  Trophy, Users, Percent, Clock, 
  ShieldCheck, CheckCircle, Landmark, 
  Smartphone, Zap, Shield, CreditCard, 
  Handshake, Bitcoin, Mail, Twitter, Instagram, Send,
  AlertCircle, Gamepad2, TrendingUp, Coins, Wallet, Lock, Star, Info,
  Check, ShieldAlert, HelpCircle, BookOpen, Search, Globe, Cpu, Heart, AlertTriangle, Video, Monitor
} from 'lucide-react';

export const SITE_URL = 'https://www.acebetalliance.com';

export const NAV_STRUCTURE = [
    { name: 'Home', id: 'home', type: 'link', path: '/' },
    { name: 'Promotions', id: 'promotions', type: 'anchor', path: '/#promotions' },
    { 
        name: 'Brands', 
        type: 'dropdown', 
        items: [
            { name: 'BETSO88', id: 'brand-betso88', type: 'link', path: '/brands/betso88' },
            { name: 'MILYON88', id: 'brand-milyon88', type: 'link', path: '/brands/milyon88' },
            { name: 'JILINO1', id: 'brand-jilino1', type: 'link', path: '/brands/jilino1' },
            { name: 'SWERTE99', id: 'brand-swerte99', type: 'link', path: '/brands/swerte99' },
            { name: 'SSBET77', id: 'brand-ssbet77', type: 'link', path: '/brands/ssbet77' },
            { name: '7SPIN', id: 'brand-7spin', type: 'link', path: '/brands/7spin' },
            { name: 'SPINOY88', id: 'brand-spinoy88', type: 'link', path: '/brands/spinoy88' },
        ]
    },
    { name: 'News', id: 'news', type: 'anchor', path: '/#news' },
    { 
        name: 'Services', 
        type: 'dropdown', 
        items: [
            { name: '🏛️ Payments', id: 'payments', type: 'link', path: '/services/payments' },
            { name: '🤝 Affiliate', id: 'affiliate', type: 'link', path: '/services/affiliate' }
        ]
    },
    { name: 'Hot Game', id: 'rtp', type: 'link', isHot: true, path: '/hot-game' },
    { name: '🔍 FAQs', id: 'faq', type: 'anchor', path: '/#faq' },
    { name: '📑 Articles', id: 'articles', type: 'link', path: '/articles' },
    { name: '1.1.1.1 APP', id: 'cloudflare-app', type: 'link', path: '/cloudflare-app' }
];

export const STATS = [
    { label: '24H Payouts (₱)', value: '8,000,000+', icon: Trophy },
    { label: 'Active Winners', value: '392,950', icon: Users },
    { label: 'Average RTP', value: '97.00%', icon: Percent },
    { label: 'Fast Response', value: '24/7', icon: Clock },
];


export const BANNERS = [
  { title: 'Total Deposit 200 Free 98', desc: 'Mon to Thur Depo 200 get free 98 bonuses', image: 'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.760_3_1.webp?version=4', link: 'https://www.milyon88.to/promotion/760?pid=ACESEO', btnText: 'Go to MILYON88' },
  { title: 'Best no Turnover Event!', desc: 'No turnover needed', image: 'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.256_3_1.webp?version=1', link: 'https://www.jilino1.casino/promotion/256?pid=ACESEO', btnText: 'Visit JILINO1' },
  { title: 'Rapid Riches Buy 100 Free 1,000', desc: 'Get free 1,000 bonus at Sat & Sun', image: 'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/r7.webp', link: 'https://ssbet77.com.ph/promotion_detail/proidzu1735233586440?pid=64', btnText: 'Visit SSBET77' },
  { title: 'Free Check In Cool Event!', desc: 'Free check in get free 365 bonus.', image: '/images/brands/7spin/free check in 365', link: 'https://7spin.ph/promotion/84?P=ACESEO', btnText: 'Go to 7SPIN' },
  { title: 'Minor Gift! Buy 30 Free 20', desc: 'Join Event and get Max Free 500.', image: 'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.113_3_1.webp?version=12', link: 'https://www.betso88.asia/promotion/113?pid=ACESEO', btnText: 'Visit BETSO88' },
  { title: 'Weekdays Turn 49 to 499', desc: 'Mon to Thur limited time promotion!', image: 'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.251_3_1.webp?version=5', link: 'https://www.swerte99.com.co/promotion/251?pid=ACESEO', btnText: 'Visit SWERTE99' }
];

export const GAMES = [
    { name: 'Super Ace', provider: 'JILI Gaming', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', badge: '🔥 HOT', rtp: '97.00%', maxWin: '1500x', popular: true, url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Wild Bounty Showdown', provider: 'PG Soft Gaming', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32620.3.webp?version=8', badge: '🔥 HOT', rtp: '96.70%', maxWin: '5000x', popular: true, url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sugar Rush 1000', provider: 'PP Gaming', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34407.3.webp?version=6', badge: '🔥 HOT', rtp: '97.50%', maxWin: '25000x', popular: true, url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Gates of Olympus 1000', provider: 'PP Gaming', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.33789.3.webp?version=20', badge: '💥 NEW', rtp: '97.20%', maxWin: '15000x', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sugar Bang Bang 2', provider: 'FC Gaming', image: 'https://download.ocms.cloud/v2/common/FCV2/PlatformGameList.38896.3.webp?version=3', badge: '💥 NEW', rtp: '96.50%', maxWin: '2000x', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Open Sesame Mega', provider: 'JDB Gaming', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.40786.3.webp?version=0', badge: '💥 NEW', rtp: '97.10%', maxWin: '3000x', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Golden Mahjong', provider: 'VP Gaming', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.20701.3.webp?version=23', badge: '💥 NEW', rtp: '97.00%', maxWin: '1200x', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Crazy Time', provider: 'EVO Gaming', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.12230.3.webp?version=35', badge: '💥 NEW', rtp: '96.10%', maxWin: '50000x', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Fortune Gems 2', provider: 'JILI Gaming', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.32843.3.webp?version=19', badge: '🔥 HOT', rtp: '97.80%', maxWin: '1000x', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Mahjong Ways 2', provider: 'PG Soft Gaming', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32616.3.webp?version=11', badge: '🔥 HOT', rtp: '97.40%', maxWin: '2500x', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Boxing King', provider: 'JILI Gaming', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', badge: '🔥 HOT', rtp: '96.90%', maxWin: '2000x', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Treasures of Aztec', provider: 'PG Soft Gaming', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32615.3.webp?version=8', badge: '🔥 HOT', rtp: '96.90%', maxWin: '3000x', url: 'https://7spin.ph/?p=ACESEO' }
];

export const RTP_GAMES = [
    // JILI
    { name: 'Super Ace', provider: 'JILI Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Golden Empire', provider: 'JILI Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7444.3.webp?version=20', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Fortune Gems', provider: 'JILI Gaming', rtp: '97.2%', image: '	https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7448.3.webp?version=13', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Super Ace Deluxe', provider: 'JILI Gaming', rtp: '97.5%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.34836.3.webp?version=16', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Boxing King', provider: 'JILI Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Alibaba', provider: 'JILI Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7450.3.webp?version=22', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Fortune Gems 2', provider: 'JILI Gaming', rtp: '97.8%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.32843.3.webp?version=19', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Mega Ace', provider: 'JILI Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7459.3.webp?version=19', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Crazy777', provider: 'JILI Gaming', rtp: '96.4%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7476.3.webp?version=18', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Party Night', provider: 'JILI Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7505.3.webp?version=13', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Fortune Gems 3', provider: 'JILI Gaming', rtp: '98.2%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.34559.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Charge Buffalo', provider: 'JILI Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7487.3.webp?version=23', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Money Coming', provider: 'JILI Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7491.3.webp?version=24', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Wild Ace', provider: 'JILI Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.32751.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Pharaoh Treasure', provider: 'JILI Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7511.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Bubble Beauty', provider: 'JILI Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7473.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'Pirate Queen', provider: 'JILI Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.32450.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },
    { name: 'JILI Caishen', provider: 'JILI Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7997.3.webp?version=17', url: 'https://www.jilino1.casino/?pid=ACESEO' },

    // PG Soft
    { name: 'Wild Bounty Showdown', provider: 'PG Soft Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32620.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Treasures of Aztec', provider: 'PG Soft Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32615.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Mahjong Ways', provider: 'PG Soft Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7586.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Mahjong Ways 2', provider: 'PG Soft Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32616.3.webp?version=11', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Lucky Neko', provider: 'PG Soft Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32614.3.webp?version=9', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Wild Bandito', provider: 'PG Soft Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7522.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Pinata Wins', provider: 'PG Soft Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.34489.3.webp?version=10', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Wild Ape', provider: 'PG Soft Gaming', rtp: '96.5%', image: '	https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.34436.3.webp?version=9', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Jurassic Kingdom', provider: 'PG Soft Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7529.3.webp?version=12', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Asgardian Rising', provider: 'PG Soft Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32296.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Cocktail Nights', provider: 'PG Soft Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7536.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Midas Fortune', provider: 'PG Soft Gaming', rtp: '96.8%', image: '	https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32392.3.webp?version=14', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Speed Winner', provider: 'PG Soft Gaming', rtp: '96.7%', image: '	https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32627.3.webp?version=8', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Ways of the Qilin', provider: 'PG Soft Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7524.3.webp?version=18', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Caishen Wins', provider: 'PG Soft Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7592.3.webp?version=9', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Crypto Gold', provider: 'PG Soft Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.7521.3.webp?version=15', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Yakuza Honor', provider: 'PG Soft Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.35044.3.webp?version=5', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Queen of Bounty', provider: 'PG Soft Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32617.3.webp?version=15', url: 'https://7spin.ph/?p=ACESEO' },
    
    // FC Gaming
    { name: 'Sugar Bang Bang 2', provider: 'FC Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/FCV2/PlatformGameList.38896.3.webp?version=3', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Night Market', provider: 'FC Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8036.3.webp?version=29', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Chinese New Year 2', provider: 'FC Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8053.3.webp?version=28', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Chinese New Year', provider: 'FC Gaming', rtp: '96.4%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8038.3.webp?version=28', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Golden Panther', provider: 'FC Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8034.3.webp?version=29', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Cowboys', provider: 'FC Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8046.3.webp?version=28', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Magic Beans', provider: 'FC Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8049.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Fortune Koi', provider: 'FC Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8040.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Golden Genie', provider: 'FC Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.35017.3.webp?version=19', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Sugar Bang Bang', provider: 'FC Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.18273.3.webp?version=19', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Grand Blue', provider: 'FC Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8054.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Luxury Golden Panther', provider: 'FC Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8047.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Lucky Fortunes', provider: 'FC Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.18272.3.webp?version=19', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Gold Rush', provider: 'FC Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8050.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Treasure Raiders', provider: 'FC Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8055.3.webp?version=28', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Crazy Buffalo', provider: 'FC Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8056.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Night Market 2', provider: 'FC Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.33213.3.webp?version=19', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Zeus', provider: 'FC Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.18274.3.webp?version=18', url: 'https://www.betso88.asia/?pid=ACESEO' },

    // Pragmatic Play (PP)
    { name: 'Sugar Rush 1000', provider: 'PP Gaming', rtp: '97.5%', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34407.3.webp?version=6', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Gates of Olympus 1000', provider: 'PP Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.33789.3.webp?version=20', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sweet Bonanza 1000', provider: 'PP Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.17328.3.webp?version=37', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sugar Rush', provider: 'PP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34219.3.webp?version=19', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Starlight Princess 1000', provider: 'PP Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34218.3.webp?version=19', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sweet Bonanza', provider: 'PP Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.2083.3.webp?version=20', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Mahjong Wins', provider: 'PP Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.15707.3.webp?version=16', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Mahjong Wins Bonus', provider: 'PP Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.33960.3.webp?version=19', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Gates of Olympus', provider: 'PP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.2093.3.webp?version=21', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Gates of Gatot Kaca 1000', provider: 'PP Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.34248.3.webp?version=17', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Fortune Ace', provider: 'PP Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.34394.3.webp?version=17', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Wisdom of Athena', provider: 'PP Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.34217.3.webp?version=20', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Starlight Princess', provider: 'PP Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.2100.3.webp?version=20', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Saiyan Mania', provider: 'PP Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.14914.3.webp?version=17', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Sugar Supreme Powernudge', provider: 'PP Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.14923.3.webp?version=16', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Candy Blitz Bombs', provider: 'PP Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.34621.3.webp?version=18', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Fire Portals', provider: 'PP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.34409.3.webp?version=17', url: 'https://7spin.ph/?p=ACESEO' },
    { name: 'Zeus vs Hades - Gods of War', provider: 'PP Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common2/PPV2/PlatformGameList.38562.3.webp?version=4', url: 'https://7spin.ph/?p=ACESEO' },

    // JDB Gaming
    { name: 'Open Sesame', provider: 'JDB Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7329.3.webp?version=29', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Open Sesame Mega', provider: 'JDB Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.40786.3.webp?version=0', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Treasure Bowl', provider: 'JDB Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7396.3.webp?version=30', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Olympian Temple', provider: 'JDB Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7332.3.webp?version=29', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Kingsman', provider: 'JDB Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7375.3.webp?version=20', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Open Sesame 2', provider: 'JDB Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7348.3.webp?version=19', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Magic Ace Wild Lock', provider: 'JDB Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.36375.3.webp?version=25', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Fruity Bonanza Combo', provider: 'JDB Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.37682.3.webp?version=13', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Trump Card', provider: 'JDB Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.33478.3.webp?version=22', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Fruity Bonanza', provider: 'JDB Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.33485.3.webp?version=24', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Lucky Dragons', provider: 'JDB Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7316.3.webp?version=20', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Four Treasures', provider: 'JDB Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7328.3.webp?version=28', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Super Niubi', provider: 'JDB Gaming', rtp: '96.4%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7391.3.webp?version=25', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Billionaire', provider: 'JDB Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7367.3.webp?version=21', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Kong', provider: 'JDB Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7409.3.webp?version=27', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Dragon Soar - Hyper Wild', provider: 'JDB Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.36376.3.webp?version=25', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'New Year', provider: 'JDB Gaming', rtp: '96.9%', image: '	https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7326.3.webp?version=23', url: 'https://www.betso88.asia/?pid=ACESEO' },
    { name: 'Piggy Bank', provider: 'JDB Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.34806.3.webp?version=22', url: 'https://www.betso88.asia/?pid=ACESEO' },

    // VP Gaming
    { name: 'Golden Mahjong', provider: 'VP Gaming', rtp: '97.0%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.20701.3.webp?version=23', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Double Ace', provider: 'VP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.35801.3.webp?version=25', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Super Crown', provider: 'VP Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.35802.3.webp?version=28', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Taichi', provider: 'VP Gaming', rtp: '97.2%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.20703.3.webp?version=22', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Awakening Aztec', provider: 'VP Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.37688.3.webp?version=8', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Dragon Kaboom', provider: 'VP Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.36273.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Gems of Ra', provider: 'VP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.37689.3.webp?version=8', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Wild Coin Plunder', provider: 'VP Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.39332.3.webp?version=8', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Penguin Smash', provider: 'VP Gaming', rtp: '96.4%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.36508.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'King Royale', provider: 'VP Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.20702.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Boom Boom Marmot', provider: 'VP Gaming', rtp: '96.6%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.35803.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Apollo', provider: 'VP Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.36271.3.webp?version=22', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'God of the Sun', provider: 'VP Gaming', rtp: '96.7%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.35808.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Double Ace Multix', provider: 'VP Gaming', rtp: '97.4%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.41160.3.webp?version=16', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Pinata Party', provider: 'VP Gaming', rtp: '96.8%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.37196.3.webp?version=24', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'The Qin Dynasty', provider: 'VP Gaming', rtp: '96.5%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.37197.3.webp?version=26', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Pyramid', provider: 'VP Gaming', rtp: '96.9%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.36509.3.webp?version=21', url: 'https://www.milyon88.to/?pid=ACESEO' },
    { name: 'Lucky Daruma 2', provider: 'VP Gaming', rtp: '97.1%', image: 'https://download.ocms.cloud/v2/common2/VP/PlatformGameList.38984.3.webp?version=5', url: 'https://www.milyon88.to/?pid=ACESEO' },

    // Evolution Gaming (EVO)
    { name: 'Crazy Time', provider: 'EVO Gaming', rtp: '96.1%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.12230.3.webp?version=35', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Evo Game Show Live', provider: 'EVO Gaming', rtp: '99.0%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.31343.3.webp?version=30', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Baccarat Live', provider: 'EVO Gaming', rtp: '98.9%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.5040.3.webp?version=30', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Mega Ball', provider: 'EVO Gaming', rtp: '95.4%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.12214.3.webp?version=32', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Monopoly', provider: 'EVO Gaming', rtp: '96.2%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.5060.3.webp?version=32', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Evo Live', provider: 'EVO Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.9630_3_1.webp?version=3', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Roulette Live', provider: 'EVO Gaming', rtp: '97.3%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.5041.3.webp?version=32', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Evo Dice Live', provider: 'EVO Gaming', rtp: '96.2%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.7193.3.webp?version=30', url: 'https://www.swerte99login.com/?pid=ACESEO' },
    { name: 'Blackjack Live', provider: 'EVO Gaming', rtp: '98.5%', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.5043.3.webp?version=32', url: 'https://www.swerte99login.com/?pid=ACESEO' }
];

export const WINNERS = [
    { name: 'Jha***e23', game: 'Super Ace', amount: '145,000 ₱', time: '2 hours ago' },
    { name: 'Mar***e08', game: 'Royal Ace', amount: '121,500 ₱', time: '5 hours ago' },
    { name: 'Ken***yd99', game: 'Boxing King', amount: '240,000 ₱', time: '1 day ago' },
    { name: 'Br******X24', game: 'Super Ace', amount: '209,400 ₱', time: '1 day ago' },
    { name: 'Mi******33', game: 'Sugar Crash', amount: '56,000 ₱', time: 'Just now' },
    { name: 'Rhe******a09', game: 'Fortune Coins 2', amount: '255,200 ₱', time: '10 mins ago' },
    { name: 'Leo******14', game: 'Golden Mahjong', amount: '114,000 ₱', time: '15 mins ago' },
    { name: 'Jas******H88', game: 'Tai Chi', amount: '82,120 ₱', time: '20 mins ago' },
];

export const PLATFORMS = [
    { 
        id: 'brand-betso88', 
        name: 'BETSO88', 
        type: 'Loyalty', 
        desc: 'Enter the Philippines’ top online hub with fast and secure access.', 
        logo: '/images/logo/BS88_LOGO.webp', 
        image: '/images/partner brands/brand betso88.webp',
        badgeColor: 'text-amber-400 bg-amber-900/30 border-amber-800', 
        url: 'https://www.betso88.asia/?pid=ACESEO', 
        appUrl: 'https://betso88.apk-install.com/?pid=ACESEO&homeurl=https://www.betso88.asia',
        theme: {
            primary: '#60a5fa',
            secondary: '#3b82f6',
            background: '#000000',
            card: '#1a1a1a',
            text: '#ffffff',
            accent: '#fbbf24'
        }
    },
    { 
        id: 'brand-milyon88', 
        name: 'MILYON88', 
        type: 'Loyalty', 
        desc: 'Stable private lane for invited members, ensuring verified access and support.', 
        logo: '/images/logo/MILYON88_LOGO.webp', 
        image: '/images/partner brands/brand milyon88.webp',
        badgeColor: 'text-blue-400 bg-blue-900/30 border-blue-800', 
        url: 'https://www.milyon88.to/?pid=ACESEO', 
        appUrl: 'https://milyon88.apk-install.com/?pid=ACESEO&homeurl=https://www.milyon88.one',
        theme: {
            primary: '#1e3a8a',
            secondary: '#1e40af',
            background: '#2d3a2d',
            card: '#3e4e3e',
            text: '#fef3c7',
            accent: '#93c5fd'
        }
    },
    { 
        id: 'brand-jilino1', 
        name: 'JILINO1', 
        type: 'Promotion', 
        desc: 'High-tier VIP window with priority access and status monitoring for elite members.', 
        logo: '/images/logo/JILINO1_LOGO.webp', 
        image: '/images/partner brands/brand jilino1.webp',
        badgeColor: 'text-amber-400 bg-amber-900/30 border-amber-800', 
        url: 'https://www.jilino1.casino/?pid=ACESEO', 
        appUrl: 'https://www.jilino1.bet/download?version=6.35.4-fc',
        theme: {
            primary: '#fbbf24',
            secondary: '#f59e0b',
            background: '#000000',
            card: '#1a1a1a',
            text: '#ffffff',
            accent: '#fbbf24'
        }
    },
    { 
        id: 'brand-swerte99', 
        name: 'SWERTE99', 
        type: 'Exclusive', 
        desc: 'Support mesh with gateway/route backup and fast escalation supporting SWERTE99.', 
        logo: '/images/logo/SWERTE99_LOGO.webp',
        image: '/images/partner brands/brand swerte99.webp', 
        badgeColor: 'text-fuchsia-400 bg-fuchsia-900/30 border-fuchsia-800', 
        url: 'https://www.swerte99login.com/?pid=ACESEO', 
        appUrl: 'https://www.swerte99.net.ph/download?version=6.35.4-fc',
        theme: {
            primary: '#d946ef',
            secondary: '#a21caf',
            background: '#000000',
            card: '#1a1a1a',
            text: '#fce7f3',
            accent: '#7e22ce'
        }
    },
    { 
        id: 'brand-ssbet77', 
        name: 'SSBET77', 
        type: 'Limited Time', 
        desc: 'Fast-response support mesh with gateway/route backup, ensuring smooth operation for SSBET77.', 
        logo: '/images/logo/SSBET77_LOGO.webp', 
        image: '/images/partner brands/brand ssbet77.webp',
        badgeColor: 'text-cyan-400 bg-cyan-900/30 border-cyan-800', 
        url: 'https://ssbet77.com.ph/?openExternalBrowser=1&pid=64', 
        appUrl: 'https://appdownload.nctmedia.online/?site=ssbet77&lang=en_US&type=1&pid=64',
        theme: {
            primary: '#06b6d4',
            secondary: '#0891b2',
            background: '#2e1065',
            card: '#4c1d95',
            text: '#fdf2f8',
            accent: '#f472b6'
        }
    },
    { 
        id: 'brand-7spin', 
        name: '7SPIN', 
        type: 'Promotion', 
        desc: 'Access 7SPIN, the Philippines’ premier online gaming hub, fast and secure.', 
        logo: '/images/logo/7SPIN_LOGO.webp', 
        image: '/images/partner brands/brand 7spin.webp',
        badgeColor: 'text-red-400 bg-red-900/30 border-red-800', 
        url: 'https://7spin.ph/?p=ACESEO', 
        appUrl: 'https://7spin.ph/download',
        theme: {
            primary: '#ef4444',
            secondary: '#dc2626',
            background: '#ffffff',
            card: '#f8fafc',
            text: '#0f172a',
            accent: '#fbbf24'
        }
    },
    { 
        id: 'brand-spinoy88', 
        name: 'SPINOY88', 
        type: 'Exclusive', 
        desc: 'Easy-to-achieve VIP tiers with high rebate bonuses.', 
        logo: '/images/logo/SP88_LOGO', 
        image: '/images/partner brands/brand spinoy88.webp',
        badgeColor: 'text-red-400 bg-red-900/30 border-red-800', 
        url: 'https://spinoy88.net/?p=ACESEO', 
        appUrl: 'https://spinoy88.net/download',
        theme: {
            primary: '#ef4444',
            secondary: '#dc2626',
            background: '#000000',
            card: '#1a1a1a',
            text: '#ffffff',
            accent: '#fbbf24'
        }
    }
];

export const BRAND_REVIEWS: Record<string, any> = {
    'brand-betso88': {
        name: 'BETSO88',
        banner: '/images/brands/betso88/hero betso.webp',
        reviewTitle: 'BETSO88 Review: #1 Trusted PH Online Casino | ACEBET',
        reviewContent: 'BETSO88 is the top-rated PAGCOR-licensed casino in the PH. Enjoy instant GCash withdrawals, JILI slots, and exclusive bonuses. Play safely today!',
        whyPopular: 'BETSO88 is popular in the Philippines because it perfectly aligns with the local gaming culture and financial infrastructure. One of the primary reasons for its massive success is its seamless integration with GCash and Maya, the two most used e-wallets in the country. This allows players to deposit and withdraw their winnings almost instantly, eliminating the long waiting times often associated with traditional banking. Furthermore, BETSO88 offers a vast library of games from top-tier providers like JILI, PG Soft, and Evolution Gaming, which are household names among Filipino slot and live casino enthusiasts. The platform is also fully licensed by PAGCOR, providing a layer of trust and security that is paramount for local players. Their 24/7 customer support, available in both English and Tagalog, ensures that any issues are resolved quickly, making players feel valued and supported. Additionally, the frequent promotions, such as the "Free Register 100 Bonus" and daily rebates, provide significant value, keeping the community engaged and loyal. The mobile-first design of the website and the availability of a dedicated Android app mean that players can enjoy their favorite games on the go, whether they are commuting or relaxing at home. This combination of convenience, security, variety, and local focus is what makes BETSO88 the #1 choice for online casino gaming in the Philippines.',
        altDomains: [
            { name: 'BETSO88 Backup Link 1', url: 'https://www.betso88.co.in/?pid=ACESEO' },
            { name: 'BETSO88 Backup Link 2', url: 'https://www.betso88win.co/?pid=ACESEO' }
        ],
        ratings: { trust: 100, games: 95, support: 96, payments: 100 },
        popularPromos: [
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.344_3_1.webp?version=6',
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.70_3_1.webp?version=15',
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.154_3_1.webp?version=22',
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.154_3_1.webp?version=22',
        ],
        promoContent: 'BETSO88 is renowned for its generous and diverse promotional offerings that cater to both new and existing players. The "Free Register 100 Bonus" is a standout, allowing new members to explore the platform without any initial investment. For those ready to deposit, the "First Deposit 300% Bonus" provides a massive boost to their starting capital, significantly increasing their chances of hitting a big win. Regular players can benefit from the "Daily Rebate" program, which returns a percentage of their total turnover every single day, regardless of whether they won or lost. This ensures that even on unlucky days, players get something back. Special events, such as the "Xmas Raffle Night" or "Lucky Draw" competitions, offer high-value prizes like the latest iPhones, luxury gadgets, and even cash rewards. It is important for players to regularly check the "Promotions" tab on the BETSO88 website to stay updated on the latest offers. Each promotion comes with its own set of terms and conditions, such as turnover requirements, so we always recommend reading them carefully to maximize your benefits. The variety of bonuses, from slot-specific rewards to live casino cashback, ensures that every type of player finds something that suits their gaming style. This commitment to rewarding its community is a key pillar of BETSO88’s reputation as a top-tier online casino.',
        games: {
            jili: [
                { name: 'Super Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', desc: 'The most popular slot with high RTP and unique card-flipping mechanics.' },
                { name: 'Fortune Gems', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7448.3.webp?version=13', desc: 'A classic 3x3 slot with massive multipliers and fast-paced action.' },
                { name: 'Boxing King', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', desc: 'Experience the thrill of the ring with free spins and sticky wilds.' }
            ],
            fc: [
                { name: 'Night Market', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8036.3.webp?version=29', desc: 'Vibrant visuals and multiple ways to win in this local-themed slot.' },
                { name: 'Sugar Bang Bang 2', image: 'https://download.ocms.cloud/v2/common/FCV2/PlatformGameList.38896.3.webp?version=3', desc: 'Classic Chinese luck theme with high-value symbols and big jackpots.' },
                { name: 'Zeus', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.18274.3.webp?version=18', desc: 'An innovative space-themed slot with unique bonus rounds.' }
            ],
            pg: [
                { name: 'Mahjong Ways 2', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32616.3.webp?version=11', desc: 'The legendary sequel with even more ways to win and stunning graphics.' },
                { name: 'Wild Bounty Showdown', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32620.3.webp?version=8', desc: 'Western-themed slot with high volatility and massive win potential.' },
                { name: 'Lucky Neko', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32614.3.webp?version=9', desc: 'A charming Japanese-themed slot with expanding symbols and multipliers.' }
            ]
        },
        gameContent: 'The game selection at BETSO88 is nothing short of spectacular, featuring thousands of titles from the world’s leading developers. For slot enthusiasts, the partnership with JILI Gaming brings iconic titles like "Super Ace" and "Fortune Gems," known for their high RTP and engaging mechanics. PG Soft titles like "Wild Bounty Showdown" offer stunning graphics and innovative features that keep players coming back for more. If you prefer the thrill of a real casino, the Live Casino section, powered by Evolution Gaming and SA Gaming, provides high-definition streaming of Baccarat, Roulette, and Blackjack with professional dealers. For those looking for something uniquely Filipino, BETSO88 also features Sabong (cockfighting) betting and local card games, ensuring a culturally resonant experience. The platform uses advanced RNG (Random Number Generator) technology to ensure that every spin and every deal is completely fair and unbiased. Whether you are a high roller looking for high-stakes tables or a casual player enjoying 1-peso slots, BETSO88 caters to all levels of experience and budget. The games are optimized for both desktop and mobile play, ensuring a lag-free experience regardless of your device. With new games added every week, there is always something fresh and exciting to explore at BETSO88.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-5 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱100', max: '₱100,000', speed: '1-5 Mins' }
        ],
        registrationSteps: [
            'Click the "PLAY NOW" button on this page to visit the official BETSO88 site.',
            'Click on the "Register" or "Sign Up" button at the top right corner.',
            'Fill in your mobile number and create a secure password.',
            'Verify your mobile number via the OTP sent to your phone.',
            'Complete your profile and you are ready to deposit and play!'
        ],
        appGuide: 'To download the BETSO88 app, visit the official site and click on the "App Download" icon. For Android users, download the APK file and enable "Unknown Sources" in your settings. iOS users can follow the on-screen instructions to add the web app to their home screen.',
        appGuideContent: 'Downloading the BETSO88 mobile app is the best way to ensure you never miss out on the action. Why download the BETSO88 app? Firstly, it provides a much more stable and faster connection compared to using a mobile browser, which is crucial for live casino and fast-paced slots. The app is specifically optimized for Android and iOS devices, ensuring that graphics are crisp and animations are smooth. Furthermore, app users receive exclusive push notifications for limited-time promotions and "Red Envelope" drops that are not always available on the web version. Security is also enhanced with biometric login features like fingerprint and Face ID, keeping your account safe from unauthorized access. For players in the Philippines, the BETSO88 app download is a must-have for a truly seamless "Gaming on the Go" experience. Whether you are looking for the latest JILI slots or want to place a quick bet on a live match, the app puts the entire casino right in the palm of your hand. Ensure you download only from the official BETSO88 website to guarantee a safe and secure installation.',
        appGuideImage: '/images/brands/betso88/mobile betso88.webp',
        faqs: [
            { q: 'Is BETSO88 legal in the Philippines?', a: 'Yes, BETSO88 operates under a PAGCOR license and is fully compliant with local regulations.' },
            { q: 'What is the minimum withdrawal amount?', a: 'The minimum withdrawal is 100 ₱, and it is usually processed within 15 minutes.' },
            { q: 'Can I play for free?', a: 'Yes, many slot games offer a "Demo" mode where you can play without using real money.' },
            { q: 'How to register on BETSO88?', a: 'Registration is simple: visit the official site, click "Register", enter your PH mobile number, set a password, and verify via SMS OTP. Once verified, you can complete your profile and start playing.' },
            { q: 'Why Philippines players choose BETSO88?', a: 'Filipino players choose BETSO88 for its reliability, PAGCOR licensing, and instant GCash/Maya integration. The platform offers games that Pinoys love, like JILI slots and Sabong, combined with 24/7 Tagalog-speaking support.' }
        ],
        promotionBanners: [
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.1328_3_1.webp?version=0',
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.1290_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/bs8/PromotionInfoLanguage.276_3_1.webp?version=4'
        ],
        officialSiteLink: 'https://www.betso88.asia/?pid=ACESEO',
        pros: ['Free Register 100 Bonus', 'Instant Withdrawals', '24/7 VIP Support', 'Massive Game Library', 'Lower Entry Cost', 'Fast & Secure Payments', 'Mobile-Friendly Experience'],
        cons: ['App requires manual download', 'High traffic can slow support', 'Lack of Real Casino Atmosphere', 'Limited Human Interaction', 'The promotion has turnover requirements and withdrawal limits'],
        url: 'https://www.betso88.asia/?pid=ACESEO'
    },
    'brand-milyon88': {
        name: 'MILYON88',
        banner: '/images/brands/milyon88/hero milyon88.webp',
        reviewTitle: 'MILYON88 Review: Premium VIP Gaming & Rewards | ACEBET',
        reviewContent: 'MILYON88 offers a premium casino experience with high-roller VIP rewards, Evolution live tables, and fast GCash payouts. Join the elite PH players!',
        whyPopular: 'MILYON88 has gained immense popularity in the Philippines by focusing on what local players value most: trust, variety, and convenience. As a PAGCOR-licensed platform, it provides a safe and regulated environment, which is a top priority for Filipino gamers. The brand is particularly famous for its extensive collection of JILI and PG Soft slots, which are optimized for mobile play and offer high return-to-player (RTP) percentages. Another key factor is the seamless integration with local payment systems like GCash and Maya, enabling near-instant deposits and withdrawals. MILYON88 also understands the importance of community, frequently hosting tournaments and social media giveaways that keep players engaged. Their customer support is top-notch, offering 24/7 assistance in both English and Tagalog. The platform’s user-friendly interface, combined with its generous "Free 100 Bonus" for new registrants, makes it incredibly accessible to everyone, from beginners to seasoned pros. By consistently delivering a high-quality, localized experience, MILYON88 has secured its spot as one of the most beloved online casinos in the country.',
        altDomains: [
            { name: 'MILYON88 Backup Link 1', url: 'https://www.milyon88.info/?pid=ACESEO' },
            { name: 'MILYON88 Backup Link 2', url: 'https://www.milyon88.pro/?pid=ACESEO' }
        ],
        ratings: { trust: 99, games: 98, support: 96, payments: 100 },
        popularPromos: [
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.196_3_1.webp?version=10',
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.1148_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.1146_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.258_3_1.webp?version=3',
        ],
        promoContent: 'MILYON88 offers some of the most competitive promotions in the Philippine online casino market. New players are often greeted with a "Free 100 Welcome Bonus" simply for registering and verifying their accounts. This allows them to test the games and the platform without any risk. For those looking to maximize their play, the "100% First Deposit Match" effectively doubles their bankroll instantly. MILYON88 also rewards loyalty through its "Daily Turnover Rebate" program, where players earn a percentage of their total bets back every day. High rollers can benefit from the exclusive "VIP Club," which offers higher withdrawal limits, personalized account managers, and special birthday bonuses. Seasonal promotions, such as holiday-themed raffles and slot tournaments with multi-million peso prize pools, add an extra layer of excitement. It is highly recommended to follow MILYON88 on their official social media channels or check the "Promotions" page daily to catch the latest limited-time offers. Each bonus is designed to enhance the player experience and provide more opportunities to win big.',
        games: {
            jili: [
                { name: 'Golden Empire', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7444.3.webp?version=20', desc: 'Explore the ancient empire with massive multipliers and free spins.' },
                { name: 'Money Coming', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7491.3.webp?version=24', desc: 'A simple yet rewarding slot with instant cash prizes and lucky draws.' },
                { name: 'Crazy 777', image: '	https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7476.3.webp?version=18', desc: 'Uncover the treasures of the cave with expanding wilds and bonus games.' }
            ],
            fc: [
                { name: 'Crazy Buffalo', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8056.3.webp?version=27', desc: 'Celebrate with big wins and festive symbols in this high-RTP slot.' },
                { name: 'Night Market 2', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.33213.3.webp?version=19', desc: 'A fairytale-themed slot with innovative cascading reels and multipliers.' },
                { name: 'Super Elements', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.33329.3.webp?version=29', desc: 'Set sail for big rewards with unique bonus rounds and free spins.' }
            ],
            evo: [
                { name: 'Crazy Time', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.12230.3.webp?version=35', desc: 'The world-famous live roulette with lucky numbers and 500x multipliers.' },
                { name: 'EVO Gaming Live', image: '	https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.9630_3_1.webp?version=3', desc: 'An immersive game show experience with four exciting bonus rounds.' },
                { name: 'EVO Dice', image: 'https://download.ocms.cloud/v2/common2/EVO/PlatformGameList.7193.3.webp?version=30', desc: 'The classic board game brought to life with a 3D bonus world.' }
            ]
        },
        gameContent: 'The gaming library at MILYON88 is curated to provide the ultimate entertainment experience. Slot lovers will find a massive selection of titles from JILI, including the ever-popular "Super Ace" and "Golden Empire." PG Soft fans can enjoy immersive titles like "Mahjong Ways 2" and "Dream of Macau," known for their stunning visuals and big win potential. For those who enjoy the classic casino atmosphere, the Live Dealer section features professional tables for Baccarat, Roulette, and Blackjack from Evolution Gaming and Sexy Baccarat. MILYON88 also caters to sports fans with a comprehensive sportsbook covering major leagues like the PBA, NBA, and international football. All games are tested for fairness and use certified RNG technology, ensuring a transparent gaming environment. The platform is optimized for seamless switching between devices, so you can start a game on your PC and finish it on your smartphone without any interruption. With hundreds of new titles added every month, MILYON88 ensures that there is always something new and exciting for every type of player.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱100,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱100,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱500,000', speed: '1-5 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-5 Mins' }
        ],
        registrationSteps: [
            'Navigate to the MILYON88 official website via our link.',
            'Select "Join Now" and provide your basic details.',
            'Ensure your mobile number is active for verification.',
            'Set up your preferred payment method (GCash recommended).',
            'Claim your welcome bonus and start your premium journey.'
        ],
        appGuide: 'MILYON88 provides a dedicated mobile application for both Android and iOS. You can find the download link in the "Mobile" section of the website. The app offers enhanced security and faster loading times for all games.',
        appGuideContent: 'The MILYON88 mobile app is designed for players who demand the best performance and convenience. Why download the MILYON88 app? It offers a more streamlined experience than the mobile browser, with faster loading times and reduced data usage. The app features a simplified navigation menu, making it easier to find your favorite games and manage your account. One of the biggest advantages is the "One-Touch Login," allowing you to access your account securely using your phone’s biometric features. App users also get exclusive access to "App-Only" bonuses and early access to new game releases. For Filipino players, having the MILYON88 app means you can enjoy a quick round of slots or check your sports bets anytime, anywhere. The app is lightweight and won’t take up much space on your device, yet it packs the full power of the MILYON88 platform. Always ensure you are downloading the official app from the MILYON88 website to protect your personal information and funds.',
        appGuideImage: '/images/brands/milyon88/mobile milyon88.webp',
        faqs: [
            { q: 'How to claim free 100 bonus?', a: 'You have to upgrade your account in to VIP2' },
            { q: 'How to apply promotion?', a: 'Vist promotion page, check the promotion which you want to join.' },
            { q: 'What are the common payment methods accepted by MILYON88 online casino?', a: 'Legal platforms typically support secure and widely used local digital payment methods and banking.' },
            { q: 'How long does it usually take to processa withdrawal at MILYON88 online casino?', a: 'Withdrawals at MILYON88 Casino usually take between 1 to 10 minutes to process, depending on the payment method, transaction volume, and successful account verification.' },
            { q: 'How to use Milyon88 Vouchers?', a: 'When you get a code please visit Member Center, and click Promotion List, then access the page of Voucher Code to enter the code, then good luck!.' }
        ],
        promotionBanners: [
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.1148_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.1146_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/my8/PromotionInfoLanguage.258_3_1.webp?version=3'
        ],
        officialSiteLink: 'https://www.milyon88.to/?pid=ACESEO',
        pros: ['Fast and secure transactions', 'Attractive bonuses and promotions', 'Strong brand reputation', 'Convenient mobile experience'],
        cons: ['Certain payment methods may have fees', 'Some bonuses are limited to new players only', 'The promotion has turnover requirements and withdrawal limits', 'Withdrawal limits may apply'],
        url: 'https://www.milyon88.to/?pid=ACESEO'
    },
    'brand-jilino1': {
        name: 'JILINO1',
        banner: '/images/brands/jilino1/hero jilino1',
        reviewTitle: 'JILINO1 Review: Best JILI Slots & Fishing Games | ACEBET',
        reviewContent: 'JILINO1 is the ultimate destination for JILI slot fans. Get the latest releases, high RTP fishing games, and instant GCash bonuses. Spin to win now!',
        whyPopular: 'JILINO1 has carved out a unique niche in the Philippines by becoming the go-to platform for fans of JILI Gaming. Its popularity stems from its deep partnership with JILI, ensuring that players get access to the latest slot releases before anyone else. Titles like "Super Ace," "Fortune Gems," and "Boxing King" are always featured with optimized performance and exclusive bonuses. Beyond the games, JILINO1 is loved for its straightforward and honest approach to gaming. The platform is incredibly easy to navigate, making it a hit with mobile users who want to jump straight into the action. Another major draw is the "Instant Cash-In/Cash-Out" system via GCash, which is highly reliable and transparent. JILINO1 also offers a unique "Daily Mission" system where players can earn extra rewards just by playing their favorite games. This gamified experience, combined with a strong focus on the most popular slot provider in the country, has made JILINO1 a household name among Filipino slot enthusiasts. Their commitment to fair play and their PAGCOR-verified status provide the peace of mind that local players demand.',
        altDomains: [
            { name: 'JILINO1 Backup Link 1', url: 'https://www.jilino1v4.com/?pid=ACESEO' },
            { name: 'JILINO1 Backup Link 2', url: 'https://www.jilino1v6.com/?pid=ACESEO' }
        ],
        ratings: { trust: 99, games: 99, support: 94, payments: 98 },
        popularPromos: [
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.678_3_1.webp?version=4',
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.1163_3_1.webp?version=0',
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.252_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.132_3_1.webp?version=12',
        ],
        promoContent: 'Promotions at JILINO1 are heavily focused on slot players, offering incredible value for every spin. The "New Member 100% Bonus" is a classic favorite, allowing players to double their first deposit and explore the vast JILI library. JILINO1 also features a "Daily Login Bonus," where simply logging into your account every day grants you free credits or spins. For those who play consistently, the "Weekly Loss Cashback" provides a safety net, returning a portion of any losses incurred during the week. One of the most exciting features is the "JILI Slot Tournament," where players compete for massive prize pools by climbing the leaderboard based on their turnover. JILINO1 also offers special bonuses for using specific payment methods like GCash, providing even more incentive to use local e-wallets. It is important to check the "Mission Center" daily, as completing simple tasks can lead to significant rewards. Each promotion is designed to keep the gameplay exciting and rewarding, ensuring that every visit to JILINO1 feels like a winning opportunity.',
        games: {
            jili: [
                { name: 'Super Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', desc: 'The ultimate JILI slot with high volatility and massive win potential.' },
                { name: 'Fortune Gems', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7448.3.webp?version=13', desc: 'A fan favorite with simple mechanics and high-value multipliers.' },
                { name: 'Boxing King', image: '	https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', desc: 'Knock out the competition with free spins and sticky wild symbols.' }
            ],
            pp: [
                { name: 'Sugar Rush 1000', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34407.3.webp?version=6', desc: 'Vibrant graphics and multiple bonus features in this local-themed slot.' },
                { name: 'Olympus 1000', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.33789.3.webp?version=20', desc: 'Classic luck theme with high RTP and frequent jackpot opportunities.' },
                { name: 'Sweet Bonanza 1000', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.17328.3.webp?version=37', desc: 'An innovative space-themed slot with unique bonus rounds.' }
            ]
        },
        gameContent: 'As the name suggests, JILINO1 is the ultimate destination for JILI Gaming fans. You will find the complete catalog of JILI slots, from the high-volatility "Super Ace" to the visually stunning "Golden Empire." But JILINO1 is more than just JILI; it also features top titles from FC Gaming and CQ9, providing a well-rounded slot experience. For those who enjoy variety, the platform offers a selection of arcade-style fish shooting games, which are incredibly popular in the Philippines for their interactive gameplay and big rewards. The Live Casino section is also well-represented, with tables for Baccarat and Roulette from providers like Evolution and Dream Gaming. All games at JILINO1 are optimized for mobile devices, ensuring that you can enjoy high-quality graphics and smooth animations even on a budget smartphone. The platform uses certified RNG technology to guarantee fair outcomes for every player. Whether you are chasing a progressive jackpot or just looking for some casual fun, JILINO1’s game library has something for everyone.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-5 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-5 Mins' }
        ],
        registrationSteps: [
            'Visit JILINO1 using the "PLAY NOW" button.',
            'Fill out the quick registration form with your mobile number.',
            'Verify your account via SMS.',
            'Deposit as little as 50 ₱ to start playing.',
            'Explore the massive library of JILI slots.'
        ],
        appGuide: 'The JILINO1 app is optimized for slot gaming. Download it directly from the website to enjoy smoother animations and instant access to new game releases.',
        appGuideContent: 'The JILINO1 mobile app is a game-changer for slot enthusiasts in the Philippines. Why download the JILINO1 app? It provides the most stable platform for playing high-definition JILI slots, even on slower mobile networks. The app is designed to be lightweight, ensuring it doesn’t slow down your phone while providing a full-featured casino experience. One of the key benefits is the "Instant Notification" feature, which alerts you to new JILI game releases and exclusive "Flash Bonuses" that are only available for a few hours. The app also features a built-in "Quick Deposit" tool, allowing you to top up your account via GCash without ever leaving the app. For players who value security, the app supports biometric authentication, ensuring that your winnings are always safe. The JILINO1 app download is the best way to ensure you have the most responsive and rewarding gaming experience possible. Always download the app from the official JILINO1 website to avoid any security risks.',
        appGuideImage: '/images/brands/jilino1/mobile jilino1',
        faqs: [
            { q: 'Is JILINO1 legit?', a: 'Yes, it is a fully licensed and verified platform.' },
            { q: 'How long does withdrawal take?', a: 'Withdrawals are usually processed within 1–3 minutes, depending on the payment channel.' },
            { q: 'Is there a welcome bonus available for new players?', a: 'Yes, new players can enjoy multiple welcome rewards including free credits and deposit bonuses.' },
            { q: 'How to contact customer support?', a: 'You can reach our support team via 24/7 live chat or Telegram.' },
            { q: 'Is there a VIP program?', a: 'Yes, loyal players can unlock VIP levels with exclusive rewards, cashback, and priority support.' }
        ],
        promotionBanners: [
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.1163_3_1.webp?version=0',
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.252_3_1.webp?version=1',
            'https://download.ocms.cloud/v2/jln/PromotionInfoLanguage.132_3_1.webp?version=12'
        ],
        officialSiteLink: 'https://www.jilino1.casino/?pid=ACESEO',
        pros: ['Free register 100 for new players', 'Fast withdrawals with secure payment channels', '50 ₱ minimum deposit requirement', 'Frequent promotions and seasonal events'],
        cons: ['The promotion has turnover requirements and withdrawal limits.', 'App requires manual installation', 'No physical casino experience', 'Most promotions are limited to slot and fish games.'],
        url: 'https://www.jilino1.casino/?pid=ACESEO'
    },
    'brand-swerte99': {
        name: 'SWERTE99',
        banner: '/images/brands/swerte99/hero swerte99',
        reviewTitle: 'SWERTE99 Review: Daily Lucky Draws & Big Wins | ACEBET',
        reviewContent: 'SWERTE99 brings luck to Filipino players with daily draws, vibrant community events, and top JILI slots. Experience the best Swerte bonuses today!',
        whyPopular: 'SWERTE99 has become a household name in the Philippines by embracing the local concept of "Swerte" (luck) and turning it into a rewarding gaming experience. Its popularity is built on a foundation of community trust and a vibrant, engaging atmosphere. Unlike many corporate-feeling platforms, SWERTE99 feels like a local neighborhood casino where everyone knows your name. They are particularly famous for their "Lucky Draw" events, which happen almost daily and give players a chance to win everything from free credits to the latest smartphones. The platform is also highly praised for its simplicity; it doesn’t overwhelm players with complex menus, making it perfect for those who just want to enjoy a quick game of JILI slots or a round of Baccarat. The integration with GCash and Maya is flawless, ensuring that when luck strikes, you can get your winnings into your e-wallet in minutes. SWERTE99 also invests heavily in its social media presence, creating a space where players can share their big wins and tips. This sense of belonging, combined with a PAGCOR-verified secure environment, is why thousands of Filipinos choose SWERTE99 as their primary gaming destination.',
        altDomains: [
            { name: 'SWERTE99 Backup Link 1', url: 'https://www.swerte99bet.com/?pid=ACESEO' },
            { name: 'SWERTE99 Backup Link 2', url: 'https://www.swerte99.uno/?pid=ACESEO' }
        ],
        ratings: { trust: 95, games: 96, support: 97, payments: 95 },
        popularPromos: [
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.354_3_1.webp?version=4',
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.202_3_1.webp?version=7',
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.200_3_1.webp?version=8',
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.205_3_1.webp?version=7',
        ],
        promoContent: 'At SWERTE99, promotions are designed to keep the "Swerte" flowing for every player. The "New Member Lucky Start" bonus is a great way to begin, offering a generous match on your first deposit to give you more chances to hit a jackpot. One of their most unique offerings is the "Swerte Hour," a daily window where certain slots have increased payout potential or offer double rebates. For those who enjoy a bit of competition, the "Weekly Leaderboard Challenge" rewards the most active players with significant cash prizes. SWERTE99 also features a "Refer-a-Friend" program that is very popular in the Philippines, allowing you to earn commissions for every friend you bring to the platform. Regular players can also benefit from the "Red Envelope Rain," where random cash prizes are dropped into active accounts throughout the day. It is always a good idea to keep your notifications on, as SWERTE99 often sends out exclusive "Flash Codes" via SMS or Telegram. Each promotion is crafted with the Filipino player in mind, ensuring that there is always a way to boost your bankroll and your luck.',
        games: {
            jili: [
                { name: 'Super Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', desc: 'The most popular slot with high RTP and unique card-flipping mechanics.' },
                { name: 'Golden Empire', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7444.3.webp?version=20', desc: 'A classic 3x3 slot with massive multipliers and fast-paced action.' },
                { name: 'Boxing King', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', desc: 'Experience the thrill of the ring with free spins and sticky wilds.' }
            ],
            pg: [
                { name: 'Mahjong Ways 2', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32616.3.webp?version=11', desc: 'The legendary sequel with even more ways to win and stunning graphics.' },
                { name: 'Wild Bounty Showdown', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32620.3.webp?version=8', desc: 'Western-themed slot with high volatility and massive win potential.' },
                { name: 'Treasures of Aztec', image: '	https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32615.3.webp?version=8', desc: 'A charming Japanese-themed slot with expanding symbols and multipliers.' }
            ],
            jdb: [
                { name: 'Open Sesame', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7329.3.webp?version=29', desc: 'A unique arcade-style slot with fun mechanics and high rewards.' },
                { name: 'Super Niubi', image: '	https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.7391.3.webp?version=25', desc: 'Classic Asian-themed slot with high-value symbols and big jackpots.' },
                { name: 'Piggy Bank', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.34806.3.webp?version=22', desc: 'An action-packed slot with innovative bonus rounds and free spins.' }
            ]
        },
        gameContent: 'The game selection at SWERTE99 is a carefully curated mix of the most popular titles in the Philippines. JILI Gaming takes center stage with hits like "Super Ace" and "Boxing King," which are optimized for the smoothest possible performance on the SWERTE99 platform. PG Soft fans will find a full suite of games including "Mahjong Ways" and "Lucky Neko," known for their high-quality animations and engaging features. For those who enjoy a more traditional experience, the Live Casino section offers high-definition streaming of Baccarat and Roulette from SA Gaming and Evolution. SWERTE99 also features a dedicated "Fishing" section, where games like "Jili Jackpot Fishing" offer a fun and interactive way to win big. All games are regularly audited for fairness and use certified RNG technology, so you can play with confidence. The platform is designed to be responsive across all devices, ensuring that your gaming experience is consistent whether you are on a desktop, tablet, or smartphone. With new titles added frequently, your "Swerte" never has to run out at SWERTE99.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-5 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-5 Mins' }
        ],
        registrationSteps: [
            'Click "PLAY NOW" to go to the SWERTE99 site.',
            'Enter your username and mobile number.',
            'Create a strong password.',
            'Verify your account and log in.',
            'Check the "Promotions" tab for your first "Swerte" bonus.'
        ],
        appGuide: 'Download the SWERTE99 app to stay connected to your luck. The app features push notifications for new promotions and lucky draw events.',
        appGuideContent: 'The SWERTE99 mobile app is your direct line to the best gaming action in the Philippines. Why download the SWERTE99 app? It offers a highly personalized experience, remembering your favorite games and providing quick-access shortcuts. The app is built to be fast and efficient, ensuring that you can jump into a game in seconds, even if you are on a mobile data connection. One of the standout features is the "Lucky Alert" system, which notifies you the moment a new "Red Envelope Rain" or "Lucky Draw" is about to start. Security is a top priority, and the app includes advanced encryption and biometric login options to keep your account and winnings safe. For Filipino players, the SWERTE99 app download means you can take your luck with you wherever you go, from your morning commute to your evening relaxation. The app is easy to install and receives regular updates to ensure the best possible performance. Make sure to download the official version from the SWERTE99 website to ensure you are getting the most secure and feature-rich experience.',
        appGuideImage: '/images/brands/swerte99/mobile swerte99',
        faqs: [
            { q: 'How long does withdrawal take?', a: 'Most withdrawals are processed within 1–3 minutes, depending on the method used.' },
            { q: 'Is there a welcome bonus for new players?', a: 'Yes, new players can claim various welcome perks, including free credits and first-deposit bonuses.' },
            { q: 'Can I get my money back if I lose the bet?', a: 'Unfortunately, you can’t get a refund for money lost on bets. However, we offer a Weekly Losing Cashback of 10% — giving you a chance to recover part of your losses every week!' },
            { q: 'I made a deposit, but the funds haven\t been credited to my account.', a: 'At SWERTE99, we do everything we can to make banking operations as quick and simple as possible. However, sometimes there are variations in the time it takes to process a deposit.' },
            { q: 'Can I make a deposit with someone else\s card or E-wallet?', a: 'Yes, but make sure you have your informaiton correct and proof of payment so we can acknowledge and process it accordingly.' }
        ],
        promotionBanners: [
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.251_3_1.webp?version=5',
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.251_3_1.webp?version=5',
            'https://download.ocms.cloud/v2/sw9/PromotionInfoLanguage.354_3_1.webp?version=4'
        ],
        officialSiteLink: 'https://www.swerte99.com.co/?pid=ACESEO',
        pros: ['Free register 99 for new players', 'Low minimum deposit requirement (50 ₱)', '24/7 VIP customer support', 'Daily promotions and special bonus events', 'Fast and reliable withdrawals'],
        cons: ['App requires manual installation', 'Customer support can be slow during peak hours', 'Most promotions are limited to slot and fish games.', 'The promotion has turnover requirements and withdrawal limits.'],
        url: 'https://www.swerte99.com.co/?pid=ACESEO'
    },
    'brand-ssbet77': {
        name: 'SSBET77',
        banner: '/images/brands/ssbet77/hero ssbet77',
        reviewTitle: 'SSBET77 Review: Ultra-Fast Payouts & USDT | ACEBET',
        reviewContent: 'SSBET77 is the most reliable platform for fast withdrawals. Supporting GCash and USDT, it offers stable live casino and slot gaming for PH players.',
        whyPopular: 'SSBET77 has built a massive following in the Philippines by focusing on two core pillars: speed and reliability. In a market where players often face slow loading times and delayed withdrawals, SSBET77 stands out by offering a lightning-fast experience. Their popularity is particularly high among serious gamers who appreciate the platform’s high-performance servers and its "No-Nonsense" user interface. Another major draw is their early adoption of USDT (crypto) payments alongside local favorites like GCash and Maya, providing an extra layer of privacy and speed for tech-savvy players. SSBET77 is also known for its "Ultra-Stable" live casino streams, which are crucial for players who enjoy high-stakes Baccarat and Roulette. The brand’s commitment to transparency is evident in its PAGCOR-verified status and its clear, fair bonus terms. Filipino players also value the 24/7 customer support, which is known for being incredibly efficient and knowledgeable. By consistently delivering a fast, secure, and professional gaming environment, SSBET77 has become a trusted name for thousands of players across the country.',
        altDomains: [
            { name: 'SSBET77 Backup Link 1', url: 'https://www.ssbet77.club?pid=ACESEO' },
            { name: 'SSBET77 Backup Link 2', url: 'https://www.ssbet78.com/?pid=ACESEO' }
        ],
        ratings: { trust: 98, games: 94, support: 98, payments: 99 },
        popularPromos: [
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/freeREG700x456_.webp',
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/7878.webp',
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/easy.webp',
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/700-456_.webp',
        ],
        promoContent: 'Promotions at SSBET77 are designed for players who value straightforward rewards and high-value returns. The "Instant Welcome Bonus" is a standout, providing a significant boost to your initial deposit with some of the most reasonable turnover requirements in the industry. For regular players, the "Daily Unlimited Rebate" is a major attraction, offering a percentage of your total turnover back every day with no maximum limit. SSBET77 also features a unique "Crypto Deposit Bonus," rewarding players who choose to use USDT with extra credits. For those who enjoy the thrill of competition, the "Monthly Slot Challenge" offers a chance to win large cash prizes by outperforming other players on the leaderboard. SSBET77 also rewards loyalty through its "VIP Fast-Track" program, where active players can quickly climb the ranks to unlock higher withdrawal limits and personalized support. It is important to check the "Announcements" section regularly, as SSBET77 often launches surprise promotions tied to major sporting events or new game releases. Each bonus is crafted to provide real value and enhance your overall gaming experience.',
        games: {
            jili: [
                { name: 'Super Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', desc: 'The most popular slot with high RTP and unique card-flipping mechanics.' },
                { name: 'Fortune Gems', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7448.3.webp?version=13', desc: 'A classic 3x3 slot with massive multipliers and fast-paced action.' },
                { name: 'Mega Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7459.3.webp?version=19', desc: 'Experience the thrill of the ring with free spins and sticky wilds.' }
            ],
            jdb: [
                { name: 'Open Sesame', image: 'https://download.ocms.cloud/v2/common/JDBV2/PlatformGameList.7329.3.webp?version=29', desc: 'A unique arcade-style slot with fun mechanics and high rewards.' },
                { name: 'Magic Ace Wild Lock', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.36375.3.webp?version=25', desc: 'Classic Asian-themed slot with high-value symbols and big jackpots.' },
                { name: 'Piggy Bank', image: 'https://download.ocms.cloud/v2/common2/JDBV2/PlatformGameList.34806.3.webp?version=22', desc: 'An action-packed slot with innovative bonus rounds and free spins.' }
            ],
            fc: [
                { name: 'Sugar Bang Bang 2', image: 'https://download.ocms.cloud/v2/common/FCV2/PlatformGameList.38896.3.webp?version=3', desc: 'Vibrant visuals and multiple ways to win in this local-themed slot.' },
                { name: 'Night Market', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8036.3.webp?version=29', desc: 'Classic luck theme with high-value symbols and big jackpots.' },
                { name: 'Chinese New Year', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8038.3.webp?version=28', desc: 'An innovative space-themed slot with unique bonus rounds.' }
            ]
        },
        gameContent: 'The game library at SSBET77 is built for performance and variety. Slot enthusiasts will find a comprehensive selection of titles from JILI and JDB, known for their high-quality graphics and reliable mechanics. Popular titles like "Super Ace" and "Lucky Coming" are optimized for instant loading, ensuring you never have to wait to start your session. For those who enjoy the live casino experience, SSBET77 partners with world-class providers like Evolution Gaming and SA Gaming to offer high-definition Baccarat, Roulette, and Blackjack tables. The platform also features a robust sportsbook, covering a wide range of local and international events, from PBA basketball to European football. All games at SSBET77 are tested for fairness and use certified RNG technology, providing a transparent and secure environment for all players. The platform is designed to be lightweight and responsive, ensuring a seamless experience whether you are playing on a high-end PC or a budget smartphone. With new games added every week, SSBET77 ensures that there is always something fresh and exciting to explore.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-5 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: '10,000 USDT', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-5 Mins' }
        ],
        registrationSteps: [
            'Use our link to visit SSBET77.',
            'Fill in the registration form with accurate details.',
            'Complete the mobile verification process.',
            'Deposit using GCash or USDT for the fastest experience.',
            'Start playing your favorite games immediately.'
        ],
        appGuide: 'The SSBET77 app is built for performance. It uses minimal data and provides a lag-free experience even on slower connections. Download it from the "App" menu on the site.',
        appGuideContent: 'The SSBET77 mobile app is the ultimate tool for players who value speed and efficiency. Why download the SSBET77 app? It is engineered to provide the fastest possible access to your favorite games, with optimized code that reduces loading times significantly. The app is particularly effective for live casino gaming, where a stable and fast connection is essential. One of the key benefits is the "Smart Login" feature, which keeps you logged in securely and allows for instant access to your account. App users also receive exclusive "Speed Bonuses" and early notifications for high-value events. For Filipino players, the SSBET77 app download means you can manage your account and place bets with just a few taps, even when you are on the move. The app is designed to be highly secure, with multi-layer encryption protecting your personal and financial data. Always ensure you are downloading the official app from the SSBET77 website to guarantee a safe and high-performance experience.',
        appGuideImage: '/images/brands/ssbet77/mobile ssbet77',
        faqs: [
            { q: 'Is SSBET77 legit?', a: 'Yes, it is a secure and trusted platform with verified payment channels.' },
            { q: 'Is there a welcome bonus for new players?', a: 'Yes, SSBET77 offers generous welcome rewards including free credits, first-deposit bonuses, and exclusive newcomer perks.' },
            { q: 'How do I join SSBET77 promotion?', a: 'You can join promotions by visiting the promotion page.' },
            { q: 'Are there limits on daily deposits or withdrawals?', a: 'SSBET77 may impost limits depending on your VIP level and payment provider, ensuring secure and stable transactions!' },
            { q: 'What should I do if I encounter a technical issue?', a: 'You can contact our support team 24/7 through live chat or Telegram for immediate assistance.' }
        ],
        promotionBanners: [
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/7878.webp',
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/easy.webp',
            'https://ssbet77.com.ph/php/assets/images/branch/ssbet77/banner/700-456_.webp'
        ],
        officialSiteLink: 'https://www.ssbet77.com/?pid=ACESEO',
        pros: ['Register 177 for new player', 'Unrivaled Gaming Selection', 'Quality Service at Your Fingertips', 'Secure and Seamless Transactions', 'Exclusive Promotions and Rewards'],
        cons: ['App requires manual installation', 'Customer support can be slow during peak hours', 'The promotion has turnover requirements and withdrawal limits.'],
        url: 'https://ssbet77.com.ph/?openExternalBrowser=1&pid=64'
    },
    'brand-7spin': {
        name: '7SPIN',
        banner: '/images/brands/7spin/hero 7spin ',
        reviewTitle: '7SPIN Review: Modern Gaming & Spin Rewards | ACEBET',
        reviewContent: '7SPIN is the next-gen choice for PH gamers. Featuring unique Spin & Win rewards, modern UI, and top Pragmatic slots. Join the modern casino era!',
        whyPopular: '7SPIN has rapidly gained popularity in the Philippines by offering a fresh, modern, and highly interactive gaming experience. Its popularity stems from its unique "Spin & Win" mechanic, which adds a layer of gamification that resonates with the younger generation of players. Unlike traditional platforms, 7SPIN feels more like a modern social app, with a sleek UI and a strong emphasis on community engagement. They are particularly famous for their "Daily Spin Rewards," where active players can win free credits and exclusive bonuses just by logging in. The platform is also highly praised for its transparency, providing clear RTP data for all its games, which is a major draw for data-driven players. Integration with GCash and Maya is seamless, ensuring that when you win, you can access your funds instantly. 7SPIN also invests heavily in its customer support, offering 24/7 assistance that is both fast and friendly. This combination of innovation, transparency, and local focus is why 7SPIN is becoming the preferred choice for next-gen Filipino gamers. Their commitment to security and their PAGCOR-verified status provide the peace of mind that all players demand.',
        altDomains: [
            { name: '7SPIN Backup Link 1', url: 'https://7spin.cc/?p=ACESEO' },
            { name: '7SPIN Backup Link 2', url: 'https://7spin.co/?p=ACESEO' }
        ],
        ratings: { trust: 94, games: 97, support: 96, payments: 96 },
        popularPromos: [
            '/images/brands/7spin/total deposit 200 free 77',
            '/images/brands/7spin/50 fight 777',
            '/images/brands/7spin/no turnover 2000',
            '/images/brands/7spin/from 30 to200',
        ],
        promoContent: 'Promotions at 7SPIN are designed to keep the excitement high for every player. The "New Member Welcome Pack" is a standout, offering a combination of deposit matches and free spins on their unique prize wheel. 7SPIN also features a "Daily Login Streak" bonus, where logging in for consecutive days unlocks increasingly valuable rewards. For those who enjoy a bit of competition, the "Weekly Spin Leaderboard" rewards the most active players with significant cash prizes. 7SPIN also offers special bonuses for using specific payment methods like GCash, providing even more incentive to use local e-wallets. It is important to check the "Rewards Center" daily, as completing simple tasks can lead to significant rewards. Each promotion is crafted with the modern player in mind, ensuring that there is always a way to boost your bankroll and your gaming experience. The variety of bonuses, from slot-specific rewards to live casino cashback, ensures that every type of player finds something that suits their gaming style.',
        games: {
            jili: [
                { name: 'Super Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7489.3.webp?version=15', desc: 'The most popular slot with high RTP and unique card-flipping mechanics.' },
                { name: 'Money Coming', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7491.3.webp?version=24', desc: 'A classic 3x3 slot with massive multipliers and fast-paced action.' },
                { name: 'Mega Ace', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7459.3.webp?version=19', desc: 'Experience the thrill of the ring with free spins and sticky wilds.' }
            ],
            pp: [
                { name: 'Sweet Bonanza 1000', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.17328.3.webp?version=37', desc: 'A candy-themed slot with cascading reels and massive multiplier spots.' },
                { name: 'Sugar Rush 1000', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34407.3.webp?version=6', desc: 'Anime-themed slot with high volatility and exciting bonus features.' },
                { name: 'Sugar Rush', image: 'https://download.ocms.cloud/v2/common/PPV2/PlatformGameList.34219.3.webp?version=19', desc: 'The legendary slot with Zeus and his multipliers up to 500x.' }
            ],
            fc: [
                { name: 'Golden Panther', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8034.3.webp?version=29', desc: 'Vibrant visuals and multiple ways to win in this local-themed slot.' },
                { name: 'Sugar Bang Bang', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.18273.3.webp?version=19', desc: 'Classic luck theme with high-value symbols and big jackpots.' },
                { name: 'Night Market', image: 'https://download.ocms.cloud/v2/common2/FCV2/PlatformGameList.8036.3.webp?version=29', desc: 'An innovative space-themed slot with unique bonus rounds.' }
            ]
        },
        gameContent: 'The game selection at 7SPIN is a carefully curated mix of the most popular titles in the Philippines. JILI Gaming takes center stage with hits like "Super Ace" and "Boxing King," which are optimized for the smoothest possible performance on the 7SPIN platform. Pragmatic Play fans will find a full suite of games including "Sugar Rush" and "Starlight Princess," known for their high-quality animations and engaging features. For those who enjoy a more traditional experience, the Live Casino section offers high-definition streaming of Baccarat and Roulette from SA Gaming and Evolution. 7SPIN also features a dedicated "Fishing" section, where games like "Jili Jackpot Fishing" offer a fun and interactive way to win big. All games are regularly audited for fairness and use certified RNG technology, so you can play with confidence. The platform is designed to be responsive across all devices, ensuring that your gaming experience is consistent whether you are on a desktop, tablet, or smartphone. With new titles added frequently, your gaming adventure never has to run out at 7SPIN.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-3 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-3 Mins' }
        ],
        registrationSteps: [
            'Visit 7SPIN via the "PLAY NOW" button.',
            'Register with your mobile number or social media account.',
            'Complete your profile verification.',
            'Make your first deposit to unlock the "Spin & Win" feature.',
            'Enjoy a modern gaming experience.'
        ],
        appGuide: '7SPIN offers a sleek mobile app that mirrors the modern design of their website. It is available for download on the official site and provides a seamless transition between desktop and mobile play.',
        appGuideContent: 'The 7SPIN mobile app is the ultimate tool for players who value speed and efficiency. Why download the 7SPIN app? It is engineered to provide the fastest possible access to your favorite games, with optimized code that reduces loading times significantly. The app is particularly effective for live casino gaming, where a stable and fast connection is essential. One of the key benefits is the "Smart Login" feature, which keeps you logged in securely and allows for instant access to your account. App users also receive exclusive "Speed Bonuses" and early notifications for high-value events. For Filipino players, the 7SPIN app download means you can manage your account and place bets with just a few taps, even when you are on the move. The app is designed to be highly secure, with multi-layer encryption protecting your personal and financial data. Always ensure you are downloading the official app from the 7SPIN website to guarantee a safe and high-performance experience.',
        appGuideImage: '/images/brands/7spin/mobile 7spin',
        faqs: [
            { q: 'What is the "Spin & Win" feature?', a: 'It is a unique loyalty mechanic where players earn spins on a special prize wheel based on their activity.' },
            { q: 'Is 7SPIN safe for new players?', a: 'Yes, 7SPIN uses the latest encryption technology and is committed to responsible gaming practices.' },
            { q: 'Can I use GCash for withdrawals?', a: 'Yes, 7SPIN supports instant GCash and Maya withdrawals for all verified players.' },
            { q: 'How to register on 7SPIN?', a: 'To register, click "PLAY NOW", then "Register" on the 7SPIN site. Enter your mobile number, set a password, and verify via the SMS code. You can start playing in less than 2 minutes!' },
            { q: 'Why Philippines players choose 7SPIN?', a: 'Filipino players choose 7SPIN for its unmatched speed and reliability. The instant GCash payouts, modern UI, and the high-performance mobile app make it a favorite for serious gamers.' }
        ],
        promotionBanners: [
            '/images/brands/7spin/total deposit 200 free 77',
            '/images/brands/7spin/50 fight 777',
            '/images/brands/7spin/no turnover 2000'
        ],
        officialSiteLink: 'https://7spin.ph/?p=ACESEO',
        pros: ['Wide variety of promotions and seasonal events', 'UFast and secure withdrawals', '24/7 professional customer support', 'High-value welcome bonuses for new players'],
        cons: ['Some promotions require verification before claiming', 'Limited customer interaction compared to on-ground casinos', 'The promotion has turnover requirements and withdrawal limits.'],
        url: 'https://7spin.ph/?p=ACESEO'
    },
    'brand-spinoy88': {
        name: 'SPINOY88',
        banner: '/images/brands/spinoy88/hero spinoy88',
        reviewTitle: 'SPINOY88 Review: Proudly Pinoy Online Casino | ACEBET',
        reviewContent: 'SPINOY88 is built for Filipinos, offering Sabong-themed slots and local support. Enjoy a culturally resonant gaming experience with instant GCash.',
        whyPopular: 'SPINOY88 has become a favorite in the Philippines by offering a gaming experience that is deeply rooted in local culture and preferences. Its popularity stems from its unique "Pinoy-First" approach, featuring games and themes that resonate with Filipino players. Unlike international platforms, SPINOY88 feels like a local neighborhood casino, with a warm and welcoming atmosphere. They are particularly famous for their "Sabong-Themed Slots," which combine the excitement of traditional cockfighting with the thrill of modern slot machines. The platform is also highly praised for its simplicity; it doesn’t overwhelm players with complex menus, making it perfect for those who just want to enjoy a quick game of JILI slots or a round of Baccarat. Integration with GCash and Maya is flawless, ensuring that when luck strikes, you can get your winnings into your e-wallet in minutes. SPINOY88 also invests heavily in its customer support, offering 24/7 assistance that is both fast and friendly. This combination of cultural resonance, simplicity, and local focus is why SPINOY88 is the preferred choice for many Filipino gamers. Their commitment to security and their PAGCOR-verified status provide the peace of mind that all players demand.',
        altDomains: [
            { name: 'SPINOY88 Backup Link 1', url: 'https://spinoy88.org/?p=ACESEO' },
            { name: 'SPINOY88 Backup Link 2', url: 'https://spinoy88.bet/?p=ACESEO' }
        ],
        ratings: { trust: 96, games: 95, support: 98, payments: 97 },
        popularPromos: [
            '/images/brands/spinoy88/50 fight 888.webp',
            '/images/brands/spinoy88/newbie mega bonus get free 400.webp',
            '/images/brands/spinoy88/sign up now get 10 free spin.webp',
            '/images/brands/spinoy88/total deposit 300 free 88.webp',
        ],
        promoContent: 'Promotions at SPINOY88 are designed to keep the excitement high for every player. The "New Member Pinoy Welcome" bonus is a standout, offering a generous match on your first deposit to give you more chances to hit a jackpot. SPINOY88 also features a "Daily Pinoy Rebate," where simply logging into your account every day grants you free credits or spins. For those who enjoy a bit of competition, the "Weekly Pinoy Leaderboard" rewards the most active players with significant cash prizes. SPINOY88 also offers special bonuses for using specific payment methods like GCash, providing even more incentive to use local e-wallets. It is important to check the "Pinoy Rewards Center" daily, as completing simple tasks can lead to significant rewards. Each promotion is crafted with the Filipino player in mind, ensuring that there is always a way to boost your bankroll and your gaming experience. The variety of bonuses, from slot-specific rewards to live casino cashback, ensures that every type of player finds something that suits their gaming style.',
        games: {
            jili: [
                { name: 'Super Ace Deluxe', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.34836.3.webp?version=16', desc: 'The most popular slot with high RTP and unique card-flipping mechanics.' },
                { name: 'Fortune Gems', image: 'https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7448.3.webp?version=13', desc: 'A classic 3x3 slot with massive multipliers and fast-paced action.' },
                { name: 'Boxing King', image: '	https://download.ocms.cloud/v2/common/JILIV2/PlatformGameList.7506.3.webp?version=15', desc: 'Experience the thrill of the ring with free spins and sticky wilds.' }
            ],
            omg: [
                { name: 'Night Market', image: 'https://media.jdbsbd.com/gamelist/short77_gamelist/7019_en.webp', desc: 'Vibrant visuals and multiple ways to win in this local-themed slot.' },
                { name: 'Omg Ace', image: 'https://media.jdbsbd.com/gamelist/short77_gamelist/7008_en.webp', desc: 'Classic luck theme with high-value symbols and big jackpots.' },
                { name: 'Super Rakki', image: 'https://media.jdbsbd.com/gamelist/short77_gamelist/7005_en.webp', desc: 'An innovative space-themed slot with unique bonus rounds.' }
            ],
            pg: [
                { name: 'Mahjong Ways 2', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32616.3.webp?version=11', desc: 'The legendary sequel with even more ways to win and stunning graphics.' },
                { name: 'Wild Bounty Showdown', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32620.3.webp?version=8', desc: 'Western-themed slot with high volatility and massive win potential.' },
                { name: 'Lucky Neko', image: 'https://download.ocms.cloud/v2/common/PGV2/PlatformGameList.32614.3.webp?version=9', desc: 'A charming Japanese-themed slot with expanding symbols and multipliers.' }
            ]
        },
        gameContent: 'The game selection at SPINOY88 is a carefully curated mix of the most popular titles in the Philippines. JILI Gaming takes center stage with hits like "Super Ace" and "Boxing King," which are optimized for the smoothest possible performance on the SPINOY88 platform. PG Soft fans will find a full suite of games including "Mahjong Ways" and "Lucky Neko," known for their high-quality animations and engaging features. For those who enjoy a more traditional experience, the Live Casino section offers high-definition streaming of Baccarat and Roulette from SA Gaming and Evolution. SPINOY88 also features a dedicated "Fishing" section, where games like "Jili Jackpot Fishing" offer a fun and interactive way to win big. All games are regularly audited for fairness and use certified RNG technology, so you can play with confidence. The platform is designed to be responsive across all devices, ensuring that your gaming experience is consistent whether you are on a desktop, tablet, or smartphone. With new titles added frequently, your gaming adventure never has to run out at SPINOY88.',
        paymentDetails: [
            { method: 'GCash', min: '₱50', max: '₱50,000', speed: 'Instant' },
            { method: 'Maya', min: '₱100', max: '₱50,000', speed: 'Instant' },
            { method: 'Bank Transfer', min: '₱500', max: '₱100,000', speed: '1-3 Mins' },
            { method: 'Grab', min: '₱100', max: '₱30,000', speed: 'Instant' },
            { method: 'USDT', min: '10 USDT', max: 'No Limit', speed: 'Instant' },
            { method: 'GoTyme Bank', min: '₱500', max: '₱100,000', speed: '1-3 Mins' }
        ],
        registrationSteps: [
            'Visit SPINOY88 via the "PLAY NOW" button.',
            'Register with your mobile number or social media account.',
            'Complete your profile verification.',
            'Make your first deposit to unlock the "Pinoy Welcome" feature.',
            'Enjoy a culturally resonant gaming experience.'
        ],
        appGuide: 'SPINOY88 offers a sleek mobile app that mirrors the modern design of their website. It is available for download on the official site and provides a seamless transition between desktop and mobile play.',
        appGuideContent: 'The SPINOY88 mobile app is the ultimate tool for players who value speed and efficiency. Why download the SPINOY88 app? It is engineered to provide the fastest possible access to your favorite games, with optimized code that reduces loading times significantly. The app is particularly effective for live casino gaming, where a stable and fast connection is essential. One of the key benefits is the "Smart Login" feature, which keeps you logged in securely and allows for instant access to your account. App users also receive exclusive "Speed Bonuses" and early notifications for high-value events. For Filipino players, the SPINOY88 app download means you can manage your account and place bets with just a few taps, even when you are on the move. The app is designed to be highly secure, with multi-layer encryption protecting your personal and financial data. Always ensure you are downloading the official app from the SPINOY88 website to guarantee a safe and high-performance experience.',
        appGuideImage: '/images/brands/spinoy88/mobile spinoy88',
        faqs: [
            { q: 'I\m not receiving the verification code via SMS.', a: 'First, please double check that the mobile number you registered is correct. Also, having call/message blocking enabled can prevent SMS delivery, so please check that setting as well. If you still don\t receive it after checking, contact live chat.' },
            { q: 'How do I change my password?', a: 'After logging in, go to "My Page" → "Account" → "Change Password" to update your password.' },
            { q: 'Is SPINOY88 really for Filipinos?', a: 'Yes, SPINOY88 is designed specifically for the local market, with games and support tailored to Pinoy preferences.' },
            { q: 'Is it possible to create multiple accounts?', a: 'To prevent misuse, only one account Is permitted per person, household, address, family, and IP address. If we detect multiple accounts, they may be closed without warning. Please be advised.' },
            { q: 'How can I get my VIP upgrade Bonus?', a: 'To receive the VIP bonus, players must meet the platform VIP requirements.' }
        ],
        promotionBanners: [
            '/images/brands/spinoy88/newbie mega bonus get free 400.webp',
            '/images/brands/spinoy88/sign up now get 10 free spin.webp',
            '/images/brands/spinoy88/total deposit 300 free 88.webp'
        ],
        officialSiteLink: 'https://spinoy88.net/?p=ACESEO',
        pros: ['24/7 professional customer support', 'High-value welcome bonuses for new players', 'Wide variety of promotions and seasonal events', 'Fast Customer Support'],
        cons: ['Fewer payment methods than larger brands', 'Limited customer interaction compared to on-ground casinos'],
        url: 'https://spinoy88.net/?p=ACESEO'
    }
};

export const FAQS = [
    { q: '1. How to register an account?', a: 'You can sign up using your mobile number or Google account. Simply click "Register", fill in the required information, and submit.' },
    { q: '2. What documents are required for verification?', a: 'Usually only a valid ID, NID, Driver License, Passport' },
    { q: '3. How do I deposit?', a: 'You can deposit using trusted Philippine channels such as GCash, PayMaya, bank transfer, and other supported e-wallets.' },
    { q: '4. How long does deposit take?', a: 'Deposits are usually instant.' },
    { q: '5. How long does withdrawal take?', a: 'Usually 5 - 15 minutes. Large amounts may require additional verification.' },
    { q: '6. Why was my withdrawal rejected?', a: '* A high volume of withdrawal requests. * Payment channel maintenance. * Incorrect account details.' },
    { q: '7. Is there a minimum deposit?', a: 'Minimum deposit: 50 ₱.' },
    { q: '8. What is turnover?', a: 'Turnover = total betting amount.' },
    { q: '9. What games are available?', a: 'Slots, Live Casino (Baccarat, Roulette, etc.' },
    { q: '10. What should I do if my account is locked?', a: 'Contact customer support with your registered email or phone number to verify your identity and unlock your account.' },
    { q: '11. Can I have multiple accounts?', a: 'No, each player is allowed only one account. Multiple accounts are prohibited and may result in account suspension.' },
];

export const SOCIAL_MEDIA_BRANDS = [
    {
        name: 'BETSO88',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/betso88club/' },
            { platform: 'telegram', url: 'https://t.me/betso88_VIP' },
            { platform: 'telegram', url: 'https://t.me/Betso88_Agent_Support' },
            { platform: 'instagram', url: 'https://www.instagram.com/betso88' },
        ]
    },
    {
        name: 'MILYON88',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/milyon88casino/' },
            { platform: 'telegram', url: 'https://t.me/milyonfree100' },
            { platform: 'telegram', url: 'https://t.me/milyon88casino' },
            { platform: 'telegram', url: 'https://t.me/Milyon88' },
        ]
    },
    {
        name: 'JILINO1',
        links: [
            { platform: 'facebook', url: 'facebook.com/Jilino1VipBonus' },
            { platform: 'telegram', url: 'https://t.me/Jilino1VIP' },
            { platform: 'telegram', url: 'https://t.me/JILINo1_Community' },            
            { platform: 'instagram', url: 'https://www.instagram.com/jilino1officialpage' },
        ]
    },
    {
        name: 'SWERTE99',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=61575630656974' },
            { platform: 'telegram', url: 'https://t.me/swerte99' },
            { platform: 'instagram', url: 'https://www.instagram.com/csswerte99/' },
            { platform: 'youtube', url: 'https://www.youtube.com/@SWERTE99youtubechannel' },
        ]
    },
    {
        name: 'SSBET77',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/ssbet77casino' },
            { platform: 'telegram', url: 'https://t.me/ssbet77community' },
            { platform: 'telegram', url: 'https://t.me/ssbet77PHP' },
            { platform: 'telegram', url: 'https://t.me/ssbet77community' },
        ]
    },
    {
        name: '7SPIN',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/7SPIN.PH' },
            { platform: 'telegram', url: 'https://t.me/CommunityPH_7spin' },
            { platform: 'instagram', url: 'https://www.instagram.com/7spin.ph/' },
            { platform: 'youtube', url: 'https://www.youtube.com/@7spin_VIP' },
        ]
    },
    {
        name: 'SPINOY88',
        links: [
            { platform: 'facebook', url: 'https://www.facebook.com/spinoy88VIP/' },
            { platform: 'telegram', url: 'https://t.me/Community_Spinoy88' },
            { platform: 'instagram', url: 'https://www.instagram.com/spinoy88_vip' },
            { platform: 'x', url: 'https://x.com/Spinoy88' },
        ]
    }
];

export const TESTIMONIALS = [
    { name: 'Jose Ramos', loc: 'Manila', text: "I won 45,000 ₱ on Super Ace within my first week! Withdrawal was instant via GCash. ACE ALLIANCE truly delivers.", platform: 'BETSO88', rating: 5 },
    { name: 'Michael Cruz', loc: 'Cebu City', text: "Honestly, I was skeptical at first. Every platform claims to have the 'best RTP' until you actually try to cash out. But 7SPIN surprised me.", platform: '7SPIN', rating: 5 },
    { name: 'Jessica Dela Cruz', loc: 'Boracay', text: "I only deposited 100 ₱ just to test the waters on JILINO1. Honestly, I thought I'd lose it in five minutes, and that would be that.", platform: 'JILINO1', rating: 5 }
];

export const SECURITY_FEATURES = [
  { label: 'SSL Encrypted', icon: ShieldCheck, color: 'text-amber-500' },
  { label: 'Verified Platform', icon: CheckCircle, color: 'text-blue-500' },
  { label: 'Bank Transfer', icon: Landmark, color: 'text-emerald-500' },
  { label: 'Mobile Banking', icon: Smartphone, color: 'text-cyan-500' },
  { label: 'Instant Withdrawal', icon: Zap, color: 'text-yellow-500' },
  { label: '100% Safe', icon: Shield, color: 'text-blue-400' },
];

export const PAYMENT_PROVIDERS = [
  { name: 'GCash', image: '/images/payment/gcash icon.webp' },
  { name: 'Maya', image: '/images/payment/paymaya icon.webp' },
  { name: 'GoTyme Bank', image: '/images/payment/gotyme icon.webp' },
  { name: 'Bank Transfer', image: '/images/payment/bank icon.webp' },
  { name: 'Grab', image: '/images/payment/GrabPay icon.webp' },
  { name: 'USDT', image: '/images/payment/usdt icon.webp' },
];

export const ARTICLES = [
    {
        id: 1,
        slug: '2026-online-entertainment-technology-trends-analysis',
        title: '2026 Online Entertainment and Technology Trends Analysis',
        date: 'Jun 30, 2026',
        category: 'Technology',
        excerpt: 'Explore the biggest shifts shaping online entertainment in 2026, from AI-powered personalization to immersive streaming and smarter mobile experiences.',
        image: '/images/article/article_2026_trends.webp',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2026 Online Entertainment and Technology Trends Analysis</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        The online entertainment landscape is evolving faster than ever. In 2026, audiences expect smarter recommendations, richer media experiences, and smoother access across every device. This analysis highlights the forces shaping the next wave of digital engagement.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-blue-600 mb-4"><Cpu size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">AI-Powered Personalization</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Platforms are adapting content in real time based on user behavior, making each session feel more relevant and dynamic.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-amber-600 mb-4"><Smartphone size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Seamless Mobile Experiences</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Fast-loading apps and responsive interfaces are now essential for keeping users engaged throughout the day.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-green-600 mb-4"><Video size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Immersive Live Content</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Live streams, interactive features, and richer visual storytelling are raising the bar for digital entertainment.</p>
                    </div>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Five Trends Defining the Year</h4>
                    <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-3"><div className="mt-1 text-blue-600"><Zap size={14} /></div><span><strong>Smarter Recommendations:</strong> AI is helping platforms surface content that feels more personal and timely.</span></li>
                        <li className="flex items-start gap-3"><div className="mt-1 text-blue-600"><Zap size={14} /></div><span><strong>Cross-Device Continuity:</strong> Users expect to switch from phone to desktop without losing progress or context.</span></li>
                        <li className="flex items-start gap-3"><div className="mt-1 text-blue-600"><Zap size={14} /></div><span><strong>Interactive Experiences:</strong> Polls, live chats, and gamified features are becoming a standard part of engagement.</span></li>
                        <li className="flex items-start gap-3"><div className="mt-1 text-blue-600"><Zap size={14} /></div><span><strong>Security and Trust:</strong> Users are rewarding platforms that make safety and privacy feel effortless.</span></li>
                        <li className="flex items-start gap-3"><div className="mt-1 text-blue-600"><Zap size={14} /></div><span><strong>Faster Performance:</strong> Speed and reliability remain vital for keeping attention and loyalty.</span></li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Why This Matters</h4>
                    <p className="text-blue-50 leading-relaxed mb-4">
                        The brands that win in 2026 will be those that combine fast technology with thoughtful design and a clear commitment to user experience. Consumers are rewarding platforms that feel intuitive, safe, and instantly accessible.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                        <Zap size={24} className="text-amber-400" />
                        <p className="text-sm">Expect faster load times, smarter recommendations, and more immersive content formats as the standard.</p>
                    </div>
                </section>

                <section>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        In short, 2026 is not only about more technology, but about better experiences. The most successful platforms will be the ones that make entertainment feel effortless, personal, and enjoyable from the very first interaction.
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 2, 
        slug: 'understanding-online-casino-bonus-turnover-ph',
        title: 'Understanding Online Casino Bonus & Turnover in PH', 
        date: 'Jan 08, 2026', 
        category: 'Guide', 
        excerpt: 'Master the secrets of Wagering Requirements and boost your winning chances in 2026. Learn how to calculate turnover and withdraw your winnings faster.', 
        image: '/images/article/article_understanding online casino',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Maximize Your Play: Bonus & Turnover Guide 2026</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        For many Filipino players, online casino bonuses seem like "free money." However, to withdraw your winnings successfully via GCash or Maya, you must first master the concept of <strong>Wagering Requirements</strong> (commonly known as <strong>Turnover</strong>). This guide will take you through everything you need to know to navigate the complex world of casino promotions in 2026.
                    </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                            <Info size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">What is Turnover?</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        Turnover is the total amount you need to bet before your bonus balance becomes withdrawable cash. It is the most critical term in any casino promotion. Without meeting the turnover, your "winnings" are just numbers on a screen.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                            <p className="text-sm font-bold text-blue-600 mb-2 uppercase">Example Calculation</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                Bonus: ₱100<br />
                                Turnover: 10x<br />
                                <strong>Total Bet Required: ₱1,000</strong>
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                            <p className="text-sm font-bold text-green-600 mb-2 uppercase">Pro Tip</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                Always check if the turnover applies to just the bonus or the (Deposit + Bonus) amount.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                            <Check size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Types of Bonuses in PH Casinos</h4>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Welcome Bonus</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Usually a 100% match on your first deposit. Great for doubling your starting bankroll.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">No Deposit Bonus</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Free credits just for registering. These often have higher turnover requirements (e.g., 20x or 30x).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Daily Rebates</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">A percentage of your total bets returned to you daily. These often have very low or zero turnover.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Strategies to Beat the Turnover</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white/20 p-1 rounded-full"><Zap size={14} /></div>
                            <p className="text-blue-50"><strong>Play High RTP Slots:</strong> Games with 97%+ RTP help you maintain your balance while grinding the turnover.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white/20 p-1 rounded-full"><Zap size={14} /></div>
                            <p className="text-blue-50"><strong>Low Volatility is Key:</strong> Choose games that pay out frequently in small amounts to avoid big balance swings.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-white/20 p-1 rounded-full"><Zap size={14} /></div>
                            <p className="text-blue-50"><strong>Track Your Progress:</strong> Use the "Promotion Center" on platforms like BETSO88 to see exactly how much more you need to bet.</p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Common Pitfalls to Avoid</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/30 dark:bg-red-900/10">
                            <div className="text-red-600 mb-3"><ShieldAlert size={24} /></div>
                            <p className="font-bold text-slate-900 dark:text-white mb-2">Game Restrictions</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Some games (like certain Live Casino tables) might only contribute 10% or 0% towards the turnover.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-900/10">
                            <div className="text-amber-600 mb-3"><Clock size={24} /></div>
                            <p className="font-bold text-slate-900 dark:text-white mb-2">Time Limits</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Most bonuses expire within 7-30 days. If you don't meet the turnover by then, the bonus and winnings are forfeited.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        In conclusion, understanding turnover is the difference between a frustrating experience and a rewarding one. By choosing the right games and managing your time, you can turn those bonus credits into real cash in your GCash wallet. Stay informed, play smart, and always read the fine print!
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 3, 
        slug: 'mastering-super-ace-strategies-2026',
        title: 'Mastering Super Ace: Strategies for 2026', 
        date: 'Dec 08, 2025', 
        category: 'Strategy', 
        excerpt: 'Unlock the winning potential of JILI Gaming\'s Super Ace. Discover advanced betting patterns and multiplier secrets for the biggest payouts.', 
        image: '/images/article/article_Super Ace.webp',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Gamepad2 size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Super Ace: Strategies for 2026</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Super Ace, a popular slot game developed by JILI Gaming, is renowned for its splendid poker theme and high-frequency winning combinations. In 2026, the game remains a top choice for Filipino players due to its engaging mechanics and potential for massive payouts. This article dives deep into the advanced strategies you need to master this iconic slot.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-blue-600 mb-4"><TrendingUp size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">High RTP</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">With an RTP of 97%, Super Ace is one of the most generous slots in the JILI catalog.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-amber-600 mb-4"><Zap size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Elimination</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Winning symbols are eliminated, allowing new symbols to drop for consecutive wins.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-green-600 mb-4"><Coins size={24} /></div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Multipliers</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Each elimination increases your multiplier, reaching up to 10x in Free Spins.</p>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Multiplier Secret</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        The key to winning big in Super Ace is the elimination multiplier. Each consecutive win increases your multiplier up to 5x in the base game and 10x during Free Spins. Managing your bet size during "cold" streaks is essential to staying in the game for the "hot" streaks.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <h5 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            <AlertCircle size={18} className="text-blue-600" />
                            Understanding the Golden Cards
                        </h5>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Golden cards only appear on reels 2, 3, and 4. When eliminated, they transform into "Joker" symbols. The Joker symbol can be a "Big Joker" (replaces 1-4 symbols) or a "Small Joker" (replaces itself). These Jokers are the bridge to massive combo chains.
                        </p>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-6">Advanced Betting Strategy</h4>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold">1</div>
                            <div>
                                <p className="font-bold mb-1">The Warm-up Phase</p>
                                <p className="text-blue-100 text-sm">Start with small bets (₱1 - ₱5) for the first 50 spins to gauge the game's current volatility.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold">2</div>
                            <div>
                                <p className="font-bold mb-1">The Escalation</p>
                                <p className="text-blue-100 text-sm">If you hit a Free Spins round, increase your bet slightly for the next 20 spins, as the game often enters a "hot" cycle.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold">3</div>
                            <div>
                                <p className="font-bold mb-1">The Exit Strategy</p>
                                <p className="text-blue-100 text-sm">After a big win (50x your bet or more), revert to your base bet or take a break to lock in your profits.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why Super Ace is Different</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Unlike traditional slots where you just wait for a single big hit, Super Ace is about momentum. The elimination mechanic means a single spin can turn into a 2-minute sequence of wins. This makes it one of the most entertaining and potentially profitable games for players who understand how to manage their bankroll.
                    </p>
                </section>

                <section className="border-t border-slate-100 dark:border-slate-800 pt-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/20 text-green-600">
                            <ShieldCheck size={32} />
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white">Play Responsibly</h5>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Always remember that slots are games of chance. Use these strategies to enhance your fun, but never bet more than you can afford to lose.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    },
    { 
        id: 4, 
        slug: 'top-5-trusted-online-casinos-philippines-2026',
        title: 'Top 5 Trusted Online Casinos in the Philippines 2026', 
        date: 'Feb 15, 2026', 
        category: 'Trends', 
        excerpt: 'Find the most reliable PAGCOR-licensed online casinos in the Philippines. Our expert review covers security, game variety, and payout speeds.', 
        image: '/images/article/article_top 5 trusted online casino in ph',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Most Trusted Platforms in 2026</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        With hundreds of online casinos appearing every month, finding a trusted platform is more important than ever. Our team at ACEBET Alliance has vetted the top contenders based on security, licensing, and player feedback. In 2026, the standard for "trust" has evolved to include not just licensing, but also transparency and social responsibility.
                    </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <Lock size={20} className="text-blue-600" />
                        Our Vetting Criteria
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-sm font-medium">PAGCOR License</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-sm font-medium">Fast GCash Payouts</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-sm font-medium">SSL Encryption</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl">
                            <CheckCircle size={18} className="text-green-500" />
                            <span className="text-sm font-medium">24/7 Local Support</span>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600">1. BETSO88 - The All-Rounder</h5>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            BETSO88 remains the gold standard for Filipino players. Its combination of a massive JILI library, instant Maya/GCash integration, and a highly responsive Tagalog support team makes it unbeatable.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600">2. MILYON88 - The VIP Choice</h5>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            For high rollers, MILYON88 offers the most sophisticated VIP program. Their higher withdrawal limits and personalized account managers provide a premium experience that is hard to find elsewhere.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all group">
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600">3. SSBET77 - The Speed King</h5>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            If you hate waiting, SSBET77 is for you. Their infrastructure is optimized for speed, from game loading times to withdrawal processing, which often takes less than 5 minutes.
                        </p>
                    </div>
                </section>

                <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800">
                    <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Why Licensing Matters</h4>
                    <p className="text-blue-800/80 dark:text-blue-200/80 leading-relaxed">
                        A PAGCOR license is not just a piece of paper; it is a guarantee of fairness. Licensed casinos are required to use certified Random Number Generators (RNG) and maintain sufficient liquidity to pay out all winnings. At ACEBET Alliance, we exclusively recommend licensed platforms to ensure our community stays safe.
                    </p>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Future of PH Online Casinos</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        As we move through 2026, we expect to see more integration of blockchain technology for even faster payments and the rise of VR-based live casino experiences. However, the core of a great casino will always remain the same: trust, speed, and great games.
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 5, 
        slug: 'gcash-maya-ultimate-guide-fast-casino-payments',
        title: 'GCash & Maya: The Ultimate Guide to Fast Casino Payments', 
        date: 'Mar 01, 2026', 
        category: 'Finance', 
        excerpt: 'Learn how to use GCash and Maya for instant deposits and withdrawals at PH online casinos. Secure your transactions with our expert tips.', 
        image: '/images/article/Article_Philippine e-wallet updates.webp',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Wallet size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Fast Payments with GCash & Maya</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        In the Philippines, e-wallets have revolutionized the way we play. GCash and Maya are the gold standard for fast, secure, and convenient casino transactions. In 2026, these platforms have integrated even more deeply with online casinos, offering features like one-tap deposits and real-time withdrawal tracking.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">G</div>
                            <h4 className="font-bold text-slate-900 dark:text-white">GCash Features</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Instant QR Deposits</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> GCredit Integration</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Real-time SMS Alerts</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">M</div>
                            <h4 className="font-bold text-slate-900 dark:text-white">Maya Features</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> High-yield Savings Link</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Virtual Card Support</li>
                            <li className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Crypto-to-Casino Ready</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Deposit Safely</h4>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center font-bold">1</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Log in to your casino account and navigate to the 'Deposit' section.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center font-bold">2</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Select GCash or Maya and enter your desired amount.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 flex items-center justify-center font-bold">3</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Follow the prompts to authorize the transaction via your e-wallet app.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Why Speed Matters</h4>
                    <p className="text-blue-50 leading-relaxed mb-4">
                        In the fast-paced world of online gaming, waiting for a deposit can mean missing out on a hot streak or a limited-time promotion. GCash and Maya offer near-instant processing, ensuring that your funds are ready when you are.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                        <Zap size={24} className="text-amber-400" />
                        <p className="text-sm">Average deposit time: <strong>Less than 30 seconds</strong></p>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        The integration of GCash and Maya has made online gaming more accessible and safer for Filipinos. By following simple security practices, you can enjoy a seamless gaming experience with the peace of mind that your funds are handled by the country's most trusted financial platforms.
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 6, 
        slug: 'jili-slots-number-1-choice-filipino-players',
        title: 'JILI Slots: Why They Are the #1 Choice for Filipino Players', 
        date: 'Mar 10, 2026', 
        category: 'Tech', 
        excerpt: 'Explore the technology and design behind JILI Gaming\'s success in the PH market. Discover why games like Super Ace and Fortune Gems dominate.', 
        image: '/images/article/article_popular.webp',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The JILI Gaming Phenomenon</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        If you've played at any PH online casino, you've seen JILI Gaming. Their slots are optimized for mobile performance, making them perfect for players on the go. In 2026, JILI continues to dominate the market with its unique blend of high RTP, engaging mechanics, and culturally resonant themes.
                    </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Why JILI Dominates</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Mobile First</h5>
                            <p className="text-xs text-slate-500">Games are designed to load fast and run smoothly on even budget smartphones.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">High RTP</h5>
                            <p className="text-xs text-slate-500">Most JILI slots offer an RTP of 97% or higher, giving players better value.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Local Themes</h5>
                            <p className="text-xs text-slate-500">Themes that resonate with Filipino culture, like poker and traditional gems.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Innovative Mechanics</h5>
                            <p className="text-xs text-slate-500">Features like elimination multipliers and golden cards keep the gameplay fresh.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Top JILI Games to Watch</h4>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Super Ace</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">The king of elimination slots with massive multiplier potential.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Fortune Gems</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">A classic 3x3 slot with a multiplier reel that can boost wins up to 15x.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1 text-blue-600"><Star size={16} /></div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Boxing King</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">High-energy slot with free spins and sticky wild multipliers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">The Tech Behind the Fun</h4>
                    <p className="text-blue-50 leading-relaxed">
                        JILI uses advanced HTML5 technology to ensure their games are cross-platform compatible. Their backend systems are designed for high concurrency, meaning thousands of players can spin simultaneously without any lag or downtime.
                    </p>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        JILI Gaming has set a high bar for online slots in the Philippines. Their commitment to quality, fairness, and mobile optimization has made them the #1 choice for millions of players. As they continue to innovate, we can expect even more exciting titles in the years to come.
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 7, 
        slug: 'responsible-gaming-enjoy-online-casinos-safely',
        title: 'Responsible Gaming: How to Enjoy Online Casinos Safely', 
        date: 'Mar 15, 2026', 
        category: 'Education', 
        excerpt: 'Stay in control of your gaming habits with our comprehensive guide to responsible play. Learn how to set limits and recognize warning signs.', 
        image: '/images/article/article_responsible.webp',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Heart size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Play Smart, Play Safe</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        At ACEBET Alliance, we believe that gaming should always be a form of entertainment, not a source of stress. Responsible gaming is the key to a long-term positive experience. In 2026, we are advocating for even more robust player protection measures across all our partner platforms.
                    </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Setting Your Limits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Deposit Limits</h5>
                            <p className="text-xs text-slate-500">Set a daily, weekly, or monthly limit on how much you can deposit.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Time Limits</h5>
                            <p className="text-xs text-slate-500">Set a timer for your gaming sessions to ensure you don't lose track of time.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Loss Limits</h5>
                            <p className="text-xs text-slate-500">Decide on a maximum amount you are willing to lose in a single session.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Self-Exclusion</h5>
                            <p className="text-xs text-slate-500">Take a temporary or permanent break from gaming if you feel it's becoming a problem.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recognizing the Warning Signs</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        It's important to be honest with yourself. If you find yourself gambling with money you can't afford to lose, or if gaming is interfering with your daily life, it may be time to seek help.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl">
                            <AlertTriangle size={18} className="text-red-500" />
                            <span className="text-sm text-red-800 dark:text-red-200">Gambling to escape problems or stress.</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl">
                            <AlertTriangle size={18} className="text-red-500" />
                            <span className="text-sm text-red-800 dark:text-red-200">Lying to family or friends about your gambling habits.</span>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Where to Find Support</h4>
                    <p className="text-blue-50 leading-relaxed mb-4">
                        You are not alone. There are many resources available in the Philippines for those who need support with gambling-related issues.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                        <Info size={24} className="text-blue-200" />
                        <p className="text-sm">Contact <strong>PAGCOR Responsible Gaming</strong> for professional guidance.</p>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        Responsible gaming is about balance. By setting limits and staying informed, you can enjoy the excitement of online casinos while keeping your personal and financial well-being safe.
                    </p>
                </section>
            </div>
        )
    },
    { 
        id: 8, 
        slug: 'maximizing-vip-rewards-guide-high-rollers-ph',
        title: 'Maximizing VIP Rewards: A Guide for High Rollers in PH', 
        date: 'Mar 20, 2026', 
        category: 'Guide', 
        excerpt: 'Unlock exclusive benefits with casino VIP programs. Learn how to climb the ranks and earn higher rebates, faster withdrawals, and luxury gifts.', 
        image: '/images/article/article_Maximizing VIP Rewards',
        content: (
            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                            <Trophy size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The World of Casino VIP Programs</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        For dedicated players, VIP programs offer a wealth of benefits that go far beyond standard bonuses. From personalized account managers to exclusive event invitations, being a VIP pays off. In 2026, the competition among PH casinos has led to even more lucrative rewards for their most loyal players.
                    </p>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Exclusive VIP Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Higher Rebates</h5>
                            <p className="text-xs text-slate-500">Get a higher percentage of your total bets back as cash every day.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Faster Withdrawals</h5>
                            <p className="text-xs text-slate-500">VIP requests are prioritized, often processed in under 5 minutes.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Personal Manager</h5>
                            <p className="text-xs text-slate-500">A dedicated contact person for all your needs and questions.</p>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h5 className="font-bold text-blue-600 mb-2">Luxury Gifts</h5>
                            <p className="text-xs text-slate-500">Earn points towards high-end electronics, gadgets, and even travel vouchers.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How to Climb the VIP Ranks</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        Most VIP programs are tiered, meaning the more you play, the higher you climb. Each tier unlocks more valuable rewards and lower turnover requirements on bonuses.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 flex items-center justify-center font-bold">1</div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Bronze / Silver</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">The entry levels where you start earning basic rebates and birthday bonuses.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 flex items-center justify-center font-bold">2</div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Gold / Platinum</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Unlock faster withdrawals and higher daily rebate percentages.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-amber-400 dark:bg-amber-600 text-white flex items-center justify-center font-bold">3</div>
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Diamond / Elite</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">The highest tiers with personalized service and exclusive luxury rewards.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-bold mb-4">Maximize Your Rewards</h4>
                    <p className="text-blue-50 leading-relaxed mb-4">
                        To get the most out of a VIP program, focus your play on a single trusted platform. This allows you to accumulate points faster and reach higher tiers more quickly.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl">
                        <Star size={24} className="text-amber-400" />
                        <p className="text-sm">Consolidate your play to unlock <strong>Elite</strong> benefits faster.</p>
                    </div>
                </section>

                <section>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Conclusion</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        VIP programs are a great way to get extra value from your gaming. By choosing a platform with a robust reward system, you can enjoy a more personalized and rewarding experience. Always play responsibly and enjoy the perks that come with being a valued member of the community.
                    </p>
                </section>
            </div>
        )
    },
];

export const ARTICLE_CATEGORIES = ['All', 'Strategy', 'Education', 'Finance', 'Trends', 'Guide', 'Tech'];

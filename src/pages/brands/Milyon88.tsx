import React from 'react';
import { BRAND_REVIEWS, PLATFORMS } from '../../constants';
import { BrandLayout } from './BrandLayout';

export const Milyon88: React.FC = () => {
    const brandKey = 'brand-milyon88';
    const brand = BRAND_REVIEWS[brandKey];
    const platform = PLATFORMS.find(p => p.id === brandKey);

    if (!brand || !platform) return null;

    return <BrandLayout brand={brand} platform={platform} canonicalPath="/brands/milyon88" />;
};

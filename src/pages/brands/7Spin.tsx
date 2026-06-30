import React from 'react';
import { BRAND_REVIEWS, PLATFORMS } from '../../constants';
import { BrandLayout } from './BrandLayout';

export const SevenSpin: React.FC = () => {
    const brandKey = 'brand-7spin';
    const brand = BRAND_REVIEWS[brandKey];
    const platform = PLATFORMS.find(p => p.id === brandKey);

    if (!brand || !platform) return null;

    return <BrandLayout brand={brand} platform={platform} />;
};

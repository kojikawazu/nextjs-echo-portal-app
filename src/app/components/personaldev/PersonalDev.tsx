'use client';

import { useState } from 'react';

// components
import MainLayout from '@/app/components/layout/MainLayout';
import PersonalDevCard from '@/app/components/personaldev/atoms/PersonalDevCard';

/**
 * 個人開発履歴
 * @returns JSX.Element
 */
const PersonalDev = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PersonalDevCard
                        icon={<i className="fas fa-cog text-4xl text-[#3498db] mb-4"></i>}
                        title="工事中"
                        description="工事中"
                        tech={['React', 'Next.js', 'TypeScript']}
                        url="/"
                        urlIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />
                </div>
            </main>
        </MainLayout>
    );
};

export default PersonalDev;

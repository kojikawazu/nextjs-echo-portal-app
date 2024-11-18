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
    const blogWebUrl = process.env.NEXT_PUBLIC_BLOG_WEB_URL || '/';
    const imageWebUrl = process.env.NEXT_PUBLIC_IMAGE_WEB_URL || '/';

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PersonalDevCard
                        icon={<i className="fas fa-cog text-4xl text-[#3498db] mb-4"></i>}
                        title="MyブログWebアプリケーション"
                        description="私のブログ内容を管理するWebアプリケーション"
                        tech={['React', 'Next.js', 'TypeScript', 'Go', 'Echo', 'AWS App Runner', 'Supabase']}
                        url={blogWebUrl}
                        urlIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />
                    <PersonalDevCard
                        icon={<i className="fas fa-cog text-4xl text-[#3498db] mb-4"></i>}
                        title="S3画像管理Webアプリケーション"
                        description="S3に保管している画像を管理するWebアプリケーション"
                        tech={['React', 'Next.js', 'TypeScript', 'AWS S3']}
                        url={imageWebUrl}
                        urlIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />           
                </div>
            </main>
        </MainLayout>
    );
};

export default PersonalDev;

'use client';

import { useState } from 'react';

// constants
import { CommonConstants } from '@/app/utils/constants/common-constants';
// components
import MainLayout from '@/app/components/layout/MainLayout';
import PortalCard from '@/app/components/portal/atoms/PortalCard';

/**
 * ポータルメイン
 * @returns JSX.Element
 */
const PortalMain = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const blogWebUrl = process.env.NEXT_PUBLIC_BLOG_WEB_URL as string;

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <PortalCard
                        icon={<i className="fas fa-user-circle text-4xl text-[#3498db] mb-4"></i>}
                        title="ポートフォリオ"
                        description="私のスキルと実績をご覧ください"
                        url="/portfolio"
                        linkText="詳しく見る"
                        linkIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />

                    <PortalCard
                        icon={<i className="fas fa-blog text-4xl text-[#3498db] mb-4"></i>}
                        title="ブログ"
                        description="私のブログをご覧ください"
                        url={blogWebUrl ? blogWebUrl : '#'}
                        linkText="詳しく見る"
                        linkIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />

                    <PortalCard
                        icon={<i className="fas fa-envelope text-4xl text-[#3498db] mb-4"></i>}
                        title="お問い合わせ"
                        description="お気軽にご連絡ください"
                        url={CommonConstants.URL.CONTACT}
                        linkText="連絡する"
                        linkIcon={<i className="fas fa-arrow-right ml-2"></i>}
                    />
                </div>
            </main>
        </MainLayout>
    );
};

export default PortalMain;

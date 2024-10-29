'use client';

import { useState } from 'react';
// components
import MainLayout from '@/app/components/layout/MainLayout';

const PortalMain = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <i className="fas fa-user-circle text-4xl text-[#3498db] mb-4"></i>
                        <h2 className="text-2xl font-bold mb-4">
                            ポートフォリオ
                        </h2>
                        <p className="text-gray-600 mb-4">
                            私のスキルと実績をご覧ください。
                        </p>
                        <a
                            href="/portfolio"
                            className="inline-block bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] transition-colors duration-200"
                        >
                            詳しく見る{' '}
                            <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <i className="fas fa-envelope text-4xl text-[#3498db] mb-4"></i>
                        <h2 className="text-2xl font-bold mb-4">
                            お問い合わせ
                        </h2>
                        <p className="text-gray-600 mb-4">
                            お気軽にご連絡ください。
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] transition-colors duration-200"
                        >
                            連絡する <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </main>
        </MainLayout>
    );
};

export default PortalMain;

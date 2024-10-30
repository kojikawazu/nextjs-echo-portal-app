'use client';

import { useState } from 'react';
// components
import MainLayout from '@/app/components/layout/MainLayout';

/**
 * お問い合わせ確認
 * @returns JSX.Element
 */
const ContactConfirm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [formData] = useState({
        name: '山田太郎',
        email: 'yamada@example.com',
        message: 'ウェブサイトについて質問があります。',
    });

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl font-noto-sans text-gray-800 text-center mb-8">
                        お問い合わせ内容の確認
                    </h1>

                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <div className="text-sm font-noto-sans text-gray-500">お名前</div>
                            <div className="mt-1 text-lg font-noto-sans">{formData.name}</div>
                        </div>

                        <div className="border-b pb-4">
                            <div className="text-sm font-noto-sans text-gray-500">
                                メールアドレス
                            </div>
                            <div className="mt-1 text-lg font-noto-sans">{formData.email}</div>
                        </div>

                        <div className="border-b pb-4">
                            <div className="text-sm font-noto-sans text-gray-500">
                                お問い合わせ内容
                            </div>
                            <div className="mt-1 text-lg font-noto-sans whitespace-pre-wrap">
                                {formData.message}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center space-x-4">
                        <button className="bg-gray-500 text-white px-6 py-2 rounded-md font-noto-sans hover:bg-gray-600">
                            修正する
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-noto-sans hover:bg-blue-700">
                            送信する
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactConfirm;

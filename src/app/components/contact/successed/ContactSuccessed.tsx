'use client';

import { useState } from 'react';
// components
import MainLayout from '@/app/components/layout/MainLayout';

/**
 * お問い合わせ完了
 * @returns JSX.Element
 */
const ContactSuccessed = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="text-green-500 mb-4">
                        <i className="fas fa-check-circle text-6xl"></i>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-4 font-roboto">
                        お問い合わせありがとうございます
                    </h1>
                    <p className="text-gray-600 mb-6 font-roboto">
                        内容を確認次第、担当者よりご連絡させていただきます。
                    </p>
                    <button
                        onClick={() => (window.location.href = '/')}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-roboto py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                        トップページへ戻る
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactSuccessed;

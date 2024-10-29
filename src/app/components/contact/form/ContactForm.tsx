'use client';

import { useState } from 'react';
// components
import MainLayout from '@/app/components/layout/MainLayout';

/**
 * お問い合わせフォーム
 * @returns JSX.Element
 */
const ContactForm = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeTextarea = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-md mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold font-noto-sans mb-8">
                            お問い合わせ
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-md rounded-lg p-8 space-y-6"
                    >
                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                お名前
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                お問い合わせ内容
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChangeTextarea}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-noto-sans py-2 px-4 rounded-md transition duration-200"
                        >
                            送信する
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactForm;

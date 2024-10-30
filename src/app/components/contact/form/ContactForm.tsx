'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// constants
import { CommonConstants } from '@/app/utils/constants/common-constants';
// types
import { contactFormData } from '@/app/types/contact-types';
// schema
import { contactSchema } from '@/app/schema/contact-schema';
// utils
import {
    getDataBySessionStorage,
    setDataBySessionStorage,
} from '@/app/utils/session/session-utils';
import { setFormError } from '@/app/utils/form/form-utils';
// components
import MainLayout from '@/app/components/layout/MainLayout';

/**
 * お問い合わせフォーム
 * @returns JSX.Element
 */
const ContactForm = () => {
    // ルーティング
    const router = useRouter();
    // メニュー
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // フォーム
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<contactFormData>({
        resolver: zodResolver(contactSchema),
    });

    useEffect(() => {
        // セッションストレージからデータを取得
        const data = getDataBySessionStorage(CommonConstants.SESSION_STORAGE_KEY.CONTACT_FORM_DATA);
        if (data) {
            reset(data);
        }
    }, [router, reset]);

    /**
     * 送信
     * @param data フォームデータ
     */
    const onSubmit = async (data: contactFormData) => {
        try {
            // CSRFトークンを取得（バックエンドのエンドポイントから）
            // const response = await fetch('/api/csrf-token');
            // const { csrfToken } = await response.json();
            const csrfToken = 'csrfToken';

            // セッションストレージにデータを保存
            setDataBySessionStorage(CommonConstants.SESSION_STORAGE_KEY.CONTACT_FORM_DATA, {
                ...data,
                csrfToken,
            });

            // 確認画面へ遷移
            router.push(CommonConstants.URL.CONTACT_CONFIRM);
        } catch (error) {
            setFormError(error, setError);
        }
    };

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-md mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold font-noto-sans mb-8">お問い合わせ</h1>
                        {errors.root && (
                            <p className="text-red-500 mb-4">{errors.root.serverError.message}</p>
                        )}
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(onSubmit)(e);
                        }}
                        className="bg-white shadow-md rounded-lg p-8 space-y-6"
                    >
                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                お名前
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                メールアドレス
                            </label>
                            <input
                                {...register('email')}
                                id="email"
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block font-noto-sans text-gray-700 mb-2">
                                お問い合わせ内容
                            </label>
                            <textarea
                                {...register('message')}
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.message && (
                                <p className="text-red-500">{errors.message.message}</p>
                            )}
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

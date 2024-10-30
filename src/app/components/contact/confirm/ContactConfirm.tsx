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
import { handleBack, setFormError } from '@/app/utils/form/form-utils';
import {
    getDataBySessionStorage,
    removeDataBySessionStorage,
} from '@/app/utils/session/session-utils';
// components
import MainLayout from '@/app/components/layout/MainLayout';

/**
 * お問い合わせ確認
 * @returns JSX.Element
 */
const ContactConfirm = () => {
    // ルーティング
    const router = useRouter();
    // メニュー
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // フォーム
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setError,
        formState: { errors },
    } = useForm<contactFormData>({
        resolver: zodResolver(contactSchema),
    });

    useEffect(() => {
        // セッションストレージからデータを取得
        const data = getDataBySessionStorage(CommonConstants.SESSION_STORAGE_KEY.CONTACT_FORM_DATA);

        if (!data) {
            router.push(CommonConstants.URL.CONTACT);
            return;
        }

        reset(data);
    }, [router, reset]);

    /**
     * 送信
     * @param data フォームデータ
     */
    const onSubmit = async (data: contactFormData) => {
        try {
            console.log(data);
            // const storedData = sessionStorage.getItem('contactFormData');
            // const { csrfToken } = JSON.parse(storedData || '{}');

            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-CSRF-Token': csrfToken
            //     },
            //     body: JSON.stringify(data)
            // });

            //if (response.ok) {
            removeDataBySessionStorage(CommonConstants.SESSION_STORAGE_KEY.CONTACT_FORM_DATA);
            router.push(CommonConstants.URL.CONTACT_SUCCESSED);
            //}
        } catch (error) {
            setFormError(error, setError);
        }
    };

    return (
        <MainLayout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
            <div className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-md mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold font-noto-sans mb-8">
                            お問い合わせ内容の確認
                        </h1>
                        <p className="text-gray-500 mb-4">
                            お問い合わせ内容をご確認の上、
                            <br />
                            送信ボタンをクリックしてください。
                        </p>
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
                        <dl className="space-y-4">
                            <div>
                                <dt className="font-noto-sans text-gray-700 mb-1">お名前</dt>
                                <dd className="px-4 py-2 border-b">{watch('name')}</dd>
                            </div>

                            <div>
                                <dt className="font-noto-sans text-gray-700 mb-1">
                                    メールアドレス
                                </dt>
                                <dd className="px-4 py-2 border-b">{watch('email')}</dd>
                            </div>

                            <div>
                                <dt className="font-noto-sans text-gray-700 mb-1">
                                    お問い合わせ内容
                                </dt>
                                <dd className="px-4 py-2 border-b whitespace-pre-wrap">
                                    {watch('message')}
                                </dd>
                            </div>
                        </dl>

                        {/* hidden inputs for form submission */}
                        <input type="hidden" {...register('name')} />
                        <input type="hidden" {...register('email')} />
                        <input type="hidden" {...register('message')} />

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={handleBack}
                                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-noto-sans py-2 px-4 rounded-md transition duration-200"
                            >
                                戻る
                            </button>
                            <button
                                type="submit"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-noto-sans py-2 px-4 rounded-md transition duration-200"
                            >
                                送信する
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default ContactConfirm;

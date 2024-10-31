import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
// utils
import { escapeHtml } from '@/app/utils/string/string-utils';

// Resend のインスタンスを作成し、APIキーを設定
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * お問い合わせメール送信API
 * @param request
 * @returns 200: お問い合わせが送信されました。
 * @returns 400: 必須フィールドが空の場合
 * @returns 500: メールの送信中にエラーが発生しました。
 */
export async function POST(request: NextRequest) {
    console.log('POST request received');
    const { name, email, message } = await request.json();
    const sendMail = process.env.RESEND_TO_MAIL as string;

    // バリデーション
    // 必須フィールドが空の場合はエラー
    if (!name || !email || !message) {
        console.error('All fields are required');
        return new NextResponse('All fields are required', { status: 400 });
    }
    // Eメール形式かどうかチェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        console.error('Invalid email address');
        return new NextResponse('Invalid email address', { status: 400 });
    }

    // サニタイズ
    const sanitizedEmail = escapeHtml(email);
    const sanitizedName = escapeHtml(name);
    const sanitizedMessage = escapeHtml(message);

    console.log('All valid');

    try {
        // メール送信
        const { data, error } = await resend.emails.send({
            from: `${sanitizedName} <${sanitizedName}@resend.dev>`,
            to: [sendMail],
            subject: `Myポータルサイトからお問い合わせ: ${sanitizedName}`,
            text: `メールアドレス: ${sanitizedEmail}\nメッセージ:\n${sanitizedMessage}`,
            html: `
              <p><strong>メールアドレス:</strong> ${sanitizedEmail}</p>
              <p><strong>メッセージ:</strong></p>
              <p>${sanitizedMessage.replace(/\n/g, '<br/>')}</p><br/><br/>
              <p>このメールはMyポータルサイトから送信されました。</p>
            `,
        });

        if (!data && error) {
            console.error('メール送信に失敗しました: ', error);
            return new NextResponse('メールの送信中にエラーが発生しました。', { status: 500 });
        }

        return new NextResponse('お問い合わせが送信されました。', { status: 200 });
    } catch (error) {
        console.error('メール送信に失敗しました: ', error);
        return new NextResponse('メールの送信中にエラーが発生しました。', { status: 500 });
    }
}

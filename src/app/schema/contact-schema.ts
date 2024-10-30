import { z } from 'zod';

/**
 * お問い合わせフォームデータのスキーマ
 */
export const contactSchema = z.object({
    name: z.string().min(1, '名前を入力してください'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    message: z.string().min(1, 'お問い合わせ内容を入力してください'),
});

/**
 * HTMLエンティティをエスケープする関数
 * @param unsafe エスケープする文字列
 * @returns エスケープされた文字列
 */
export const escapeHtml = (unsafe: string) => {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

import Link from 'next/link';

interface HeaderLinkProps {
    icon: React.ReactNode;
    text: string;
    url: string;
}

/**
 * ヘッダーリンク
 * @param {React.ReactNode} icon - アイコン
 * @param {string} text - テキスト
 * @param {string} url - リンク先URL
 * @returns JSX.Element
 */
const HeaderLink = ({ icon, text, url }: HeaderLinkProps) => {
    return (
        <li className="my-2 md:my-0 md:mx-4">
            <Link
                href={url}
                className="hover:text-[#3498db] transition-colors duration-200 flex items-center"
            >
                {icon}
                {text}
            </Link>
        </li>
    );
};

export default HeaderLink;

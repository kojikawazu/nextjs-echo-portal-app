import Link from 'next/link';

interface PortalCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    url: string;
    linkText: string;
    linkIcon: React.ReactNode;
}

/**
 * ポータルカード
 * @param {React.ReactNode} icon - アイコン
 * @param {string} title - タイトル
 * @param {string} description - 説明
 * @param {string} url - リンク先URL
 * @param {string} linkText - リンクテキスト
 * @param {React.ReactNode} linkIcon - リンクアイコン
 * @returns JSX.Element
 */
const PortalCard = ({ icon, title, description, url, linkText, linkIcon }: PortalCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            {icon}
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
                href={url}
                className="inline-block bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] transition-colors duration-200"
            >
                {linkText} {linkIcon}
            </Link>
        </div>
    );
};

export default PortalCard;

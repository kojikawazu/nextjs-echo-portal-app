import Link from 'next/link';

interface PersonalDevCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tech: string[];
    url: string;
    urlIcon: React.ReactNode;
}

/**
 * 個人開発カード
 * @param {React.ReactNode} icon - アイコン
 * @param {string} title - タイトル
 * @param {string} description - 説明
 * @param {string[]} tech - 技術
 * @param {string} url - リンク先URL
 * @param {React.ReactNode} urlIcon - リンクアイコン
 * @returns JSX.Element
 */
const PersonalDevCard = ({
    icon,
    title,
    description,
    tech,
    url,
    urlIcon,
}: PersonalDevCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4 text-[#3498db]">{icon}</div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <Link
                href={url}
                className="inline-block bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] transition-colors duration-200"
            >
                View Project {urlIcon}
            </Link>
        </div>
    );
};

export default PersonalDevCard;

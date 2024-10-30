import Link from 'next/link';

/**
 * メインフッター
 * @returns JSX.Element
 */
const MainFooter = () => {
    const myGithubUrl = process.env.NEXT_PUBLIC_MY_GITHUB_URL as string;
    const myTwitterUrl = process.env.NEXT_PUBLIC_MY_TWITTER_URL as string;
    const myLinkedinUrl = process.env.NEXT_PUBLIC_MY_LINKEDIN_URL as string;

    return (
        <footer className="bg-[#2c3e50] text-white py-6 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>© {new Date().getFullYear()} My Tech Hub</p>
                    </div>

                    <div className="flex space-x-6">
                        <Link
                            href={myGithubUrl ? myGithubUrl : '#'}
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-github text-xl"></i>
                        </Link>
                        <Link
                            href={myTwitterUrl ? myTwitterUrl : '#'}
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </Link>
                        <Link
                            href={myLinkedinUrl ? myLinkedinUrl : '#'}
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-linkedin text-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;

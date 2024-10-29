interface MainHeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

/**
 * メインヘッダー
 * @param {boolean} isMenuOpen - メニューが開いているかどうか
 * @param {function} setIsMenuOpen - メニューが開いているかどうかを設定する関数
 * @returns JSX.Element
 */
const MainHeader = ({ isMenuOpen, setIsMenuOpen }: MainHeaderProps) => {
    return (
        <header className="bg-gradient-to-r from-[#2c3e50] to-[#3498db] text-white py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <i className="fas fa-terminal text-2xl mr-2"></i>
                    <h1 className="text-xl font-bold">My Tech Hub</h1>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden"
                >
                    <i
                        className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
                    ></i>
                </button>

                <nav
                    className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[#2c3e50] md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} md:block`}
                >
                    <ul className="flex flex-col md:flex-row items-center p-4 md:p-0">
                        <li className="my-2 md:my-0 md:mx-4">
                            <a
                                href="/portfolio"
                                className="hover:text-[#3498db] transition-colors duration-200 flex items-center"
                            >
                                <i className="fas fa-user-circle mr-2"></i>
                                ポートフォリオ
                            </a>
                        </li>
                        <li className="my-2 md:my-0 md:mx-4">
                            <a
                                href="/blog"
                                className="hover:text-[#3498db] transition-colors duration-200 flex items-center"
                            >
                                <i className="fas fa-blog mr-2"></i>ブログ
                            </a>
                        </li>
                        <li className="my-2 md:my-0 md:mx-4">
                            <a
                                href="/contact/form"
                                className="hover:text-[#3498db] transition-colors duration-200 flex items-center"
                            >
                                <i className="fas fa-envelope mr-2"></i>
                                お問い合わせ
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainHeader;

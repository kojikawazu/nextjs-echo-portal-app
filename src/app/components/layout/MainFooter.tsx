/**
 * メインフッター
 * @returns JSX.Element
 */
const MainFooter = () => {
    return (
        <footer className="bg-[#2c3e50] text-white py-6 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>© 2024 My Tech Hub</p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com"
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="hover:text-[#3498db] transition-colors duration-200"
                        >
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;

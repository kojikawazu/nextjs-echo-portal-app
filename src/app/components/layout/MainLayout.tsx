// components
import MainHeader from '@/app/components/layout/MainHeader';
import MainFooter from '@/app/components/layout/MainFooter';

interface MainLayoutProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
    children: React.ReactNode;
}

/**
 * メインレイアウト
 * @param {boolean} isMenuOpen - メニューが開いているかどうか
 * @param {function} setIsMenuOpen - メニューが開いているかどうかを設定する関数
 * @param {React.ReactNode} children - 子要素
 * @returns JSX.Element
 */
const MainLayout = ({ isMenuOpen, setIsMenuOpen, children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-roboto bg-[#f0f4f8]">
            <MainHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {children}
            <MainFooter />
        </div>
    );
};

export default MainLayout;

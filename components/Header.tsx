import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from "@/components/Logo";
import Motion from "@/components/Motion";
import { transition, animateFade } from "@/framer";

const Header = () => {
    return (
        <header className="main_padding fixed top-0 left-0 right-0 backdrop-blur-[6px] z-30">
            <Motion
                {...animateFade}
                {...transition}
                className="max-w-[976px] mx-auto w-full h-20 flex items-center justify-between"
            >
                <Logo />
                <ToggleDarkMode />
            </Motion>
        </header>
    );
};

export default Header;

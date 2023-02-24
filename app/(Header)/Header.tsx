import Link from "next/link";
import Logo from "../../public/icons/logo.svg";
import Heart from "../../public/icons/heart.svg";
import Cart from "../../public/icons/cart.svg";
import Profile from "../../public/icons/profile.svg";
import BurgerNav from "./BurgerNav";

const linkStyle = "text-2xl text-black max-md:hidden";
const mobileLinkStyle = "text-2xl text-center text-black block p-4";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex items-center justify-between h-16 md:h-[70px] z-10 bg-white sm:bg-blue-light-3 md:bg-blue-light-1 lg:bg-blue xl:bg-yellow-light 2xl:bg-yellow shadow-[0_6px_6px_-6px_rgba(0,0,0,0.1)]">
        <div className="flex md:basis-3/4 lg:basis-3/5 md:justify-between justify-start gap-4 basis-1/2 md:px-4">
          <BurgerNav>
            <nav>
              <Link href="/" className={mobileLinkStyle}>
                Suchen
              </Link>
              <Link href="/" className={mobileLinkStyle}>
                Anbieter:innen
              </Link>
              <Link href="/" className={mobileLinkStyle}>
                Über uns
              </Link>
            </nav>
          </BurgerNav>
          <Link href="/">
            <Logo className="h-8 fill-black" />
          </Link>
          <Link href="/" className={linkStyle}>
            Suchen
          </Link>
          <Link href="/" className={linkStyle}>
            Anbieter:innen
          </Link>
          <Link href="/" className={linkStyle}>
            Über uns
          </Link>
        </div>
        <div className="flex justify-around basis-1/3 md:basis-1/4 px-4 2xl:basis-1/5">
          <Link href="/">
            <Heart className="max-sm:hidden h-8 fill-black" />
          </Link>
          <Link href="/">
            <Cart className="max-sm:hidden h-8 fill-black" />
          </Link>
          <Link href="/">
            <Profile className="h-8 fill-black" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

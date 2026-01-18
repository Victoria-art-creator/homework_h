import ChangeThemeButton from "./ChangeThemeButton";
import Link from "./Link";

const Header = () => {
  return (
    <header className="header">
      <ul className="header__logo">
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
      </ul>
      <ChangeThemeButton />
    </header>
  );
};

export default Header;

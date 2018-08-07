import Link from "next/link";
import "./header.less";

export const Header = () => (
  <div>
    <Link href="/">
      <a className="header__link">Home</a>
    </Link>
    <Link href="/about">
      <a className="header__link">About</a>
    </Link>
  </div>
);

import Image from "next/image";
import headerBackground from "../../../images/Cloud/header.png";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <section className={style.header}>
      <div className={style["header__head"]}>
        <h1>Digital &#38; Cloud Services</h1>
        <p>
          Scale your business exponentially and securely with our Digital &#38;
          Cloud Services.
        </p>
      </div>
    </section>
  );
};

export default Header;

import Image from "next/image";
import headerBackground from "../../../images/Cybersecurity/header.png";

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
      {/* <div className={style["header__img"]}>
        <Image
          src={headerBackground}
          alt="agrim cybersecurity header"
          width={1000}
          height={400}
        />
      </div> */}
    </section>
  );
};

export default Header;

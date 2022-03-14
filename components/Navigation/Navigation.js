import Image from "next/image";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";

import agrimLogo from "../../images/agrim.png";
import nineDot from "../../images/dotsNine.png";

import style from "./Navigation.module.scss";

const NavigationItem = (props) => {
  return (
    <div className={style["navigation__item"]}>
      <Link href="#">{props.text}</Link>
      <IoIosArrowDown />
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <div className={style["navigation__logo"]}>
        <Image src={agrimLogo} alt="agrim logo" width={150.02} height={33.4} />
      </div>
      <div className={style["navigation__items"]}>
        <NavigationItem text="Digital &#38; Cloud" />
        <NavigationItem text="Cybersecurity" />
        <NavigationItem text="Skills AdvantEdge&trade;" />
        <NavigationItem text="About" />
        <div className={style["navigation__menu"]}>
          <Image src={nineDot} width={29} height={29} alt="icon" />
        </div>
        <div className={style["navigation__button"]}>
          <Link href="#">Contact Us</Link>
          <CgArrowLongRight />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { ImLinkedin2 } from "react-icons/im";
import agrim from "../../images/agrim.png";

import style from "./Footer.module.scss";

const MenuItem = (props) => {
  return (
    <div className={style["footer__menu--item"]}>
      <h3>{props.title}</h3>
      <ul>
        {props.items.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["footer__top"]}>
        <h2>Ready to work together?</h2>
        <h1>Start The Digital Transformation</h1>
        <div className={style["footer__top--button"]}>
          <BsArrowUpRight />
          <div className={style["footer__top--button-animated"]}>
            <BsArrowUpRight />
          </div>
        </div>
      </div>
      <div className={style["footer__bottom"]}>
        <div className={style["footer__bottom--logo"]}>
          <Image src={agrim} alt="agrim logo" width={202} height={45} />
        </div>
        <p>Based in Norway. Helping worldwide.</p>
        <div className={style["footer__address"]}>
          <p>Terminal 9 B</p>
          <p>3414 Lierstranda</p>
          <p>Norway</p>
        </div>
        <div className={style["footer__menu"]}>
          <div className={style["footer__menu-1"]}>
            <MenuItem
              title="Services"
              items={["Cloud Solutions", "Cybersecurity", "Skills AdvantEdge"]}
            />
          </div>
          <div className={style["footer__menu-2"]}>
            <MenuItem
              title="Our Results"
              items={["Case Studies", "Testimonials", "Clients"]}
            />
          </div>
          <div className={style["footer__menu-3"]}>
            <MenuItem
              title="Company"
              items={["Who we are", "Our Founders", "Our Team"]}
            />
          </div>
        </div>
        <div className={style["footer__social"]}>
          <div className={style["footer__social--linkedin"]}>
            <ImLinkedin2 />
          </div>
          <div className={style["footer__social--facebook"]}>
            <TiSocialFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";

import gcp from "../../images/gcp.png";
import azure from "../../images/azure.png";
import microsoft from "../../images/microsoft.png";
import privacy from "../../images/privacy.png";

import style from "./Partners.module.scss";

const PartnersItem = (props) => {
  return (
    <div className={style["partners__item"]} style={props.style}>
      <div className={style["partners__item--icon"]}>
        <Image
          src={props.icon}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={style["partners__item--title"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={style["partners__item--text"]}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <section className={style.partners}>
      <h1>We’re Experts &#38; Valued Partner Of</h1>
      <div className={style["partners__container"]}>
        <PartnersItem
          icon={gcp.src}
          width={164}
          height={92}
          alt="gcp"
          title="Google Cloud"
          text="Lorem ipsum dolor sit amet, consectetue"
          style={{ backgroundColor: "#5C2DCC" }}
        />
        <PartnersItem
          icon={microsoft.src}
          width={136}
          height={136}
          alt="microsoft azure"
          title="Microsoft Azure"
          text="Lorem ipsum dolor sit amet, consectetue"
          style={{ backgroundColor: "#1011C0" }}
        />
        <PartnersItem
          icon={azure.src}
          width={142}
          height={142}
          alt="microsoft azure"
          title="Microsoft Azure"
          text="Lorem ipsum dolor sit amet, consectetue"
          style={{ backgroundColor: "#0B0754" }}
        />
        <PartnersItem
          icon={privacy.src}
          width={116}
          height={116}
          alt="Google Security"
          title="Google Security"
          text="Lorem ipsum dolor sit amet, consectetue"
          style={{ backgroundColor: "#2B2C7B" }}
        />
      </div>
    </section>
  );
};

export default Partners;

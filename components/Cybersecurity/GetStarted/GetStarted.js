import Image from "next/image";
import stockmarket from "../../../images/Cybersecurity/stockmarket.png";

import { ButtonPurple } from "../../UI/Button";

import style from "./GetStarted.module.scss";

const GetStartedItem = (props) => {
  return (
    <div className={style["getStarted__item"]}>
      <div className={style["getStarted__item--img"]}>
        <Image src={props.img} width={358} height={280} />
      </div>
      <div className={style["getStarted__item--title"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={style["getStarted__item--text"]}>
        <p>{props.text}</p>
      </div>
      <div className={style["getStarted__item--button"]}>
        <ButtonPurple text={props.buttonText} />
      </div>
    </div>
  );
};

const GetStatedItems = () => {
  const getStartedItems = [
    {
      id: 1,
      title: "Schedule a consultation",
      text: "Book an appointment with AGRIM Digital & Cloud Services to see how to migrate your business to the Cloud.",
      buttonText: "Let's Talk",
      img: stockmarket.src,
    },
    {
      id: 2,
      title: "Read our Success Stories",
      text: "Find out how we have helped our clients seamlessly migrate their business to the cloud!",
      buttonText: "Act Now",
      img: stockmarket.src,
    },
    {
      id: 3,
      title: "Get an estimate for you",
      text: "Find out how much Cloud will cost for you and your business",
      buttonText: "Begin Estimating",
      img: stockmarket.src,
    },
  ];

  return (
    <div className={style["getStarted__items"]}>
      {getStartedItems.map((item) => (
        <GetStartedItem
          title={item.title}
          text={item.text}
          img={item.img}
          buttonText={item.buttonText}
          key={item.id}
        />
      ))}
    </div>
  );
};

const GetStarted = () => {
  return (
    <section className={style.getStarted}>
      <h1>Get Started With Us</h1>
      <div className={style["getStarted__container"]}>
        <GetStatedItems />
      </div>
    </section>
  );
};

export default GetStarted;

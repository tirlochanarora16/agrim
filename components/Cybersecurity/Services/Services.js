import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import { serviceItemData } from "./ServiceItemdata";

import style from "./Services.module.scss";

// separate component for the 3 menu items in the serives section
const ServicesNavigationItem = (props) => {
  return (
    <div className={style["services__navigation--item"]}>
      <p>{props.text}</p>
    </div>
  );
};

// a separate component for the services navigation
const ServicesNavigation = () => {
  // creating an array to loop through for the navogation items
  const navigationItems = [
    "Cloud Transformation",
    "Intelligent Automation",
    "Cloud Security Services",
  ];

  return (
    <div className={style["services__navigation"]}>
      <div className={style["services__navigation--items"]}>
        {/* looping through the array to display the navigation items */}
        {navigationItems.map((item, index) => (
          <ServicesNavigationItem text={item} key={item + index} />
        ))}
      </div>
    </div>
  );
};

const ServiceContainerItem = (props) => {
  return (
    <div className={style["services__container--item"]}>
      <div className={style["services__container--item--title"]}>
        <h2>{props.title}</h2>
      </div>
      <div className={style["services__container--item--text"]}>
        <p>{props.text}</p>
      </div>
      <div className={style["services__container--item--bottom"]}>
        <div className={style["services__container--item--duration"]}>
          <p>{props.duration}</p>
        </div>
        <div className={style["services__container--item--number"]}>
          <p>0{props.id}</p>
        </div>
        <div className={style["services__container--item--arrow"]}>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

//separate component for services container
const ServicesContainer = () => {
  return (
    <div className={style["services__container--items"]}>
      {serviceItemData.map((item) => (
        <ServiceContainerItem
          title={item.title}
          duration={item.duration}
          text={item.text}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section className={style.services}>
      {/* SERVICE NAVIGATION */}
      <ServicesNavigation />
      {/* SERVICE CONTENT */}
      <div className={style["services__content"]}>
        <h1>
          Get your business ready scaling by using Agrim's Cloud Integration
          Services.
        </h1>
        <div className={style["services__content--button"]}>
          <Link href="#">Let's work together</Link>
        </div>
        <div className={style["services__container"]}>
          <ServicesContainer />
        </div>
      </div>
    </section>
  );
};

export default Services;

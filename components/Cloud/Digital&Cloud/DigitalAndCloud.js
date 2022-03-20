import { useContext } from "react";
import Image from "next/image";

import { DigitalAndCloudContext } from "../context/digital&cloud";
import { digitalAndClouddata } from "./digital&CloudData";
import ButtonGradient from "../../UI/Button";

import robot from "../../../images/Cloud/robot.png";

import style from "./DigitalAndCloud.module.scss";

// DIGITAL AND CLOUD --- SECTION NAVIGATION

// digital and cloud navigation item
const DigitalAndCloudNavigationItem = (props) => {
  // using the context
  const digitalAndCloudContext = useContext(DigitalAndCloudContext);

  // using the context to change the navigation item, which will help in determining the currently active navigation item styling and the information to be displayed based on the current navigation item
  const clickHandler = (event) => {
    digitalAndCloudContext.changeCurrentInformation(event.target.id);
  };

  return (
    <div
      className={style["digitalAndCloud__navigation--item"]}
      onClick={clickHandler}
    >
      <p id={props.id} style={{ color: props.active ? "#fff" : "" }}>
        {props.text}
      </p>
    </div>
  );
};

// digital and cloud navigation component
const DigitalAndCloudNavigation = () => {
  // using the context to display to get the current navigation item
  const digitalAndCloudContext = useContext(DigitalAndCloudContext);

  // fetching the current navigaiton item
  const currentNavigationItem = digitalAndCloudContext.currentInformation;

  // the "id" field will help to determine the navigation item that is currently active
  const digitalAndCloudNavigationItems = [
    { id: "ct", text: "Cloud Transformation" },
    { id: "ia", text: "Intelligent Automation" },
    { id: "css", text: "Cloud Security Services" },
  ];
  return (
    <div className={style["digitalAndCloud__navigation"]}>
      <div className={style["digitalAndCloud__navigation--items"]}>
        {digitalAndCloudNavigationItems.map((item, index) => (
          <DigitalAndCloudNavigationItem
            id={item.id}
            text={item.text}
            key={item.text + index}
            active={currentNavigationItem === item.id}
          />
        ))}
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- SECTION INFORMATION

const DigitalAndCloudInformation = () => {
  // using the context to display to get the current navigation item
  const digitalAndCloudContext = useContext(DigitalAndCloudContext);

  // fetching the current navigaiton item
  const currentNavigationItem = digitalAndCloudContext.currentInformation;

  // extracting out the information based on current navigation item
  const currentInformationToDisplay = digitalAndClouddata.filter(
    (item) => item.id === currentNavigationItem
  );

  return (
    <div className={style["digitalAndCloud__information"]}>
      <h2>{currentInformationToDisplay[0].title}</h2>
      <div className={style["digitalAndCloud__information--text"]}>
        <p>{currentInformationToDisplay[0].text}</p>
        <ul>
          {currentInformationToDisplay[0].items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- SECTION IMAGE
const DigitalAndCloudImage = () => {
  return (
    <div className={style["digitalAndCloud__image"]}>
      <div className={style["digitalAndCloud__image--img"]}>
        <Image src={robot} alt="robot img" width={321} height={300} />
      </div>
    </div>
  );
};

// DIGITAL AND CLOUD --- MAIN COMBINED COMPONENT
const DigitalAndCloud = () => {
  return (
    <section className={style["digitalAndCloud"]}>
      <div className={style["digitalAndCloud__title"]}>
        <h2>Digital &#38; Cloud Services</h2>
      </div>
      <DigitalAndCloudNavigation />
      <DigitalAndCloudInformation />
      <div className={style["digitalAndCloud__button"]}>
        <ButtonGradient />
      </div>
      <div className={style["digitalAndCloud__number"]}>01</div>
      <DigitalAndCloudImage />
    </section>
  );
};

export default DigitalAndCloud;

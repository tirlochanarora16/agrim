import { useState } from "react";
import Image from "next/image";
import { navigationItems, benefitsContent } from "./benefitsData";

import finance from "../../../images/Cloud/finance.png";

import { ButtonPurple } from "../../UI/Button";

import style from "./Benefits.module.scss";

const Benefits = () => {
  const [currentNavigationItem, setCurrentNavigationItem] =
    useState("financial");

  const navigationChangeHandler = (event) => {
    setCurrentNavigationItem(event.target.id);
  };

  const contentToDisplay = benefitsContent.filter(
    (item) => item.navigationItem === currentNavigationItem
  );

  console.log(contentToDisplay);

  return (
    <section className={style.benefits}>
      <div className={style["benefits__learnmore"]}>
        <h1>Want to learn more about Cloud?</h1>
        <p>Understand the advantages with the Agrim Cloud Consulting Report</p>
        <div className={style["benefits__learnmore--button"]}>
          <ButtonPurple text="Get the report" />
        </div>
      </div>
      <div className={style["benefits__sectors"]}>
        <h1>How Cloud benefits your sector</h1>
        <div className={style["benefits__sectors--navigation"]}>
          {navigationItems.map((item, index) => (
            <p
              key={item + index}
              id={item.id}
              onClick={navigationChangeHandler}
              style={{
                color: currentNavigationItem === item.id ? "#0B0754" : "",
                borderBottom:
                  currentNavigationItem === item.id
                    ? "3px solid #19c8ff"
                    : "3px solid transparent",
              }}
            >
              {item.text}
            </p>
          ))}
        </div>

        <div className={style["benefits__sectors--img"]}>
          <Image src={finance} alt="finance" width={650} height={400} />
        </div>

        <div className={style["benefits__sectors--content"]}>
          <div className={style["benefits__sectors--title"]}>
            <h2>{contentToDisplay[0].title}</h2>
          </div>
          <div className={style["benefits__sectors--outcome"]}>
            <h2>OUTCOME:</h2>
            <ul>
              {contentToDisplay[0].items.map((item, index) => (
                <li key={item + index}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { AiOutlinePlus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useState } from "react";

import { questions } from "./questions";

import style from "./FAQ.module.scss";

const Question = (props) => {
  const [openQuestion, setOpenQuestion] = useState(false);

  const toggleQuestionHandler = () => setOpenQuestion(!openQuestion);

  return (
    <div className={style["faq__question"]}>
      <h2>{props.title}</h2>
      {openQuestion && <p>{props.text}</p>}
      <div
        className={style["faq__question--button"]}
        onClick={toggleQuestionHandler}
      >
        {openQuestion ? <ImCross /> : <AiOutlinePlus />}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className={style.faq}>
      <div className={style["faq__container"]}>
        <h2>FAQs</h2>
        <h1>Digital &#38; Cloud Consulting</h1>
        <div className={style["faq__questions"]}>
          {questions.map((question, index) => (
            <Question title={question.title} text={question.text} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

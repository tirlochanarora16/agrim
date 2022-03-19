import Link from "next/link";

import style from "./Button.module.scss";

export const ButtonPurple = (props) => {
  return (
    <div className={style.buttonPurple}>
      <Link href="#">{props.text}</Link>
    </div>
  );
};

const ButtonGradient = () => {
  return (
    <div className={style.buttonGradient}>
      <Link href="#">Let's work together</Link>
    </div>
  );
};

export default ButtonGradient;

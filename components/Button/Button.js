import style from "./Button.module.scss";

const Button = (props) => {
  return <div className={style.button}>{props.children}</div>;
};

export default Button;

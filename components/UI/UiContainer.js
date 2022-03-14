import style from "./UiContainer.module.scss";

const UiContaienr = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default UiContaienr;

import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import style from "./Needs.module.scss";

const NeedsItem = (props) => {
  return (
    <div className={style["needs__item"]}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

const Needs = () => {
  return (
    <section className={style.needs}>
      <div className={style["needs__head"]}>
        <h1>An uber-flexible methodology to suit your unique needs</h1>
        <div className={style["needs__button"]}>
          <Link href="#">Get in Touch</Link>
          <BsArrowRight />
        </div>
      </div>
      <div className={style["needs__container"]}>
        <NeedsItem
          title="The Power Of Together"
          text="We believe in forging lasting relationships based on knowledge building and mutual trust. This facilitates cross-team collaboration, allowing us to make faster and better decisions that ultimately result in stronger outcomes."
        />
        <NeedsItem
          title="Future-proof support"
          text="We help you realise the potential of technology for your business. To do this, we research and learn about every aspect of your business, so that we can fully understand our mission and help you get exactly where you need to be."
        />
        <NeedsItem
          title="Result Driven"
          text="We are not here to waste your time but to make your life much easier. We like to dive right in and move swiftly, keeping processes light so that we can focus on what is really important: delivering results on time and on budget."
        />
        <NeedsItem
          title="Flexibility"
          text="We are 100% committed to delivering work that really performs. We constantly validate our solutions by creating testable outputs that allow us to measure results, iterate and evolve products. It is not done until it is perfect."
        />
      </div>
    </section>
  );
};

export default Needs;

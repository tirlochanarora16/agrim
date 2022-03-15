import Image from "next/image";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";

import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";

import style from "./Clients.module.scss";

const ClientsItem = (props) => {
  return (
    <div className={style["clients__item"]}>
      <div className={style["clients__item--number"]}>
        <h6>0{props.number}</h6>
      </div>
      <div className={style["clients__item--head"]}>
        <h3>{props.title}</h3>
      </div>
      <div className={style["clients__item--img"]}>
        <Image
          src={props.img}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className={style["clients__item--list"]}>
        <ul>
          {props.items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={style["clients__item--button"]}>
        <Link href="#">Case Study</Link>
        <BsArrowRight />
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <section className={style.clients}>
      <div className={style["clients__title"]}>
        <h1>Our Clients</h1>
        <div className={style["clients__container"]}>
          <ClientsItem
            number={1}
            img={p3.src}
            alt="partner 1"
            width={399}
            height={237}
            title="Telecommunications Com..."
            items={[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Adipiscing elit, sed diam nonummy nibh euismod",
              "Tincidunt ut laoreet dolore magna aliquam erat",
              "Volutpat. Ut wisi enim ad minim veniam",
            ]}
          />
          <ClientsItem
            number={2}
            img={p4.src}
            alt="partner 2"
            width={399}
            height={228}
            title="Triple O Finance"
            items={[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Adipiscing elit, sed diam nonummy nibh euismod",
              "Tincidunt ut laoreet dolore magna aliquam erat",
              "Volutpat. Ut wisi enim ad minim veniam",
            ]}
          />
          <ClientsItem
            number={3}
            img={p1.src}
            alt="partner 3"
            width={399}
            height={228}
            title="HPHISH – Global"
            items={[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Adipiscing elit, sed diam nonummy nibh euismod",
              "Tincidunt ut laoreet dolore magna aliquam erat",
              "Volutpat. Ut wisi enim ad minim veniam",
            ]}
          />
          <ClientsItem
            number={4}
            img={p2.src}
            alt="partner 2"
            width={399}
            height={228}
            title="SKG – Global"
            items={[
              "Lorem ipsum dolor sit amet, consectetuer",
              "Adipiscing elit, sed diam nonummy nibh euismod",
              "Tincidunt ut laoreet dolore magna aliquam erat",
              "Volutpat. Ut wisi enim ad minim veniam",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;

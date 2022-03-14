import style from "./Cta.module.scss";

const CTA = () => {
  return (
    <section className={style.cta}>
      <h1>Get A Free Assessment</h1>
      <p>
        Want to understand the digital health of your business? <br /> Book a
        free 30 minutes slot below.
      </p>
      <div className={style["cta__form"]}>
        <form>
          <input type="text" id="name" placeholder="Your Name" />
          <input type="email" id="email" placeholder="Your E-mail" />
          <select name="select">
            <option value="" disabled selected>
              How can we help you?
            </option>
            <option value="option1">option1</option>
            <option value="option2">option2</option>
          </select>
          <textarea
            placeholder="Your message for us.."
            rows="4"
            cols="50"
          ></textarea>
          <button>Book your slot</button>
        </form>
      </div>
    </section>
  );
};

export default CTA;

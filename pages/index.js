import { Fragment } from "react";
import Head from "next/head";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Experts from "../components/Experts/Experts";
import Needs from "../components/Needs/Needs";
import CTA from "../components/CTA/Cta";
import Partners from "../components/Partners/Partners";
import Clients from "../components/Clients/Clients";
import Quiz from "../components/Quiz/Quiz";
import Knowledge from "../components/Knowledge/Knowledge";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Agrim</title>
      </Head>
      <Navigation />
      <Header />
      <main>
        <Experts />
        <Needs />
        <CTA />
        <Partners />
        <Clients />
        <Quiz />
        <Knowledge />
      </main>
      <Footer />
    </Fragment>
  );
}

import { Fragment } from "react";
import Head from "next/head";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Experts from "../components/Experts/Experts";
import Needs from "../components/Needs/Needs";

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
      </main>
    </Fragment>
  );
}

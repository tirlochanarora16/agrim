import { Fragment } from "react";
import Head from "next/head";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import UiContaienr from "../components/UI/UiContainer";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Agrim</title>
      </Head>
      <Navigation />
      <Header />
    </Fragment>
  );
}

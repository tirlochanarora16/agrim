import { Fragment } from "react";
import Head from "next/head";

import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Cloud/Header/Header";
import Services from "../../components/Cloud/Services/Services";
import GetStarted from "../../components/Cloud/GetStarted/GetStarted";

const Cloud = () => {
  return (
    <Fragment>
      <Head>
        <title>Agrim</title>
      </Head>
      <Navigation />
      <main>
        <Header />
        <Services />
        <GetStarted />
      </main>
    </Fragment>
  );
};

export default Cloud;

import { Fragment } from "react";
import Head from "next/head";

import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Cybersecurity/Header/Header";
import Services from "../../components/Cybersecurity/Services/Services";
import GetStarted from "../../components/Cybersecurity/GetStarted/GetStarted";

const Cybersecurity = () => {
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

export default Cybersecurity;

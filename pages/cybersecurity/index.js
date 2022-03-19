import { Fragment } from "react";
import Head from "next/head";

import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Cybersecurity/Header/Header";
import Services from "../../components/Cybersecurity/Services/Services";

const Cybersecurity = () => {
  return (
    <Fragment>
      <Head>
        <title>Agrim</title>
      </Head>
      <Navigation />
      <Header />
      <Services />
    </Fragment>
  );
};

export default Cybersecurity;

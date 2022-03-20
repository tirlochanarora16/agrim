import { Fragment } from "react";
import Head from "next/head";

import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Cloud/Header/Header";
import Services from "../../components/Cloud/Services/Services";
import GetStarted from "../../components/Cloud/GetStarted/GetStarted";
import DigitalAndCloud from "../../components/Cloud/Digital&Cloud/DigitalAndCloud";
import DigitalAndCloudProvider from "../../components/Cloud/context/digital&cloud";

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
        <DigitalAndCloudProvider>
          <DigitalAndCloud />
        </DigitalAndCloudProvider>
      </main>
    </Fragment>
  );
};

export default Cloud;

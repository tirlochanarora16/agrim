import React, { useState } from "react";

export const DigitalAndCloudContext = React.createContext();

const DigitalAndCloudProvider = (props) => {
  const [currentInformation, setCurrentInformation] = useState("ct");

  const changeCurrentInformation = (id) => {
    setCurrentInformation(id);
  };

  return (
    <DigitalAndCloudContext.Provider
      value={{ currentInformation, changeCurrentInformation }}
    >
      {props.children}
    </DigitalAndCloudContext.Provider>
  );
};

export default DigitalAndCloudProvider;

import React, { createContext, useState } from "react";

const store = createContext(null);
// export default store;
const UserContext = React.createContext({
  diagnosed: "",
  physical: "",
  mental: "",
  experience: "",
  when: "",
  scale: "",
  textar1: "",
  textar2: "",
  setDiagnosed: () => {},
  setPhysical: () => {},
  setMental: () => {},
  setExperience: () => {},
  setWhen: () => {},
  setScale: () => {},
  setTextar1: () => {},
  setTextar2: () => {},
});
export const UserContextProvider = (props) => {
  const [diagnosed, setDiagnosed] = useState();
  const [physical, setPhysical] = useState();
  const [mental, setMental] = useState();
  const [experience, setExperience] = useState();
  const [when, setWhen] = useState();
  const [scale, setScale] = useState();
  const [textar1, setTextar1] = useState();
  const [textar2, setTextar2] = useState();
  const diagnosedHandler = (value) => {
    setDiagnosed(value);
  };
  const physicalHandler = (value) => {
    setPhysical(value);
  };
  const mentalHandler = (value) => {
    setMental(value);
  };
  const experienceHandler = (value) => {
    setExperience(value);
  };

  const whenHandler = (value) => {
    setWhen(value);
  };
  const scaleHandler = (value) => {
    setScale(value);
  };
  const textar1Handler = (value) => {
    setTextar1(value);
  };
  const textar2Handler = (value) => {
    setTextar2(value);
  };
  const contextvalue = {
    diagnosed: diagnosed,
    physical: physical,
    mental: mental,
    experience: experience,
    when: when,
    scale: scale,
    textar1: textar1,
    textar2: textar2,
    setDiagnosed: diagnosedHandler,
    setPhysical: physicalHandler,
    setMental: mentalHandler,
    setExperience: experienceHandler,
    setWhen: whenHandler,
    setScale: scaleHandler,
    setTextar1: textar1Handler,
    setTextar2: textar2Handler,
  };
  return (
    <UserContext.Provider value={contextvalue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;

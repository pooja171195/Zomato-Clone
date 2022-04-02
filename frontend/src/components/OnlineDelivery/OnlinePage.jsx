import "./OnlineDelivery.css";
import TabOptions from "../tabOptions/tabOptions";
import Header from "../header/header";
import { useState } from "react";
import { OnlineDelivery } from "./OnlineDelivery";
import { Dinout } from "./Dinout";
import { Nightlife } from "./Nightlife";

export const OnlinePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      {getCorrectScreen(activeTab)}
    </>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <OnlineDelivery />;

    case "Dining Out":
      return <Dinout />;

    case "Nightlife":
      return <Nightlife />;

    default:
      return <OnlineDelivery />;
  }
};
export default OnlinePage;

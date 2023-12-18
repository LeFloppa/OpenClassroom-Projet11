import React from "react";
import "./feature.css";
import FeatureItem from "../featureitem/featureitem";
import chatIcon from "../../img/icon-chat.png";
import moneyIcon from "../../img/icon-money.png";
import securityIcon from "../../img/icon-security.png";

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        icon={chatIcon}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        icon={moneyIcon}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        icon={securityIcon}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default FeaturesSection;

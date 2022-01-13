import React from "react";
import PriceCard from "components/PriceCard/PriceCard";
export default function PricingItems({ plans, disabled }) {
  return plans.map((plan) => (
    <PriceCard
      className="price_card"
      data={plan}
      key={plan.title}
      buttonText={"Select Plan"}
      disabled={disabled}
    />
  ));
}

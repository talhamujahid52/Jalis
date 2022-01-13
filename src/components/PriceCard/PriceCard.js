import React from "react";
import PriceCardWrapper, {
  Title,
  Price,
  PricingHeader,
  PricingList,
  PriceAction,
  Button,
  PlanDescription,
  PlanPrice,
} from "./PriceCard.style";

export default function PriceCard({ className, data, buttonText, disabled }) {
  // let price, pricingPlan;

  // if (data.type === "annually") {
  //   price = Math.ceil(data.price) * 12;
  //   pricingPlan = "/per year";
  // } else {
  //   price = data.price;
  //   pricingPlan = "/per month";
  // }

  return (
    <PriceCardWrapper className={className} disabled={disabled}>
      <PricingHeader>
        {/* <Title>{data.title}</Title> */}
        <Title>Premium Plan</Title>

        {/* <Price>
          <strong>${price} USD</strong>
          <span>{pricingPlan}</span>
        </Price> */}
      </PricingHeader>
      <PlanDescription>
        Pay monthly and stop at anytime. No up front costs.Pay monthly and stop
        at anytime. No up front costs.
      </PlanDescription>
      <PlanPrice>10ريال</PlanPrice>
      <PlanDescription>Monthly</PlanDescription>
      {/* <PricingList>
        {data.features.map(feature => (
          <li key={feature.title}>
            {feature.icon}
            <span>{feature.title}</span>
          </li>
        ))}
      </PricingList> */}
      {/* <PriceAction>
        <Button>{buttonText}</Button>
      </PriceAction> */}
    </PriceCardWrapper>
  );
}

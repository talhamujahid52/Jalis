import React, { useState } from "react";
import PricingItems from "./PricingItems";
import { annuallyPlans } from "./Pricing.data";
// import PriceCard from "../../components/PriceCard/PriceCard";

import {
  PricingWrapper,
  PricingHeader,
  Title,
  Description,
  MembershipsPlanWrapper,
  PricingTableArea,
  StatueAndDatesWrapper,
  ProceedButton,
} from "./SelectedPlanDescription.style";
const SelectedPlanDescription = () => {
  const [active, setActive] = useState(false);
  let plans = [];
  plans = annuallyPlans;
  return (
    <PricingWrapper>
      <PricingHeader>
        <Title>Membership</Title>
        <Description>
          Simple Transparent pricing for everyone, whether you are local hotel
          owner or an agent.
        </Description>
      </PricingHeader>
      <MembershipsPlanWrapper>
        <h1
          style={{
            margin: "0px",
            fontWeight: "bolder",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Current Plan
        </h1>
        <PricingTableArea>
          <PricingItems plans={plans} disabled={true}></PricingItems>
          {/* <PriceCard></PriceCard> */}
          <StatueAndDatesWrapper>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  margin: "0px",
                  marginRight: "105px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  //   textAlign: "start",
                }}
              >
                Status
              </p>
              {active && (
                <p
                  style={{
                    margin: "0px",
                    marginRight: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#38BB71",
                  }}
                >
                  Active
                </p>
              )}
              {!active && (
                <p
                  style={{
                    margin: "0px",
                    marginRight: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#BA0303",
                  }}
                >
                  Expired
                </p>
              )}
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Started on
              </p>

              <p
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                10/10/2021
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Expires on
              </p>

              <p
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                10/11/2021
              </p>
            </div>
          </StatueAndDatesWrapper>
        </PricingTableArea>
      </MembershipsPlanWrapper>
      {!active && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <ProceedButton>Renew</ProceedButton>
        </div>
      )}
    </PricingWrapper>
  );
};

export default SelectedPlanDescription;

import React, { useState } from "react";
import PricingItems from "./PricingItems";
import PricingWrapper, {
  PricingHeader,
  Title,
  Description,
  // ButtonGroup,
  PricingTableArea,
  // Button,
  MembershipsPlanWrapper,
  PaymentOptionWrapper,
  AllTransactionsText,
  PaymentImagesWrapper,
  ProceedButton,
  CancelButton,
  TermsConditionsText,
} from "./Pricing.style";
import { CurrentPlan } from "../../settings/constant";
// demo data
import { monthlyPlans, annuallyPlans } from "./Pricing.data";
import MadaIcon from "../../assets/mada-icon.svg";
// import VisaIcon from "../../assets/visaMC-icon.svg";
// import stcPayIcon from "../../assets/stcPay-icon.svg";
import { useHistory } from "react-router-dom";

const Pricing = () => {
  const history = useHistory();
  const [currentPlan, setCurrentPlan] = useState("monthly");
  let plans = [];
  if (currentPlan === "monthly") {
    plans = monthlyPlans;
  }
  if (currentPlan === "annually") {
    plans = annuallyPlans;
  }

  return (
    <PricingWrapper>
      <PricingHeader>
        <Title>Membership</Title>
        <Description>
          Simple Transparent pricing for everyone, whether you are local hotel
          owner or an agent.
        </Description>
        {/* <ButtonGroup>
          <Button
            onClick={() => setCurrentPlan('monthly')}
            className={currentPlan === 'monthly' ? 'active' : null}
          >
            Monthly
          </Button>
          <Button
            onClick={() => setCurrentPlan('annually')}
            className={currentPlan === 'annually' ? 'active' : null}
          >
            Annually
          </Button>
        </ButtonGroup> */}
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
          Choose Subscription Plan
        </h1>
        <PricingTableArea>
          <PricingItems plans={plans} />
        </PricingTableArea>
      </MembershipsPlanWrapper>
      <PaymentOptionWrapper>
        <Title>Choose your Payment Method</Title>
        <AllTransactionsText>
          All transactions are secured & encrypted
        </AllTransactionsText>
        <PaymentImagesWrapper>
          <div>
            <img src={MadaIcon} style={{ height: "100%", width: "100%" }} />
          </div>
          <div>
            <img src={MadaIcon} style={{ height: "100%", width: "100%" }} />
          </div>
          <div>
            <img src={MadaIcon} style={{ height: "100%", width: "100%" }} />
          </div>
        </PaymentImagesWrapper>
      </PaymentOptionWrapper>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <TermsConditionsText>Terms & Conditions</TermsConditionsText>
        <p
          style={{
            margin: "0px",
            color: "#3A3A3A",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          I confirm that I read and agree to the terms and conditions.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // width: "100%",
          }}
        >
          <ProceedButton
            onClick={() => {
              history.push(CurrentPlan);
            }}
          >
            Proceed
          </ProceedButton>
          <CancelButton>Cancel</CancelButton>
        </div>
      </div>
    </PricingWrapper>
  );
};

export default Pricing;

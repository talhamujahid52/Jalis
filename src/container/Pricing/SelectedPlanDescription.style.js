import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const PricingWrapper = styled.div`
  /* max-width: 1140px; */
  /* margin: 0 auto; */
  padding: 30px 100px;
  margin: 20px 40px;
  border-radius: 20px;
  background: #f8f9fa;

  @media (max-width: 1200px) {
    padding: 30px 30px;
    margin: 20px 20px;
  }
  @media (max-width: 480px) {
    padding: 30 25px;
  }
`;

export const PricingHeader = styled.div`
  /* text-align: center;
  padding: 60px 0;
  @media (max-width: 480px) {
    padding: 40px 0;
  } */
`;

export const Title = styled.h2`
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 25px;
  font-weight: 700;
  /* margin-bottom: 10px; */
`;

export const Description = styled.p`
  color: #a5a5a5;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 30px;
`;

export const MembershipsPlanWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 16px #00000014;
  border-radius: 8px;
  padding: 40px 20px;
`;

export const PricingTableArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* margin: 0 -15px; */

  .price_card {
    width: calc(100% / 3 - 30px);
    margin: 0 15px;

    @media (max-width: 870px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export const StatueAndDatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: calc(100% / 3 - 30px);
  @media (max-width: 870px) {
    width: 100%;
  }
`;

export const ProceedButton = styled.button`
  border: 0px;
  background: #ed702d;
  color: white;
  padding: 5px 30px;
  border-radius: 5px;
`;

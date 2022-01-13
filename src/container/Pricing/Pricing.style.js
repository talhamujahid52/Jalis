import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const PricingWrapper = styled.div`
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

export const PaymentOptionWrapper = styled.div`
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 2px 16px #00000014;
  border-radius: 8px;
  padding: 40px 20px;
  margin-top: 20px;
  /* border: 1px solid red; */
`;
export const AllTransactionsText = styled.p`
  margin: 0px;
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 16px;
`;
export const PaymentImagesWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  div {
    height: 100px;
    width: 150px;
  }
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

export const ButtonGroup = styled.div`
  width: 244px;
  min-height: 47px;
  padding: 5px;
  border-radius: 3px;
  background-color: ${themeGet("color.2", "#F7F7F7")};
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    color: ${themeGet("text.0", "#2C2C2C")};
    font-size: 15px;
    min-width: 117px;
    min-height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;

    &.active {
      font-weight: 700;
      border-radius: 3px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.16);
      background-color: ${themeGet("color.1", "#ffffff")};
    }

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
    }
  }
`;
export const TermsConditionsText = styled.div`
  font-size: 16px;
  text-decoration: underline;
  font-weight: bold;
  margin: 0px;
  color: #3a3a3a;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ProceedButton = styled.button`
  border: 0px;
  background: #ed702d;
  color: white;
  padding: 5px 30px;
  border-radius: 5px;
`;
export const CancelButton = styled.button`
  border: 1px solid #ed702d;
  background: white;
  color: #ed702d;
  padding: 5px 30px;
  border-radius: 5px;
`;

export const Button = styled.button``;

export default PricingWrapper;

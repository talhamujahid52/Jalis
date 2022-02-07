import styled from "styled-components";

export const MainSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 40px;
  padding: 20px 200px;
  padding-bottom: 60px;
  background: #f8f9fa;
  border-radius: 20px;
  @media (max-width: 1100px) {
    padding: 20px 10px;
    margin: 0px 10px;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  border: 2px dashed #d5d5d5;
  padding: 30px;
  background: #ffffff;
  border-radius: 20px;
  @media (max-width: 1100px) {
    padding: 20px 10px;
  }
`;

export const ResortNameImagePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dashed #d5d5d5;
  padding: 20px 0px;
`;
export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 30px;
  @media (max-width: 1100px) {
    margin-right: 15px;
    height: 75px;
    width: 75px;
    min-width: 75px;
  }
`;
export const ResortName = styled.div`
  margin: 0px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
  @media (max-width: 1100px) {
    margin-right: 5px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const NameSectionAndPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LocationWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 2px dashed #d5d5d5;
  padding: 20px 0px;
`;
export const LocationName = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  /* margin-right: 20px; */
  @media (max-width: 1100px) {
    margin-right: 10px;
    font-size: 16px;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
    width: 170px;
  }
`;
export const FinalCalculationNameAndAmount = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  color: #a5a7af;
  font-family: "Noto Kufi Arabic", sans-serif;
`;
export const PaymentWrapper = styled.div`
  margin: 30px 0px;
  width: 100%;
  background: white;
  border-radius: 15px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PaymentMethodImage = styled.div`
  width: 100px;
  height: 60px;
  @media (max-width: 1100px) {
    width: 60px;
    height: 40px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const ProceedButton = styled.button`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  border: 1px solid #ed702d;

  background: #ed702d;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const CancelButton = styled.button`
  border: 1px solid #ed702d;
  background: white;
  color: #ed702d;
  padding: 10px 30px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

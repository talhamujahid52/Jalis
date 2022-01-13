import styled from "styled-components";

export const ExpandedComponentWrapper = styled.div`
  background: white;
  padding: 50px 50px;
  border-radius: 20px;
  border: 4px dashed #d8e1df;
  margin: 20px 0px;
  @media (max-width: 1100px) {
    padding: 50px 20px;
  }
`;

export const BookingAndTransactionIDWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BookingAndTransactionID = styled.div`
  text-align: center;
  padding: 15px 40px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  @media (max-width: 1100px) {
    padding: 15px 15px;
  }
`;

export const DateAndTimeHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  p {
    margin: 0px;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  border-bottom: 2px solid #d5d5d5;
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

export const LocationName = styled.p`
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 1100px) {
    margin-right: 10px;
    font-size: 16px;
    width: 170px;
  }
`;

export const BookingNotes = styled.div`
  padding: 20px 30px;
  border-radius: 20px;
  margin: 20px 0px;
  border: 2px solid #f8f9fa;
`;

export const CalculationNameAndAmount = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  color: #a5a7af;
  font-family: "Noto Kufi Arabic", sans-serif;
`;

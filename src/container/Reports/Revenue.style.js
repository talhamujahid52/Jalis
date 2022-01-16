import styled from "styled-components";

export const RevenueWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 25px 75px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    padding: 20px 10px;
    margin: 20px 0px;
  }
`;
export const RevenueHeadingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`;

export const StatsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 16px #00000014;
  border-radius: 8px;
  padding: 20px 80px;
  @media (max-width: 900px) {
    padding: 20px 10px;
  }
`;
export const MonthlyAndYearlyRevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ed702d;
  border-radius: 40px;
  padding: 60px 0px;
  width: 45%;
  /* width: 500px; */
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const MonthlyAndYearlyRevenueWrapperRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  /* border: 1px solid #ed702d; */
  /* @media (max-width: 900px) {
    flex-direction: column;
  } */
`;
export const BookingRow = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;
export const BookingRowHeadingText = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
  color: #6f6e71;
  @media (max-width: 900px) {
    font-size: 12px;
    text-align: center;
  }
`;
export const BookingRowText = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
export const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

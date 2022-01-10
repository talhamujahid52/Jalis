import styled from "styled-components";

export const ReportsWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 25px 75px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    padding: 20px 20px;
    margin: 20px 0px;
  }
`;
export const ReportHeadingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`;

export const StatsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 16px #00000014;
  border-radius: 8px;
  padding: 20px 20px;
`;
export const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const RevenueWrapper = styled.div`
  background: #ed702d;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 20px 0px 0px 0px;
`;

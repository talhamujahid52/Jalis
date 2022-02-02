import styled from "styled-components";

export const BlockedDatesWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 25px 75px;
  background: #f7f9fa;
  @media (max-width: 900px) {
    padding: 20px 20px;
    margin: 20px 0px;
  }
`;

export const BlockDatesHeadingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 3px solid #f0f1f2;
`;

export const BookSelectedDates = styled.div`
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  background: #ed702d;
  color: white;
  cursor: pointer;
`;

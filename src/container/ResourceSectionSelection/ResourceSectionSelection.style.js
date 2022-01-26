import styled from "styled-components";

export const OuterWrapper = styled.div`
  background: #f8f9fa;
  border-radius: 20px;
  padding: 20px;
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 1100px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const DateSelectionWwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NextButton = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 300px;
  color: white;
  background: #ed702d;
  border-radius: 10px;
  border: 0px;
  font-size: 20px;
  text-align: left;
  padding-left: 20px;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;

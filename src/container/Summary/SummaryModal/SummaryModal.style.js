import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 60%;
  position: absolute;
  top: 15%;
  left: 20%;
  background: white;
  padding: 20px 100px;
  border-radius: 20px;
  @media (max-width: 1100px) {
    padding: 20px 20px;
    width: 100%;
    left: 0;
  }
`;
export const TopDivWrapper = styled.div`
  padding: 20px 50px;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  /* text-align: center; */
  @media (max-width: 1100px) {
    padding: 20px 20px;
  }
`;
export const TopDivWrapperRating = styled.div`
  padding: 20px 50px;
  /* border: 1px solid #e5e5e5; */
  /* border-radius: 20px; */
  text-align: center;
  @media (max-width: 1100px) {
    padding: 20px 20px;
  }
`;
export const FinalCalculationNameAndAmount = styled.p`
  margin: 0px;
  font-size: 14px;
  font-weight: bold;
  color: #a5a7af;
  font-family: "Noto Kufi Arabic", sans-serif;
`;
export const ProceedButton = styled.button`
  border: 0px;
  background: #ed702d;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
`;
export const CancelButton = styled.button`
  border: 1px solid #ee7738;
  background: white;
  color: #ee7738;
  padding: 10px 30px;
  border-radius: 5px;
`;
export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  &:focus {
    border-color: #e7e7e7;
  }
`;

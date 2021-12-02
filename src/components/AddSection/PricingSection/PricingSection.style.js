import styled from "styled-components";

export const PricingWrapper = styled.div`
  border-radius: 20px;
  background-color: #f8f9fa;
  /* height: 500px; */
  width: 100%;
  padding: 40px;
`;
export const InputAndTitleWrap = styled.div`
  /* padding: 30px 20px;
  background: white;
  border-radius: 20px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const InputAndTitleWrapSimple = styled.div`
  padding: 30px 20px;
  margin-bottom: 40px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
  width: 100%;
`;
export const InputTitle = styled.div`
  color: #6f6e71;
  font-size: 16x;
  /* font-weight: bold; */
  margin-bottom: 5px;
`;

export const InputWrapper = styled.input`
  width: 90%;
  border-radius: 40px;
  outline: none;
  box-sizing: border-box;
  /* border: 2px solid white; */
  border: 2px solid#ccc;

  padding: 8px 16px;
  /* background: green; */
  color: #a5a5a5;
  &:focus {
    border: 2px solid#ccc;
  }
`;
export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TextHeading = styled.p`
  font-size: 18x;
  font-weight: bold;
`;
export const PriceButtons = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* margin-bottom: 10px; */
`;
export const ButtonsAndInputWrapper = styled.div`
  padding: 30px 20px;
  background: white;
  border-radius: 20px;
  margin-bottom: 40px;
`;
export const AccordianInputs = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
`;
export const DaysInputWrapper = styled.div`
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  width: 100%;
  border-radius: 20px;
  margin: 0px;
  justify-content: space-between;
`;
export const RightDaysInputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const LeftDaysInputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;
export const CheckedInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

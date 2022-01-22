import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const AddResortWrapper = styled.div`
  padding: 30px 75px;
  border-radius: 20px;
  margin: 40px 40px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    margin: 20px 20px;
  }
`;
export const AddResortInputWrapper = styled.div`
  padding: 30px 50px;
  border-radius: 20px;
  /* margin: 0px 40px; */
  background: white;
  @media (max-width: 900px) {
    /* margin: 0px 20px; */
  }
`;
export const HeadingWrapper = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
`;
export const AddServiceInputWrapper = styled.input`
  width: 100%;
  border-radius: 40px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid white;
  padding: 8px 16px;
  background: #f8f9fa;
  color: #a5a5a5;
  &:focus {
    border: 2px solid #ccc;
  }
`;
export const AddServiceTextAreaWrapper = styled.textarea`
  width: 100%;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid white;
  padding: 8px 16px;
  height: 25vh;
  /* max-height: 300px; */
  background: #f8f9fa;
  color: #a5a5a5;
  &:focus {
    border: 2px solid #ccc;
  }
`;
export const AdditionalServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
export const AdditionalServicesInput = styled.input`
  width: 400px;
  border-radius: 40px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid white;
  padding: 8px 16px;
  background: #f8f9fa;
  color: #a5a5a5;
  &:focus {
    border: 2px solid#ccc;
  }
`;
export const AddPhotoTextAndButtonWrapper = styled.div`
  width: 120px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background: #f8f9fa;
  //   border: 1px solid red;
`;
export const AddPhotosText = styled.p`
  margin: 0px;
  margin-right: 10px;
  //   color: yellow;
  /* margin-top: 10px; */
  /* background: transparent; */
`;
export const SaveButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background: #ed702d;
  color: white;
  border: 0px;
  @media (max-width: 900px) {
    width: 150px;
  }
`;
export const CancelButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: white;
  color: #ed702d;
  border: 1px solid #ed702d;
  @media (max-width: 900px) {
    width: 150px;
  }
`;

export const PricingWrapper = styled.div`
  box-shadow: 0px 2px 16px #0000000f;
  border-radius: 8px;
  border: 1px solid #f5f4f4;
`;

export default AddResortWrapper;

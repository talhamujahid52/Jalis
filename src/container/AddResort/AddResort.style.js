import styled from "styled-components";
// import { themeGet } from "@styled-system/theme-get";

const AddResortWrapper = styled.div`
  padding: 30px;
  border-radius: 20px;
  margin-right: 170px;
  margin-top: 40px;
  margin-left: 170px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;
export const HeadingWrapper = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
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
  /* background: green; */
  color: #a5a5a5;
  &:focus {
    border: 2px solid#ccc;
  }
`;
export const AddPhotoTextAndButtonWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 1px solid red;
`;
export const AddPhotosText = styled.p`
  //   color: yellow;
  margin-top: 10px;
`;
export const SaveButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 30px;
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
  border-radius: 30px;
  background: white;
  color: #a5a5a5;
  border: 1px solid #e3e3e3;
  @media (max-width: 900px) {
    width: 150px;
  }
`;

export default AddResortWrapper;

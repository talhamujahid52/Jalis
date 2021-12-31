import styled from "styled-components";

export const MyBookingsContainerWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 75px 75px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    padding: 20px 20px;
    margin: 20px 0px;
  }
`;
export const TopDivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 70px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 0px;
  }
`;
export const ImageAndTextWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;
export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 30px;
  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin-right: 15px;
    height: 75px;
    width: 75px;
    min-width: 75px;
  }
`;
export const TextWrapper = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
`;
export const SearchBarWrapper = styled.div`
  width: 60%;
  display: flex;
  background: white;
  border-radius: 40px;
  padding: 5px 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
export const SearchInput = styled.input`
  width: 80%;
  border: 0px;
  &:focus {
    outline: none;
  }
`;
export const DividerWrapper = styled.div`
  width: 300px;
  padding: 5px 20px;
  margin: 0px 20px;
  border-radius: 20px;
  background: white;
  color: #ed702d;
  font-size: 16px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

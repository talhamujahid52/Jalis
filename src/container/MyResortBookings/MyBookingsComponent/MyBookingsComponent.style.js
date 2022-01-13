import styled from "styled-components";
import { style } from "styled-system";

export const OutsideWrapper = styled.div`
  background: #2d665a;
  border-radius: 20px;
  margin: 20px 40px;
  @media (max-width: 1100px) {
    margin: 20px 0px;
    /* padding: 30px 0px; */
  }
`;

export const MainWrapper = styled.div`
  /* margin: 20px 40px; */
  padding: 30px 30px;
  width: 100%;
  background: white;
  border-radius: 18px;
  /* border: 1px solid white; */
  /* border: 1px solid red; */
  @media (max-width: 1100px) {
    /* margin: 20px 0px; */
    padding: 30px 10px;
  }
`;
export const ImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin-right: 30px;
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1100px) {
    margin-right: 15px;
    height: 75px;
    width: 75px;
    min-width: 75px;
  }
`;
export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NameAndSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
  }
`;
export const ResortName = styled.div`
  margin: 0px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  @media (max-width: 1100px) {
    margin-right: 10px;
    font-size: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const ResortPrice = styled.div`
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
  color: #ed702d;
  font-family: "Noto Kufi Arabic", sans-serif;
`;
export const ResortNameImagePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f8f9fa;
  padding: 20px 0px;
`;

export const MiddleDiv = styled.div`
  margin: 20px 0px;
`;
export const InnerMiddleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const RateResortButton = styled.div`
  margin: 0px 30px;
  width: 250px;
  padding: 10px 0px;
  border-radius: 10px;
  color: ${(props) => (!props.rateResort ? `white` : `#F6B504`)};
  font-size: 14px;
  font-weight: bold;
  background: ${(props) => (!props.rateResort ? `#314894` : `white`)};
  border: ${(props) =>
    !props.rateResort ? `2px solid transparent` : `2px solid #F6B504`};
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 200px;
  }
  @media (max-width: 1100px) {
    margin: 20px 0px;
  }
`;
export const CancelBookingButton = styled.div`
  text-align: center;
  width: 250px;
  padding: 10px 0px;
  border-radius: 10px;
  color: ${(props) => (props.cancelBooking ? `#8B8F9F` : `#FFFFFF`)};
  font-size: 14px;
  font-weight: bold;
  background: ${(props) => (props.cancelBooking ? `#F3F5F9` : `#7F7F7F`)};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 200px;
  }
`;
export const ExpandDivWrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  padding: 20px 30px;
  @media (max-width: 1100px) {
    padding: 20px 10px;
  }
`;

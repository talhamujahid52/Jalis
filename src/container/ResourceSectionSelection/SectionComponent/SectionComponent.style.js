import styled from "styled-components";

export const ComponentOuterWrapper = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  margin-bottom: 20px;
`;
export const MainWrapper = styled.div`
  width: 85%;
  padding: 25px;
  border-radius: 20px;
  background: white;
  /* margin-bottom: 20px; */
  /* border: 1px solid red; */
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BottomDiv = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const BottomLeftDiv = styled.div`
  width: 362px;
  min-width: 362px;

  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ImageWrapper = styled.div`
  height: 194px;
  width: 170px;
  border-radius: 10px;
  background: #ff51b5;
  overflow: hidden;
  @media (max-width: 600px) {
    height: 70px;
    width: 60px;
  }
`;
export const BottomRightDiv = styled.div`
  /* border: 1px solid green; */
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1100px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;
export const FeaturesWrapper = styled.div`
  border-radius: 10px;
  width: 400px;
  background: #fafafa;
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 30px;
  @media (max-width: 1100px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    column-gap: 10px;
    width: 290px;
    /* width: 300px; */
  }
  /* border: 1px solid orange; */
`;
export const FeatureIconAndText = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  p {
    margin: 0px;
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
  }
  @media (max-width: 600px) {
    padding: 10px 10px;
    p {
      margin: 0px;
      font-size: 12px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
`;
export const ResortTimingWrapper = styled.div`
  display: flex;
  align-items: center;
  /* @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justifycontent: center;
  } */
`;
export const IndividualTimeWrapper = styled.div`
  border: 1px solid #ebedf1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
  @media (max-width: 800px) {
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
export const ChooseTheResource = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  /* border: 1px solid red; */
  height: 220px;
  /* width: 15%; */
  padding: 50px 20px;
  color: #ffffff;
  /* font-size: 18px; */
  @media (max-width: 1100px) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    margin-bottom: 20px;
    padding: 10px 40px;
    height: 150px;
    width: 250px;
  }
`;

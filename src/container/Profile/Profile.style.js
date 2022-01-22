import styled from "styled-components";

export const ProfileWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 25px 75px;
  background: #f8f9fa;
  @media (max-width: 900px) {
    padding: 20px 20px;
    margin: 20px 0px;
  }
`;

export const PersonalInfoWrapper = styled.div`
  padding: 20px 20px;
  background: white;
  border-radius: 20px;
`;

export const ReviewsAndRatingWrapper = styled.div`
  margin-top: 20px;
  padding: 20px 20px;
  background: white;
  border-radius: 20px;
`;

export const ImageAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ImageWrapper = styled.div`
  width: 110px;
  height: 110px;
  background: #ed702d;
  border-radius: 100px;
  margin-right: 20px;
  @media (max-width: 900px) {
    margin-right: 10px;
    width: 70px;
    height: 70px;
  }
`;
export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 10px;
`;
export const WhatsappWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    /* align-items: center; */
    /* justify-content: space-between; */
  }
`;

export const ProceedButton = styled.button`
  border: 0px;
  background: #ed702d;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
`;
export const CancelButton = styled.button`
  border: 1px solid #ed702d;
  background: white;
  color: #ed702d;
  padding: 10px 30px;
  border-radius: 5px;
`;

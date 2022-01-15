import styled from "styled-components";

const AmenitiesWrapper = styled.div`
  padding: 29px 0;
  margin: 30px 30px;
  .amenities_title {
    margin-bottom: 30px;
  }

  a {
    &:hover {
      color: #31b8bd;
    }
  }
`;

export const AmenitiesArea = styled.div`
  padding: 20px 50px;
  background: #fafafa;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
  column-gap: 50px;
  justify-content: center;
  margin-bottom: -15px;

  /* > div {
    width: calc(100% / 4 - 10px);

    @media (max-width: 767px) {
      width: calc(100% / 3 - 10px);
      margin-bottom: 20px;
    }

    @media (max-width: 580px) {
      width: calc(100% / 2 - 10px);
      margin-bottom: 20px;
    }
  } */
`;

export default AmenitiesWrapper;

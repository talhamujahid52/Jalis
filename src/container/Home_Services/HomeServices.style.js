import styled from "styled-components";
export const SearchBarWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 40px;
  padding: 5px 20px;
  margin: 50px 0px;
  box-shadow: 0px -1px 41px #0000000d;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const SearchInput = styled.input`
  height: 60px;
  width: 100%;
  border: 0px;
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
  /* margin-bottom: 10px; */
`;

export const PriceButtons = styled.button`
  border-radius: 20px;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
`;

export const FilterImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -1px 41px #0000000d;
  border-radius: 10px;
  height: 60px;
  width: 60px;
  margin-left: 20px;
`;

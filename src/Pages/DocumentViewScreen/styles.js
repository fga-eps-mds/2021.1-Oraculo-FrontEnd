import styled from "styled-components";

export const styles = {};

export const StyledBody = styled.div`
  display: -ms-flexbox;
  align-items: center;
  margin-inline: 15rem;

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledOrganizeButtons = styled.div`
  background: #1f3541;
  border: 0px solid #5e5e5e;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  height: 4rem;
  align-items: center;
`;

export const StyledSmallButton = styled.button`
  width: 10%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  color: #ffffff;
  font-style: normal;
  font-size: 28px;
  line-height: 20px;
  text-align: center;

  background: transparent;
  cursor: pointer;
  border: none;
`;

export const StyledBigButton = styled.button`
  width: 18%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  color: #ffffff;
  font-style: normal;
  font-size: 28px;
  line-height: 20px;
  text-align: center;

  background: transparent;
  cursor: pointer;
  border: none;
`;

export const StyledTitle = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  display: flex;
  text-align: left;
  color: #000000;
`;
export const StyledFilterButton = styled.button`
  width: 10rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Montserrat;
  font-style: normal;
  font-size: 28px;
  line-height: 20px;
  text-align: center;

  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  cursor: pointer;
  border: 2px solid #000000;
`;

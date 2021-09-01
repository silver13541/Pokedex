import styled from "styled-components";

export const HomeContainer = styled.main`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  padding: 100px 0px 82px 157px;
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HomeTextContainer = styled.div`
  padding-top: 31px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 109px;
`;

export const HomePicture = styled.div``;

export const TextTittle = styled.h1`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  width: 506px;
  margin: 0px;
`;

export const TextParagraph = styled.p`
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  width: 515px;
`;

export const TextButton = styled.button`
  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  width: 231px;
  height: 66px;

  font-family: Karla;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  &:hover{  
    cursor:pointer;
  }
`;

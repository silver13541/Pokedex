import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  padding: 15px 82px 15px 158px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
&:hover{
  cursor:pointer;
}`;

export const HeaderNavbar = styled.nav`
  ul {
    display: inline-flex;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    margin:0px;
  }
  li {
    list-style-type: none;
    margin-right: 54px;
    display:flex;
    align-items:center;
    &:hover{
      cursor:pointer;
      border-bottom: 1px solid black;
    }
  }
`;

export const HeaderToggle = styled.div`

`

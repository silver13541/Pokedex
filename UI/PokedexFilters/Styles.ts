import styled from "styled-components";

export const PokedexContainer = styled.main`
  padding: 73px 158px 0 158px;
  background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
`;

export const PokedexTitle = styled.h1`
  margin: 0px;
  letter-spacing: 3px;
  font-family: Karla;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
`;

export const PokedexInput = styled.input`
  width: 97%;
  outline: 0;
  margin: 35px 20px 35px 20px;
  border: 0px;
  border-radius: 40px;
  height: 53px;
  padding-left: 31px;
  padding-right: 31px;
  background: #f2f2f2;
  box-shadow: 4px 4px 16px rgb(1 28 64 / 20%);
`;

export const PokedexFiltersContainer = styled.div`
  display: flex;
  padding-left: 4.5%;
  width: 50%;
  justify-content: space-between;
`;

export const PokedexFilter = styled.div``;

export const FilterButton = styled.button`
  background: #f2f2f2;
  width: 135px;
  height: 21px;
  border: 0;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* display: flex; */
  line-height: 20px;
`;

export const TypeContainer = styled.div`
  display: grid;
  position: absolute;
  width: 21%;
  z-index: 1;
  margin-top: 0.5%;
  grid-template-columns: 1fr 1fr 1fr;
  background: #f2f2f2;
  box-shadow: 4px 4px 8px rgb(1 28 64 / 20%);
  border-radius: 8px;
  padding: 18px;

  p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 0;
  }
`;

export const TypeContainerRow = styled.div`
  display: flex;
  align-items: center;
`;

export const PokedexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 53px;
  width: 100%;
  margin-bottom: -2%;
`;

export const PokedexPagesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 44%;
`;

export const PokedexPages = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 3%;
`;

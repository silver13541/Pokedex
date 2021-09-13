import styled from "styled-components";

export const PokemonContainer = styled.div`
  background: #f6f7f9;
  border-radius: 8px;
  display: flex;
  width: 30%;
  margin-bottom: 6%;
  height: 136px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
`;

export const PokemonInfo = styled.div`
  width: 40%;
  padding-left: 8%;
  display: flex;
  flex-direction: column;
`;

export const PokemonImage = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  border-radius: 0px 8px 8px 0px;
  img {
    width: 70%;
  }
`;

export const PokemonTitle = styled.h3`
  font-family: Karla;
  font-style: normal;
  margin: 5% 0 17% 0;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`;
export const PokemonStats = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PokemonAttack = styled.div`
  position: relative;
  text-align: center;
  span {
    top: 0;
    position: absolute;
    left: 0;
    padding-left: 27%;
    padding-top: 23%;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
  }
  p {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
  }
`;

export const PokemonDefense = styled.div`
  position: relative;
  text-align: center;
  span {
    top: 0;
    position: absolute;
    left: 0;
    padding-left: 30%;
    padding-top: 21%;
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
  }
  p {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  justify-content: space-between;
  margin-top: 9%;
`;

export const TypesItem = styled.div`
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  display: flex;
  width: 43%;
  justify-content: center;
`;

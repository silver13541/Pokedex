import styled from "styled-components";

export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
`;

export const ModalActive = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  pointer-events: all;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transform: scale(0.5)
  height: 200px;
  width: 400px;
`;

export const ModalContentActive = styled.div`
  transform: scale(1);
  border-radius: 12px;
  background-color: white;
  height: 44vh;
  display: flex;
  width: 54.7vw;
`;

export const ModalContainerImage = styled.div`
  width: 45.8%;
  position: relative;
  display: flex;
  padding: 16px 10px 6px 12px;
  border-radius: 12px 0 0 12px;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 88%;
  }
`;

export const ContainerTypes = styled.div`
  display: flex;
  position: absolute;
  bottom: 5%;
  right: 0;
`;

export const ContainerTypesItem = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  border-radius: 11px;
  background-color: wheat;
  margin: 0 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;

export const ModalInfo = styled.div`
  width: 54.2%;
  padding: 30px 20px 25px 15px;
  border-radius: 0 15px 15px 0;
  font-family: Karla;
  font-style: normal;
`;

export const ModalInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

export const HeaderGeneration = styled.div`
  display: flex;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
`;

export const HeaderExperience = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  span {
    font-family: Karla;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    position: absolute;
  }
`;

export const InfoAbilities = styled.div`
  margin-top: 25px;
  background: wheat;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  border-radius: 8px;
  width: 67%;
  padding: 12px 80px 10px 28px;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AbilitiesItem = styled.div``;

export const HealthExpContainer = styled.div`
  background: wheat;
  box-shadow: 4px 4px 4px rgb(33 33 33 / 10%);
  border-radius: 8px;
  margin-top: 21px;
  padding: 18.5px 19px 8px 19.5px;
  display: flex;
`;

export const HealtContainer = styled.div`
  width: 50%;
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const HealthLoader = styled.div`

`

export const ExperienceContainer = styled.div`
  width: 50%;
  display: flex;
  width: 50%;
  flex-direction: column;
`;

export const ExperienceLoader = styled.div`

`

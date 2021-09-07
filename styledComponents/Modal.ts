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
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 44vh;
  width: 50vw;
`

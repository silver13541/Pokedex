import React, { useContext } from "react";
import { MyContext } from "../context/PokemonContext";
import {
  Modal,
  ModalActive,
  ModalContent,
  ModalContentActive,
} from "../styledComponents/Modal";

export const ModalWindow = () => {
  const context = useContext(MyContext);

  return (
    <>
      {context.modalActive ? (
        <ModalActive onClick={() => context.setModalActive(false)}>
          <ModalContentActive>sadads</ModalContentActive>
        </ModalActive>
      ) : (
        <></>
      )}
    </>
  );
};

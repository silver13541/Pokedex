import React from "react";
import pageButton from "../images/EllipsePage.svg";
import Image from "next/image";
import {
  PokedexPages,
  PokedexPagesContainer,
} from "../styledComponents/Pokedex";

export const Pagination = ({ pokemonsPerPage, totalPokemons, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PokedexPagesContainer>
      <PokedexPages>
        {pageNumbers.map((number) => (
          <Image src={pageButton} onClick={() => paginate(number)}/>
        ))}
      </PokedexPages>
    </PokedexPagesContainer>
  );
};

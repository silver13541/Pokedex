import React, { useContext } from "react";
import pageButton from "../images/EllipsePage.svg";
import Image from "next/image";
import {
  PokedexPages,
  PokedexPagesContainer,
} from "../styledComponents/Pokedex";
import { MyContext } from "../context/PokemonContext";
import { PaginationInterface } from "../interfaces/Pagination";

export const Pagination = ({ pokemonsPerPage, totalPokemons } : PaginationInterface) => {
  const context = useContext(MyContext);
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PokedexPagesContainer>
      <PokedexPages>
        {pageNumbers.map((number,index) => (
          <Image key={index} src={pageButton} onClick={() => context.setCurrentPage(number)} />
        ))}
      </PokedexPages>
    </PokedexPagesContainer>
  );
};

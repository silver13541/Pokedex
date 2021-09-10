import React, { useContext } from "react";
import { PokedexPages, PokedexPagesContainer } from "../PokedexFilters/Styles";
import { PokemonContext } from "../../../context/PokemonContext";
import { IPagination } from "../../../interfaces/Pagination";
import { EllipsePage }  from "../../images/EllipsePage";

export const Pagination = ({ pokemonsPerPage, totalPokemons }: IPagination) => {
  const {setCurrentPage} = useContext(PokemonContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PokedexPagesContainer>
      <PokedexPages>
        {pageNumbers.map((number, index) => (
          <div key={index} onClick={() => setCurrentPage(number)}>
            <EllipsePage />
          </div>
        ))}
      </PokedexPages>
    </PokedexPagesContainer>
  );
};

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import arrowFilter from "../images/ArrowFilter.svg";
import {
  FilterButton,
  PokedexFilter,
  PokedexFiltersContainer,
  TypeContainer,
  TypeContainerRow,
} from "../styledComponents/Pokedex";
import { PokemonContext } from "../context/PokemonContext";

export const PokedexFilters = () => {
  const [isShown, setIsShown] = useState(false);
  const [allTypes, setAllTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const context = useContext(PokemonContext)
  console.log(context.allPokemons = ['1', '2', '3', '4', '5', '6']);
  

  useEffect(() => {
    getAllTypes();
  }, []);

  const getAllTypes = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();
    setAllTypes(data.results);
  };
  const toggleFIeldset = () => setIsShown(!isShown);

  return (
    <PokedexFiltersContainer>
      <PokedexFilter>
        <FilterButton onClick={toggleFIeldset}>
          <div style={{ width: "100%" }}>Tipo</div>
          <Image src={arrowFilter} />
        </FilterButton>
        {isShown && (
          <TypeContainer>
            {allTypes.map((type) => (
              <TypeContainerRow>
                <input type="checkbox" name={type.name} value={type.name} />
                <p>{type.name}</p>
              </TypeContainerRow>
            ))}
          </TypeContainer>
        )}
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div style={{ width: "100%" }}>Ataque</div>
          <Image src={arrowFilter} />
        </FilterButton>
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div style={{ width: "100%" }}>Experiencia</div>
          <Image src={arrowFilter} />
        </FilterButton>
      </PokedexFilter>
    </PokedexFiltersContainer>
  );
};

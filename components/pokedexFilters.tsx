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
import { MyContext, SelectedContext } from "../context/PokemonContext";
import { PokemonInterface } from "../interfaces/Pokemon";

export const PokedexFilters = () => {
  const [isShown, setIsShown] = useState(false);
  const [allTypes, setAllTypes] = useState<PokemonInterface[]>([]);
  const context = useContext(SelectedContext);

  useEffect(() => {
    getAllTypes();
  }, []);

  const getAllTypes = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();
    setAllTypes(data.results);
  };
  
  const toggleFIeldset = () => setIsShown(!isShown);

  const handleCheckboxChange = (e: { target: { checked: boolean; value: string; }; }) => {
    if (e.target.checked == true){
      context.setSelectedTypes([...context.selectedTypes, e.target.value]);
    }else{
        let check_list: string[] = [];
        context.selectedTypes.map(check => {
            if (check !== e.target.value){
                check_list.push(check);
            }
        });
        context.setSelectedTypes(check_list);
    }
};

  return (
    <PokedexFiltersContainer>
      <PokedexFilter>
        <FilterButton onClick={toggleFIeldset}>
          <div style={{ width: "100%" }}>Tipo</div>
          <Image src={arrowFilter} />
        </FilterButton>
        {isShown && (
          <TypeContainer>
            {allTypes.map((type, index) => (
              <TypeContainerRow key={index}>
                <input onChange={handleCheckboxChange} type="checkbox" name={type.name} value={type.name} />
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

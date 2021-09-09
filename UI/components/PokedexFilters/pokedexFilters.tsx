import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  FilterButton,
  PokedexFilter,
  PokedexFiltersContainer,
  TypeContainer,
  TypeContainerRow,
} from "./Styles";
import { SelectedContext } from "../../../context/SelectedPokemon";
import { IPokemon } from "../../../interfaces/Pokemon";
import { ArrowFilter } from "../../images/ArrowFilter";

export const PokedexFilters = () => {
  const [isShown, setIsShown] = useState(false);
  const [allTypes, setAllTypes] = useState<IPokemon[]>([]);
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
  console.log(allTypes);
  

  return (
    <PokedexFiltersContainer>
      <PokedexFilter>
        <FilterButton onClick={toggleFIeldset}>
          <div>Tipo</div>
          <ArrowFilter/>
        </FilterButton>
        {isShown && (
          <TypeContainer>
            {allTypes.map((type) => (
              <TypeContainerRow key={type.name}>
                <input onChange={handleCheckboxChange} type="checkbox" name={type.name} value={type.name} />
                <p>{type.name}</p>
              </TypeContainerRow>
            ))}
          </TypeContainer>
        )}
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div>Ataque</div>
          <ArrowFilter/>
        </FilterButton>
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div>Experiencia</div>
          <ArrowFilter/>
        </FilterButton>
      </PokedexFilter>
    </PokedexFiltersContainer>
  );
};

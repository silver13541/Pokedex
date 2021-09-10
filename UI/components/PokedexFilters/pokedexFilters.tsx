import React, { useContext, useEffect, useState } from "react";
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
  const {selectedTypes,setSelectedTypes} = useContext(SelectedContext);

  const getAllTypes = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();
    setAllTypes(data.results);
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  const toggleFIeldset = () => setIsShown(!isShown);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedTypes([...selectedTypes, e.target.value]);
    } 
    else {
      let check_list: string[] = [];
      selectedTypes.map((check) => {
        if (check !== e.target.value) {
          check_list.push(check);
        }
      });
      setSelectedTypes(check_list);
    }
  };

  return (
    <PokedexFiltersContainer>
      <PokedexFilter>
        <FilterButton onClick={toggleFIeldset}>
          <div>Tipo</div>
          <ArrowFilter />
        </FilterButton>
        {isShown && (
          <TypeContainer>
            {allTypes.map((type) => (
              <TypeContainerRow key={type.name}>
                <input
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  name={type.name}
                  value={type.name}
                />
                <p>{type.name}</p>
              </TypeContainerRow>
            ))}
          </TypeContainer>
        )}
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div>Ataque</div>
          <ArrowFilter />
        </FilterButton>
      </PokedexFilter>
      <PokedexFilter>
        <FilterButton>
          <div>Experiencia</div>
          <ArrowFilter />
        </FilterButton>
      </PokedexFilter>
    </PokedexFiltersContainer>
  );
};

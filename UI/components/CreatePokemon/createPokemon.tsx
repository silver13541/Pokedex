import React, { useContext } from "react";
import {
  PokemonAttack,
  PokemonContainer,
  PokemonDefense,
  PokemonImage,
  PokemonInfo,
  PokemonStats,
  PokemonTitle,
  PokemonTypes,
  TypesItem,
} from "./Styles";
import Image from "next/image";
import { CreatePokemonInterface, PokemonColors } from "../../../interfaces/Pokemon";
import { PokemonContext } from "../../../context/PokemonContext";
import { Ellipse } from "../../images/Ellipse";

export const CreatePokemon = ({
  name,
  stats,
  types,
  sprites,
  base_experience,
  abilities,
}: CreatePokemonInterface) => {
  const { setModalActive, setPokemonModal } = useContext(PokemonContext);

  const Color: PokemonColors = {
    grass: "#64D368",
    fire: "#B33327",
    water: "#5BC7FA",
    poison: "#9023a1",
    electric: "#eaff00",
    bug: "#52ff03",
    ground: "#f0ad05",
    normal: "#b7b8b0",
    fighting: '#e5daf7',
    psychic: '#fc3ac5',
    flying: '#3a41fc',
    rock: '#a0a1b0',
    steel: '#e1e2f2',
    fairy: '#ffbae8',
  };

  return (
    <PokemonContainer
      onClick={() => {
        setModalActive(true);
        setPokemonModal({
          name,
          stats,
          types,
          sprites,
          base_experience,
          abilities,
        });
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <PokemonInfo>
        <PokemonTitle>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </PokemonTitle>
        <PokemonStats>
          <PokemonAttack>
            <Ellipse />
            <span>{stats[1].base_stat}</span>
            <p>Attack</p>
          </PokemonAttack>
          <PokemonDefense>
            <Ellipse />
            <span>{stats[2].base_stat}</span>
            <p>Defense</p>
          </PokemonDefense>
        </PokemonStats>
        <PokemonTypes>
          {types.map((type) => (
            <TypesItem style={{ backgroundColor: `${Color[type.type.name]}` }}>
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </TypesItem>
          ))}
        </PokemonTypes>
      </PokemonInfo>
      <PokemonImage style={{ backgroundColor: `${Color[types[0].type.name]}` }}>
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </PokemonImage>
    </PokemonContainer>
  );
};

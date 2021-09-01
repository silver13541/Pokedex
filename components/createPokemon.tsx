import React from "react";
import {
  CreatePokemonAttack,
  CreatePokemonContainer,
  CreatePokemonDefense,
  CreatePokemonImage,
  CreatePokemonInfo,
  CreatePokemonStats,
  CreatePokemonTitle,
  CreatePokemonTypes,
  TypesItem,
} from "../styledComponents/CreatePokemon";
import Image from "next/image";
import ellipse from "../images/Ellipse.svg";

export const CreatePokemon = ({ name, attack, defense, types, image }) => {
  return (
    <CreatePokemonContainer>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <CreatePokemonInfo>
        <CreatePokemonTitle>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </CreatePokemonTitle>
        <CreatePokemonStats>
          <CreatePokemonAttack>
            <Image src={ellipse} />
            <span>{attack}</span>
            <p>Attack</p>
          </CreatePokemonAttack>
          <CreatePokemonDefense>
            <Image src={ellipse} />
            <span>{defense}</span>
            <p>Defense</p>
          </CreatePokemonDefense>
        </CreatePokemonStats>
        <CreatePokemonTypes>
          {types.map((type) => (
            <TypesItem>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</TypesItem>
          ))}
        </CreatePokemonTypes>
      </CreatePokemonInfo>
      <CreatePokemonImage>
        <img src={image} alt={name} />
      </CreatePokemonImage>
    </CreatePokemonContainer>
  );
};

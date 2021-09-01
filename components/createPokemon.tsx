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
  let color = "";
  switch (types[0].type.name) {
    case "grass":
      color = "#64D368";
      break;
    case "fire":
      color = "#B33327";
      break;
    case "water":
      color = "#5BC7FA";
      break;
    default:
      color = "#F2CB07";
  }

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
          {types.map((type) => {
            switch (type.type.name) {
              case "grass": return (
                <TypesItem style={{ backgroundColor: "#64D368" }}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </TypesItem> )
              case "fire": return (
                <TypesItem style={{ backgroundColor: "#B33327" }}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </TypesItem> )
              case "water": return (
                <TypesItem style={{ backgroundColor: "#5BC7FA" }}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </TypesItem> )
              default: return (
                <TypesItem style={{ backgroundColor: "#F2CB07" }}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </TypesItem> )
            }
          })}
        </CreatePokemonTypes>
      </CreatePokemonInfo>
      <CreatePokemonImage style={{ backgroundColor: color }}>
        <img src={image} alt={name} />
      </CreatePokemonImage>
    </CreatePokemonContainer>
  );
};

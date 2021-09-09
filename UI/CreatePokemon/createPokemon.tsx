import React, { useContext } from "react";
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
} from "./Styles";
import Image from "next/image";
import ellipse from "../../images/Ellipse.svg";
import {CreatePokemonInterface} from "../../interfaces/Pokemon";
import { MyContext } from "../../context/PokemonContext";

export const CreatePokemon = ({ name, stats, types, sprites, base_experience, abilities }: CreatePokemonInterface)  => {
  const context = useContext(MyContext)
  
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
    case "poison":
      color = "#9023a1";
      break;
    case "electric":
      color = "#eaff00";
      break;
    case "bug":
      color = "#52ff03";
      break;
    case "ground":
      color = "#f0ad05";
      break;
    case "normal":
      color = "#b7b8b0";
      break;
    default:
      color = "b7b8b0";
  }

  return (
    <CreatePokemonContainer onClick={() => {context.setModalActive(true)
    context.setPokemonModal({ name, stats, types, sprites, base_experience, abilities })}
    }>
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
            <span>{stats[1].base_stat}</span>
            <p>Attack</p>
          </CreatePokemonAttack>
          <CreatePokemonDefense>
            <Image src={ellipse} />
            <span>{stats[2].base_stat}</span>
            <p>Defense</p>
          </CreatePokemonDefense>
        </CreatePokemonStats>
        <CreatePokemonTypes>
          {types.map((type) => {
            switch (type.type.name) {
              case "grass":
                return (
                  <TypesItem style={{ backgroundColor: "#64D368" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "fire":
                return (
                  <TypesItem style={{ backgroundColor: "#B33327" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "water":
                return (
                  <TypesItem style={{ backgroundColor: "#5BC7FA" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "poison":
                return (
                  <TypesItem style={{ backgroundColor: "#9023a1" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "bug":
                return (
                  <TypesItem style={{ backgroundColor: "#52ff03" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "electric":
                return (
                  <TypesItem style={{ backgroundColor: "#eaff00" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              case "ground":
                return (
                  <TypesItem style={{ backgroundColor: "#f0ad05" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
              default:
                return (
                  <TypesItem style={{ backgroundColor: "#b7b8b0" }}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </TypesItem>
                );
            }
          })}
        </CreatePokemonTypes>
      </CreatePokemonInfo>
      <CreatePokemonImage style={{ backgroundColor: color }}>
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </CreatePokemonImage>
    </CreatePokemonContainer>
  );
};

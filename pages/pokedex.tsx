import Head from "next/head";
import React, { useEffect, useState } from "react";
import { CreatePokemon } from "../components/createPokemon";
import { Footer } from "../components/footer";
import {
  PokedexContainer,
  PokedexFilter,
  PokedexFilterContainer,
  PokedexFilters,
  PokedexGrid,
  PokedexInput,
  PokedexPages,
  PokedexPagesContainer,
  PokedexSelect,
  PokedexTitle,
} from "../styledComponents/Pokedex";
import pageButton from "../images/EllipsePage.svg";
import Image from "next/image";

const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=45"
  );
  console.log(allPokemons);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <PokedexContainer>
      <Head>
        <title>Pokedex</title>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      ></link>
      <PokedexTitle>
        800 <b>Pokemons</b> for you to choose your favorite
      </PokedexTitle>
      <PokedexInput placeholder="Encuentra tu pokémon..." />
      <PokedexFilters>
        <PokedexFilter>
          <PokedexSelect>
            <option>Tipo</option>
          </PokedexSelect>
          <PokedexFilterContainer></PokedexFilterContainer>
        </PokedexFilter>
        <PokedexFilter>
          <PokedexSelect>
            <option>Ataque</option>
          </PokedexSelect>
          <PokedexFilterContainer></PokedexFilterContainer>
        </PokedexFilter>
        <PokedexFilter>
          <PokedexSelect>
            <option>Experiencia</option>
          </PokedexSelect>
          <PokedexFilterContainer></PokedexFilterContainer>
        </PokedexFilter>
      </PokedexFilters>
      <PokedexGrid>
        {allPokemons.map((pokemon, index) => (
          <CreatePokemon
            name={pokemon.name}
            attack={pokemon.stats[1].base_stat}
            defense={pokemon.stats[2].base_stat}
            types={pokemon.types}
            image={pokemon.sprites.other.dream_world.front_default}
            key={index}
          />
        ))}
      </PokedexGrid>
      <PokedexPagesContainer>
        <PokedexPages>
          <Image src={pageButton} />
          <Image src={pageButton} />
          <Image src={pageButton} />
        </PokedexPages>
      </PokedexPagesContainer>
      <Footer />
    </PokedexContainer>
  );
};

export default Pokedex;

import Image from "next/image";
import React from "react";
import {
  HomeContainer,
  HomeContent,
  HomePicture,
  HomeTextContainer,
  TextButton,
  TextParagraph,
  TextTittle,
} from "../src/UI/styles/stylesPage/StylesHome";
import pokemon from "../src/UI/images/pokemonHome.png";
import { Footer } from "../src/UI/components/Footer/footer";
import { useRouter } from "next/dist/client/router";
import { usePokemonContext } from "../context/PokemonContext";

const Home = () => {
  const router = useRouter();
  const { modalRegistration } = usePokemonContext();
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <HomeTextContainer>
            <TextTittle>
              <b>Find</b> all your favorite <b>Pokemon</b>
            </TextTittle>
            <TextParagraph>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </TextParagraph>
            <TextButton onClick={() => router.push("/pokedex")}>
              See pokemons
            </TextButton>
          </HomeTextContainer>
          <HomePicture style={{ zIndex: modalRegistration && -1 }}>
            <Image src={pokemon} alt="pokemon" />
          </HomePicture>
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;

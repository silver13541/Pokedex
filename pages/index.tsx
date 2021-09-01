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
} from "../styledComponents/Home";
import pokemon from "../images/pokemonHome.png";
import { Footer } from "../components/footer";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <HomeTextContainer>
            <TextTittle>
              <b>Find</b> all your favorite <b>Pokemon</b>
            </TextTittle>
            <TextParagraph>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </TextParagraph>
            <TextButton onClick={() => router.push('/pokedex')}>See pokemons</TextButton>
          </HomeTextContainer>
          <HomePicture>
            <Image src={pokemon} alt="pokemon" />
          </HomePicture>
        </HomeContent>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;

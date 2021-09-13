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
} from "../UI/styles/stylesPage/StylesHome";
import pokemon from "../UI/images/pokemonHome.png";
import { Footer } from "../UI/components/Footer/footer";
import { useRouter } from "next/dist/client/router";

const Home = () => {
  const router = useRouter();
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

import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNavbar,
} from "./Styles";
import { useRouter } from "next/dist/client/router";
import { Logo } from "../../images/Logo";
import { Toggle } from "../../images/Toggle";
import { RegistrationLogo } from "../../images/RegistrationLogo";
import { usePokemonContext } from "../../../../context/PokemonContext";

export const Header = () => {
  const router = useRouter();
  const { modalRegistration, setModalRegistration } = usePokemonContext();

  return (
    <HeaderContainer
      style={{ position: modalRegistration ? "static" : "sticky" }}
    >
      <HeaderContent>
        <HeaderLogo onClick={() => router.push("/")}>
          <Logo />
        </HeaderLogo>
        <HeaderNavbar>
          <ul>
            <li onClick={() => router.push("/")}>Home</li>
            <li onClick={() => router.push("/pokedex")}>Pokedex</li>
            <li>Legendaries</li>
            <li>Compare</li>
            <li>
              <Toggle />
            </li>
            <li onClick={() => setModalRegistration(true)}>
              <RegistrationLogo />
            </li>
          </ul>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  );
};

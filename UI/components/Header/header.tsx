import React from "react";
import Image from 'next/image';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNavbar } from "./Styles";
import { useRouter } from "next/dist/client/router";
import { Logo } from "../../images/Logo";
import { Toggle } from "../../images/Toggle";

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo onClick={() => router.push('/')}>
          <Logo/>
        </HeaderLogo>
        <HeaderNavbar>
          <ul>
            <li onClick={() => router.push('/')}>Home</li>
            <li onClick={() => router.push('/pokedex')}>Pokedex</li>
            <li>Legendaries</li>
            <li>Compare</li>
            <li style={{marginRight: 0, border: 0}}><Toggle/></li>
          </ul>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  );
};

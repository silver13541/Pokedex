import React from "react";
import Image from 'next/image';
import logo from '../../images/Logo.svg';
import toggle from '../../images/Toggle.svg';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNavbar } from "./Styles";
import { useRouter } from "next/dist/client/router";

export const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo onClick={() => router.push('/')}>
          <Image src={logo} alt='Logo'/>
        </HeaderLogo>
        <HeaderNavbar>
          <ul>
            <li onClick={() => router.push('/')}>Home</li>
            <li onClick={() => router.push('/pokedex')}>Pokedex</li>
            <li>Legendaries</li>
            <li>Compare</li>
            <li style={{marginRight: 0, border: 0}}><Image src={toggle} alt='toggle'/></li>
          </ul>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  );
};

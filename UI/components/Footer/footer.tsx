import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { FooterContainer, FooterContent, FooterHeart, FooterLink } from './Styles'

export const Footer = () => {
    const router = useRouter();
    return (
        <FooterContainer>
            <FooterContent>
                <FooterHeart>
                    Make with ❤️
                </FooterHeart>
                <FooterLink onClick={() => router.push('https://github.com/silver13541/Pokedex')}>
                    github
                </FooterLink>
            </FooterContent>
        </FooterContainer>
    )
}

import React from 'react'
import { FooterContainer, FooterContent, FooterHeart, FooterLink } from '../styledComponents/Footer'

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterHeart>
                    Make with ❤️
                </FooterHeart>
                <FooterLink>
                    github
                </FooterLink>
            </FooterContent>
        </FooterContainer>
    )
}

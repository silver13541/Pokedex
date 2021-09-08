import React, { useContext } from "react";
import { MyContext } from "../context/PokemonContext";
import { CreatePokemonInterface } from "../interfaces/Pokemon";
import {
  AbilitiesContainer,
  AbilitiesItem,
  ContainerTypes,
  ContainerTypesItem,
  ExperienceContainer,
  ExperienceLoader,
  HeaderExperience,
  HeaderGeneration,
  HeaderTitle,
  HealtContainer,
  HealthExpContainer,
  HealthLoader,
  InfoAbilities,
  ModalActive,
  ModalContainerImage,
  ModalContentActive,
  ModalInfo,
  ModalInfoHeader,
} from "../styledComponents/Modal";
import Image from "next/image";
import exp from "../images/Exp.svg";

interface ModalWindowInterface {
  pokenModal: CreatePokemonInterface;
}

export const ModalWindow = ({ pokenModal }: ModalWindowInterface) => {
  const context = useContext(MyContext);

  return (
    <>
      {context.modalActive ? (
        <ModalActive onClick={() => context.setModalActive(false)}>
          <ModalContentActive>
            <ModalContainerImage>
              <img src={pokenModal.sprites.other.dream_world.front_default} />
              <ContainerTypes>
                {pokenModal.types.map((type, index) => (
                  <ContainerTypesItem key={index}>
                    <span>
                      {type.type.name.charAt(0).toUpperCase() +
                        type.type.name.slice(1)}
                    </span>
                  </ContainerTypesItem>
                ))}
              </ContainerTypes>
            </ModalContainerImage>
            <ModalInfo>
              <ModalInfoHeader>
                <HeaderTitle>
                  {pokenModal.name.charAt(0).toUpperCase() +
                    pokenModal.name.slice(1)}
                </HeaderTitle>
                <HeaderGeneration>
                  <span style={{alignSelf: 'end'}}>Generation 1</span>
                  <HeaderExperience>
                    <Image src={exp} />
                    <span>{pokenModal.base_experience}</span>
                  </HeaderExperience>
                </HeaderGeneration>
              </ModalInfoHeader>
              <InfoAbilities>
                <span>Abilities</span>
                <AbilitiesContainer>
                  {pokenModal.abilities.map((ability, index) => (
                    <AbilitiesItem key={index}>
                      {ability.ability.name.charAt(0).toUpperCase() +
                        ability.ability.name.slice(1)}
                    </AbilitiesItem>
                  ))}
                </AbilitiesContainer>
              </InfoAbilities>
              <HealthExpContainer>
                <HealtContainer>
                  <span>Healthy Points</span>
                  {pokenModal.stats[0].base_stat}
                  <HealthLoader>

                  </HealthLoader>
                </HealtContainer>
                <ExperienceContainer>
                  <span>Experience</span>
                  {pokenModal.base_experience}
                  <ExperienceLoader>
                    
                  </ExperienceLoader>
                </ExperienceContainer>
              </HealthExpContainer>
            </ModalInfo>
          </ModalContentActive>
        </ModalActive>
      ) : (
        <></>
      )}
    </>
  );
};

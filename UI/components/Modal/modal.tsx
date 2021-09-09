import React, { useContext } from "react";
import { MyContext } from "../../../context/PokemonContext";
import { CreatePokemonInterface } from "../../../interfaces/Pokemon";
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
} from "./Styles";
import Image from "next/image";
import { Exp } from "../../images/Exp";

export const ModalWindow = ({ sprites,types,name,base_experience,abilities,stats }: CreatePokemonInterface) => {
  const context = useContext(MyContext);

  return (
    <>
      {context.modalActive ? (
        <ModalActive
          onClick={(e) => {
            context.setModalActive(false);
            e.stopPropagation();
          }}
        >
          <ModalContentActive onClick={(e) => e.stopPropagation()}>
            <ModalContainerImage>
              <img src={sprites.other.dream_world.front_default} />
              <ContainerTypes>
                {types.map((type, index) => (
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
                  {name.charAt(0).toUpperCase() +
                    name.slice(1)}
                </HeaderTitle>
                <HeaderGeneration>
                  <span style={{ alignSelf: "end" }}>Generation 1</span>
                  <HeaderExperience>
                    <Exp/>
                    <span>{base_experience}</span>
                  </HeaderExperience>
                </HeaderGeneration>
              </ModalInfoHeader>
              <InfoAbilities>
                <span>Abilities</span>
                <AbilitiesContainer>
                  {abilities.map((ability, index) => (
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
                  {stats[0].base_stat}
                  <HealthLoader></HealthLoader>
                </HealtContainer>
                <ExperienceContainer>
                  <span>Experience</span>
                  {base_experience}
                  <ExperienceLoader></ExperienceLoader>
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

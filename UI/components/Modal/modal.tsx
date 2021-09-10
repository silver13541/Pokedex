import React, { useContext } from "react";
import { PokemonContext } from "../../../context/PokemonContext";
import { CreatePokemonInterface } from "../../../interfaces/Pokemon";
import {
  AbilitiesContainer,
  AbilitiesItem,
  ContainerTypes,
  ContainerTypesItem,
  ExperienceContainer,
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
import { Exp } from "../../images/Exp";

export const ModalWindow = ({
  sprites,
  types,
  name,
  base_experience,
  abilities,
  stats,
}: CreatePokemonInterface) => {
  const { modalActive, setModalActive } = useContext(PokemonContext);

  const formatTitle = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      {modalActive && (
        <ModalActive
          onClick={(e) => {
            setModalActive(false);
            e.stopPropagation();
          }}
        >
          <ModalContentActive onClick={(e) => e.stopPropagation()}>
            <ModalContainerImage>
              <img src={sprites.other.dream_world.front_default} />
              <ContainerTypes>
                {types.map((type, index) => (
                  <ContainerTypesItem key={index}>
                    <span>{formatTitle(type.type.name)}</span>
                  </ContainerTypesItem>
                ))}
              </ContainerTypes>
            </ModalContainerImage>
            <ModalInfo>
              <ModalInfoHeader>
                <HeaderTitle>{formatTitle(name)}</HeaderTitle>
                <HeaderGeneration>
                  <span style={{ alignSelf: "end" }}>Generation 1</span>
                  <HeaderExperience>
                    <Exp />
                    <span>{base_experience}</span>
                  </HeaderExperience>
                </HeaderGeneration>
              </ModalInfoHeader>
              <InfoAbilities>
                <span>Abilities</span>
                <AbilitiesContainer>
                  {abilities.map((ability, index) => (
                    <AbilitiesItem key={index}>
                      {formatTitle(ability.ability.name)}
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
                </ExperienceContainer>
              </HealthExpContainer>
            </ModalInfo>
          </ModalContentActive>
        </ModalActive>
      )}
    </>
  );
};

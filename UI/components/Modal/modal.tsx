import React from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import { ColorModalImage, ColorModalInfo } from "../../../interfaces/Pokemon";
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
  ItemImageContainer,
  ModalActive,
  ModalContainerImage,
  ModalContentActive,
  ModalInfo,
  ModalInfoHeader,
  StatsContainer,
  StatsItemContainer,
} from "./Styles";
import { Exp } from "../../images/Exp";
import { Ellipse } from "../../images/Ellipse";

export const ModalWindow = () => {
  const { pokemonModal, modalActive, setModalActive } = usePokemonContext();

  const formatTitle = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  console.log(pokemonModal.stats);

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
            <ModalContainerImage
              style={{
                backgroundColor: `${
                  ColorModalImage[pokemonModal.types[0].type.name]
                }`,
              }}
            >
              <img src={pokemonModal.sprites.other.dream_world.front_default} />
              <ContainerTypes>
                {pokemonModal.types.map((type, index) => (
                  <ContainerTypesItem
                    style={{
                      backgroundColor: `${ColorModalInfo[type.type.name]}`,
                    }}
                    key={index}
                  >
                    <span>{formatTitle(type.type.name)}</span>
                  </ContainerTypesItem>
                ))}
              </ContainerTypes>
            </ModalContainerImage>
            <ModalInfo
              style={{
                backgroundColor: `${
                  ColorModalInfo[pokemonModal.types[0].type.name]
                }`,
              }}
            >
              <ModalInfoHeader>
                <HeaderTitle>{formatTitle(pokemonModal.name)}</HeaderTitle>
                <HeaderGeneration>
                  <span style={{ alignSelf: "end" }}>Generation 1</span>
                  <HeaderExperience>
                    <Exp />
                    <span>{pokemonModal.base_experience}</span>
                  </HeaderExperience>
                </HeaderGeneration>
              </ModalInfoHeader>
              <InfoAbilities>
                <span>Abilities</span>
                <AbilitiesContainer>
                  {pokemonModal.abilities.map((ability, index) => (
                    <AbilitiesItem key={index}>
                      {formatTitle(ability.ability.name)}
                    </AbilitiesItem>
                  ))}
                </AbilitiesContainer>
              </InfoAbilities>
              <HealthExpContainer>
                <HealtContainer>
                  <span>Healthy Points</span>
                  {pokemonModal.stats[0].base_stat}
                  <HealthLoader></HealthLoader>
                </HealtContainer>
                <ExperienceContainer>
                  <span>Experience</span>
                  {pokemonModal.base_experience}
                </ExperienceContainer>
              </HealthExpContainer>
              <StatsContainer>
                {pokemonModal.stats
                  .filter(
                    (stat) =>
                      stat.stat.name === "defense" ||
                      stat.stat.name === "attack" ||
                      stat.stat.name === "special-attack" ||
                      stat.stat.name === "special-defense"
                  )
                  .map((item) => (
                    <StatsItemContainer>
                      <ItemImageContainer>
                        <Ellipse/>
                        <span>{item.base_stat}</span>
                      </ItemImageContainer>
                      <span>{formatTitle(item.stat.name)}</span>
                    </StatsItemContainer>
                  ))}
              </StatsContainer>
            </ModalInfo>
          </ModalContentActive>
        </ModalActive>
      )}
    </>
  );
};

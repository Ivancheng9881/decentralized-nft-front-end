import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
} from "./HeroStyles";
import CoolButton from "../coolbutton/CoolButton";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/pixelbackground.mp4" autoPlay muted />
      <Container>
        <MainHeading>CHIBI KINGDOMS</MainHeading>
        <HeroText>6,666 randomly generated Chibi warriors</HeroText>
        <ButtonWrapper>
          <Link to="/mint">
            <CoolButton></CoolButton>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};


export default Hero;

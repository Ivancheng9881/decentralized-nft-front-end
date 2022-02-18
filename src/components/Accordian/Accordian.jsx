import React, { useState } from "react";
import { Data } from "../../data/AccordianData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Container } from "react-bootstrap";

const Answer = styled.p`
  text-align: left;
  line-height: 2;
`;

const StyledContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 80vh;
  background: #fff;
`;

const AccordionContainer = styled.div`
  position: absolute;
  top: 1px;
  min-width: 600px;
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const Dropdown = styled.div`
  display: flex;
  height: 100%;
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  text-align: center;
`;

const Accordian = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <StyledContainer>
      <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
        <AccordionSection>
          <AccordionContainer>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <Answer>{item.question}</Answer>

                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <Answer>{item.answer}</Answer>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </AccordionContainer>
        </AccordionSection>
      </IconContext.Provider>
    </StyledContainer>
  );
};

export default Accordian;

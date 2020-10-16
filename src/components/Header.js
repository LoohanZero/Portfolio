import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../imgs/backgroundphoto.png";
import react from "../imgs/logos/react.png";
import js from "../imgs/logos/js.png";
import html from "../imgs/logos/html.png";
import Fade from "react-reveal/Fade";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  opacity: 0.4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  background-attachment: fixed;

  @media (max-width: 1024px) {
    min-height: 90vh;
    height: 90vh;
  }
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  z-index: 10;

  @media (max-width: 1024px) {
    min-height: 90vh;
  }
`;

const TitleContainer = styled.div`
  text-align: left;
  width: 50%;
`;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 60px;
  letter-spacing: 5px;
`;
const Subtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  letter-spacing: 4px;
  font-size: 30px;
  padding-left: 2px;
  padding: 20px 0;
`;
const Span = styled.span`
  color: #1dc2a7;
  padding-left: 25px;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 70px;
`;

const Text = styled.p`
  color: #eeeeee;
  transition: 0.3s ease-in;
  z-index: 100;
  position: relative;

  &:hover {
    z-index: 100;
    color: #ffffff;
    transition: 0.3s ease-in 0.1s;
  }
`;

const Button = styled.button`
  width: 200px;
  min-width: 150px;
  height: 50px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #eeeeee;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  outline: none;

  &::before {
    content: "";
    width: 200px;
    height: 50px;
    background-color: #eeeeee;
    position: absolute;
    left: -201px;
    top: -1px;
    opacity: 0.9;
    z-index: 0;
    transition: 0.3s ease-in;
  }

  &:hover > ${Text} {
    color: #212121;
    transition: 0.3s ease-in;
    z-index: 100;
  }
  &:hover::before {
    transition: 0.3s ease-in;
    transform: translateX(100%);
  }
`;

const Logo = styled.img`
  height: 45px;
  padding: 0 30px;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }
`;

const InfoContainer = styled.div`
  
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = ({ element, scroll }) => {
  useEffect(() => {
    const componentDidMount = () => {
      Events.scrollEvent.register("begin", function (to, element) {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register("end", function (to, element) {
        console.log("end", arguments);
      });

      scrollSpy.update();
    };
    return () => {
      const componentWillUnmount = () => {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
      };
    };
  }, []);

  const handleContactClick = (scroll) => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackgroundImage />
      <StyledHeader ref={element} name="home" scroll={scroll}>
        <Fade bottom>
          <InfoContainer>
            <TitleContainer>
              <Title>Hi there, </Title>
              <Title>
                I'm
                <Span>Luján Sanchez</Span>
              </Title>
              <Subtitle>Frontend & React.Js Developer</Subtitle>
            </TitleContainer>
            <ContactContainer>
              <Button onClick={() => handleContactClick(scroll)}>
                <Text>Contact Me</Text>
              </Button>
              <Logo src={react} />
              <Logo src={js} />
              <Logo src={html} />
            </ContactContainer>
          </InfoContainer>
        </Fade>
      </StyledHeader>
    </>
  );
};

export default Header;

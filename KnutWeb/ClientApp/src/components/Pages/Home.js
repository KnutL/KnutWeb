import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WelcomeWrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 5%;
  text-shadow: 2px 2px black;
  border-bottom: 6px solid transparent;
  border-image: linear-gradient(to right, ${(props) => props.randomColor} , transparent);
  border-image-slice: 1;
  svg:hover {
    cursor: pointer;
  }
`;
const NameWrapper = styled("div")`
  color: ${(props) => props.randomColor};
  font-size: 3em;
  margin-bottom: 1rem;
`;
const DescriptionWrapper = styled("div")`
  font-size: 0.7em;
`;
const LinkWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80px;
  margin: auto;

  a {
    border-bottom: 3px solid transparent;
  }
  a:hover {
    border-bottom: 3px solid ${(props) => props.randomColor};
  }
`;

export const Home = ({ randomColor }) => {
  const [welcomeMessage, setWelcomeMessage] = useState("Välkommen!");

  useEffect(() => randomMessage(), []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dagar = [
    "söndag",
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
  ];
  var now = new Date();
  const messages = [
    "Bonjour!",
    "Ciao!",
    "Willkommen!",
    "Hello!",
    "Välkommen!",
    "Welcome!",
    "Hola!",
    `Trevlig ${dagar[now.getDay()]}!`,
    `Have a nice ${days[now.getDay()]}!`,
  ];

  function randomMessage() {
    let number = Math.floor(Math.random() * messages.length);
    let message = messages[number];
    setWelcomeMessage(message);
  }

  return (
    <div className="wrapper">
      <h1>
        <WelcomeWrapper randomColor={randomColor}>
          <p>{welcomeMessage}</p>
          <p>My name is</p>
          <NameWrapper randomColor={randomColor}>Knut Lyvén</NameWrapper>
          <DescriptionWrapper>
            <p>System Developer</p>
            <p>
              Driven developer with the joy of being able to create and be
              creative.
            </p>
            <p>There's nothing like pressing that *PUSH* button.</p>
            <LinkWrapper randomColor={randomColor}>
              <a href="https://www.linkedin.com/in/knut-axel-l-623170113/">
                <FontAwesomeIcon icon={faLinkedin} color={randomColor} />
              </a>
              <a href="https://github.com/KnutL">
                <FontAwesomeIcon icon={faGithub} color={randomColor} />
              </a>
            </LinkWrapper>
          </DescriptionWrapper>
        </WelcomeWrapper>
      </h1>
    </div>
  );
};

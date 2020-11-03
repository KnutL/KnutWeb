import React from "react";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { ToastContact } from "../ToastContact";
import knutthor from "../../images/knutthor.jpg";

const SkillText = styled("p")`
  font-size: 1.5rem;
`;

const FullScore = styled("div")`
  border-radius: 7px;
  border: 2px solid black;
  top: 10px;
  left: 10px;
  text-align: center;
  @keyframes blink {
    50% {
      border-color: #ffdf00;
    }
  }
  animation: blink 0.5s step-end infinite alternate;
`;

const ContentWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SkillWrapper = styled("div")`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
  margin-left: 10px;
  border-radius: 5%;

  @media screen and (max-width: 799px) {
    margin-left: 0px;
  }
`;
const ImageWrapper = styled("div")`
  background-image: url(${knutthor});
  height: 600px;
  width: 500px;

  /* Center and scale the image */
  background-position: center;
  background-size: cover;

  border-radius: 5%;
  margin-right: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 920px) {
    height: 500px;
    width: 400px;
    margin-right: 0px;
  }
  @media screen and (max-width: 450px) {
    height: 250px;
    width: 300px;
  }
`;
const ImageQuote = styled("div")`
  text-shadow: 2px 2px black;
`;

export const About = () => {
  const skillsList = [
    { title: "Team player", percentage: 100, variant: "success" },
    { title: "Structural", percentage: 95, variant: "success" },
    { title: "Javascript", percentage: 95, variant: "success" },
    { title: "HTML/CSS", percentage: 95, variant: "success" },
    { title: "React", percentage: 90, variant: "success" },
    { title: "Aurelia", percentage: 90, variant: "success" },
    { title: "C#/.NET", percentage: 85, variant: "info" },
    { title: "Coffee drinking", percentage: 10, variant: "danger" },
  ];

  return (
    <div className="wrapper">
      <h1>Knut Lyvén</h1>
      <p>Developer</p>
      <ContentWrapper>
        <div>
          <ImageWrapper>
            <ImageQuote>
              "I'm not a big fan of coffee, but I'll gladly join the team for
              some fika!"
            </ImageQuote>
          </ImageWrapper>
        </div>

        <SkillWrapper>
          {skillsList.map((item, index) => {
            return (
              <div key={index}>
                <SkillText>{item.title}</SkillText>
                {item.percentage === 100 ? (
                  <FullScore>
                    <ProgressBar
                      animated
                      now={item.percentage}
                      label={`${item.percentage}%`}
                      variant={item.variant}
                    />
                  </FullScore>
                ) : (
                  <ProgressBar
                    animated
                    now={item.percentage}
                    label={`${item.percentage}%`}
                    variant={item.variant}
                  />
                )}
              </div>
            );
          })}
        </SkillWrapper>
      </ContentWrapper>
    </div>
  );
};

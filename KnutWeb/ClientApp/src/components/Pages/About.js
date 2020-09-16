import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import { ToastContact } from '../ToastContact';

const SkillText = styled('p')`
  font-size: 1.5rem;
`;

const FullScore = styled('div')`
  border-radius: 7px;
  border: 2px solid black;
  top: 10px ;
  left: 10px ;
  text-align:center ;
  @keyframes blink { 
    50% { border-color: #FFDF00; } 
  }
  animation: blink .5s step-end infinite alternate; 
`;

const Wrapper = styled('div')`
  max-width: 400px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
  border-radius: 5%;
`;

export const About = () => {
  const skillsList = [
    { title: 'Team player', percentage: 100, variant: 'success'},
    { title: 'Structural', percentage: 95, variant: 'success'},
    { title: 'HTML/CSS', percentage: 90, variant: 'success'},
    { title: 'React', percentage: 85, variant: 'success'},
    { title: 'Aurelia', percentage: 85, variant: 'success'},
    { title: 'C#/.NET', percentage: 80, variant: 'info'},
    { title: 'Coffee drinking', percentage: 10, variant: 'danger'},
  ];

  return(
    <div className='wrapper'>
      <ToastContact />
      <h1>Knut Lyvén</h1>
      <p>Developer</p>
      <Wrapper>
        {skillsList.map((item, index) => {
          return(
            <div key={index} >
              <SkillText>{item.title}</SkillText>
              {item.percentage === 100 ? (
                <FullScore>
                   <ProgressBar animated now={item.percentage} label={`${item.percentage}%`} variant={item.variant}/>
                </FullScore>
              ) : (
                <ProgressBar animated now={item.percentage} label={`${item.percentage}%`} variant={item.variant}/>
              )}
            </div>
          )
        })}
      </Wrapper>
    </div>
  );
}
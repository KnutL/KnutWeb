import React from 'react';
import { AboutMe } from "../AboutMe";

export const Experience = ({ randomColor }) => {
    
  return(
    <div className='wrapper'>
      <h2>Experience</h2>
      <AboutMe randomColor={randomColor}/>
    </div>
  );
}
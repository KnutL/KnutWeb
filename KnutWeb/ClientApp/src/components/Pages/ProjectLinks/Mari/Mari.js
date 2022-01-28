import React, { useState, useEffect } from "react";
import styled from "styled-components";
import asdf123 from '../../../../images/ihatebike.png';
import heartnyu from '../../../../images/heartnyu.png';
import betsyfat from '../../../../images/betsyfat.jpg';

const WeatherWrapper = styled("div")`
  background-color: rgba(177, 190, 255, 0.6);
  padding: 35px;
  width: 500px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const MariDiv = styled("div")`
    padding: 10px;
`;
const MariDiv2 = styled("p")`
    background: linear-gradient(to bottom, #33ccff 0%, #000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Mari = () => {


  return (
    <div className="wrapper">
        <WeatherWrapper>
            <MariDiv>
                <img src={asdf123}></img>
            </MariDiv>
            <MariDiv>
                <img src={heartnyu} style={{width:"330px"}}></img>
            </MariDiv>
            <MariDiv>
                <img src={betsyfat} style={{width:"830px", height:"200px"}}></img>
            </MariDiv>
            <MariDiv2 style={{fontSize:"100px"}}>
                Mari
            </MariDiv2>
        </WeatherWrapper>
    </div>
  );
};

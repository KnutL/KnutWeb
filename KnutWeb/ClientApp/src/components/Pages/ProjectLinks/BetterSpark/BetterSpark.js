import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';

const Wrapper = styled('div')`
    background-color: #121212;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    padding-top: 0;
`;

export const BetterSpark = () => {

    return (
        <Wrapper className='wrapper'>
            <Sidebar />
            <p>
                Test
            </p>
        </Wrapper>
    );
}
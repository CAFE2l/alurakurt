"use client";

// ... o resto do seu código, ex:
import { createContext, useContext, useState } from 'react';
import GlobalStyle from './_components/globalstyles';
// ...

import styled from 'styled-components';


const Box = styled.div`
    background: #ffffff;
    border-radius: 8px;
`;

const AreaBox = styled(Box)<{ area?: string }>`
    grid-area: ${props => props.area};
    padding: 16px;
`;

const MainGrid = styled.main`
    display: grid;
    grid-gap: 10px;
    padding: 16px;
    @media(min-width: 860px){
        grid-template-areas: "profileArea welcomeArea profileRelationsArea";
        grid-template-columns: 160px 618px 312px; 
    }

`;

export default function pau(){
  return(
    <MainGrid>
        <AreaBox area="profileArea">
            Imagem
        </AreaBox>

        {/* style="grid-area: profileArea"*/}
        <AreaBox area="welcomeArea">
            Bem Vindo
        </AreaBox>
        <AreaBox area="profileRelationsArea">
            Comunidades
        </AreaBox>

    </MainGrid>
  );
}

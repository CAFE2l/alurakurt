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
  width: 100%;
  display: grid;
  grid-gap: 10px;
  padding: 16px;

  img{
    max-width: 100%;
    height: auto;
    display: block;
  
  }

    /* ESTILOS MOBILE (Padrão)
    Definimos o layout de celular primeiro: uma coluna,
    com as áreas empilhadas na ordem que queremos.
  */
  grid-template-columns: 1fr; 
  grid-template-areas: 
    "profileArea"
    "welcomeArea"
    "profileRelationsArea";

  /* ESTILOS DESKTOP (Quando a tela for MAIOR que 860px)
    Aqui você sobrescreve o layout mobile.
  */
  @media(min-width: 860px){
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 618px 312px; 
  }
`;

export default function pau(){
  return(
    <MainGrid>
    <div>
        <AreaBox area="profileArea">
        <img 
            src="https://github.com/CAFE2l.png"
            alt="Person smiling and sitting at a desk with a laptop in a bright modern office. The background shows shelves with books and plants. The atmosphere feels welcoming and productive."
        />    
        </AreaBox>
</div>
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

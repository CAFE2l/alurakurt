"use client";

// ... o resto do seu código, ex:
import { createContext, useContext, useState } from 'react';
import GlobalStyle from './_components/globalstyles';
import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';
// ...

import styled from 'styled-components';




export default function pau(){
  return(
    <MainGrid>
    <div>
        <Box area="profileArea">
        <img 
            src="https://github.com/CAFE2l.png"
            alt="Person smiling and sitting at a desk with a laptop in a bright modern office. The background shows shelves with books and plants. The atmosphere feels welcoming and productive."
        />    
        </Box>
</div>
        {/* style="grid-area: profileArea"*/}
        <Box area="welcomeArea">
            Bem Vindo
        </Box>
        <Box area="profileRelationsArea">
            Comunidades
        </Box>

    </MainGrid>
  );
}

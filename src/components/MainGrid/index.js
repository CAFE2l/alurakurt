import styled from "styled-components";

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  display: grid; /* Liga o grid no mobile também */

  /* LAYOUT MOBILE (Padrão) */
  grid-template-areas: 
    "welcomeArea"
    "profileRelationsArea";
  grid-template-columns: 1fr; /* Uma coluna */

  /* LAYOUT DESKTOP (Sobrescreve o mobile) */
  @media(min-width: 860px){
    max-width: 1110px;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";   
    grid-template-columns: 160px 1fr 312px; 
  }
`;
export default MainGrid;
import styled from 'styled-components';

const Box = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 16px;

    /* AQUI ESTAVA O PROBLEMA: Vários erros de sintaxe do CSS */

    input {
        width: 100%;
        background-color: #F4F4F4; /* CORRIGIDO: Faltava o # */
        color: #333333; 
        margin-bottom: 14px;
        border-radius: 100000px;
        ::placeholder {
            color: #333333;
            opacity: 1;
        }
    } /* CORRIGIDO: O "}" estava no lugar errado, fechei ele aqui */

    .boxLink {
        font-size: 14px;
        color: #2E7884;
        text-decoration: none;
        font-weight: 800;   
    }

    .title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px; /* CORRIGIDO: Era "margin: bottom:" */
    }

    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .smallTitle {
        font-size: 18px; /* OBS: ".smallTitle" e ".subTitle" estão idênticos */
        font-weight: 400;
        margin-bottom: 20px;
    }

    hr {
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent; 
        border-bottom-color: #ECF2FA;
    }

    button {
        border: 0; /* CORRIGIDO: Faltava o ; */
        padding: 8px 12px;
        color: #FFFFFF;
        border-radius: 100000px;
        background-color: #6F92BB;
    }

`;

export default Box;
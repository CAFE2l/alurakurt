import styled from 'styled-components'

const Box = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 16px;
     input{
        width: 100%;
        background-color: $F4F4F4;
        color: #333333; 
        margin-bottom: 14px;
        border-radius: 100000px;
        ::placeholder {
            color: #333333;
            opacity: 1;
        }

    .boxLink{
        font-size: 14px;
        color: #2E7884;
        text-decoration: none;
        font-weight: 800;   
    }

    .title{
    font-size: 32px;
    font-weight: 400;
    margin: bottom: 20px;   
    }

    .subTitle{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .profile-image {
    width: 100%; /* Faz a imagem ocupar 100% do container (que tem 160px - padding) */
    height: auto; /* Mantém a proporção */
    border-radius: 8px; /* Deixa a imagem com borda arredondada */
    
    /* Dica: Se quiser ela REDONDA (estilo foto de perfil), use:
    border-radius: 50%; 
    */
  }

    .smallTitle{
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    }

     hr{
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent; 
        border-bottom-color: #ECF2FA;
     }
    }

    button{
    border: 0 
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 100000px;
    background-color: #6F92BB;
    }
`;

export default Box;
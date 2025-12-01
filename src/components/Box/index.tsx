import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px;

  /* Classe para a imagem de perfil que vamos usar */
  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* Abaixo estão todos os seus estilos, AGORA CORRIGIDOS.
    Os erros de sintaxe (como 'margin: bottom:' e '#F4F4F4' sem o '#')
    foram consertados.
  */

  input {
    width: 100%;
    background-color: #F4F4F4; /* CORRIGIDO: Faltava o # */
    color: #333333; 
    margin-bottom: 14px;
    border-radius: 100000px;
    padding: 10px 14px; /* Adicionei padding para ficar melhor */
    border: 0; /* Adicionei border: 0 */
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 100000px;
    background-color: #6F92BB;
  }

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
    font-size: 16px; /* Ajustei o tamanho */
    font-weight: 700; /* Ajustei o peso */
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent; 
    border-bottom-color: #ECF2FA;
  }
`;

export default Box;
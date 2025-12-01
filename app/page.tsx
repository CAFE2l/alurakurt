// "use client";
import GlobalStyle from './_components/globalstyles';
import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';

export default function Home() {
  const githubUser = 'CAFE2l';

  return (
    <MainGrid>
      {/* AQUI ESTAVA O PROBLEMA: Tinha um <div> extra.
        O <Box> deve ser filho DIRETO do <MainGrid>.
      */}
      <Box style={{ gridArea: 'profileArea' }}>
        <img
          className="profile-image" // Vamos usar essa classe
          src={`https://github.com/${githubUser}.png`}
          alt="Foto de perfil"
        />
      </Box>

      <Box style={{ gridArea: 'welcomeArea' }}>
        Bem Vindo
      </Box>
      <Box style={{ gridArea: 'profileRelationsArea' }}>
        Comunidades
      </Box>
    </MainGrid>
  );
}


"use client"; 

import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

// --- Constantes do código original ---
const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';


const StyledMenuLink = styled(NextLink)`
  font-size: 12px;
  color: white;
  padding: 10px 16px;
  position: relative;
  text-decoration: none;

  &:after {
    content: " ";
    background-color: #5292C1;
    display: block;
    position: absolute;
    width: 1px;
    height: 12px;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;

// =================================================================
// Menu (Componente Principal)
// =================================================================
interface AlurakutMenuProps {
  githubUser: string;
}

export function AlurakutMenu({ githubUser }: AlurakutMenuProps) {
  const [isMenuOpen, setMenuState] = React.useState(false);
  
  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <AlurakutMenu.Logo src={`${BASE_URL}/logo.svg`} alt="Alurakut logo" />

        <nav style={{ flex: 1 }}>
          {/* 3. ATUALIZADO: Usando o novo StyledMenuLink */}
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <StyledMenuLink 
              key={`key__${menuItem.name.toLocaleLowerCase()}`} 
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </StyledMenuLink>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} alt="Fechar menu" />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} alt="Abrir menu" />}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </AlurakutMenu.Wrapper>
  )
}

// --- Estilização do Menu ---
AlurakutMenu.Wrapper = styled.header<{ isMenuOpen: boolean }>`
  width: 100%;
  background-color: #308BC5;

  .alurakutMenuProfileSidebar {
    background: white;
    position: fixed;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: .3s;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: #ECF2FA;
    }
  }

  .container {
    background-color: #308BC5;
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media(min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media(min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media(min-width: 860px) {
        display: flex;
      }
      /* 4. REMOVIDO: O estilo do 'nav a' foi movido 
         para o 'StyledMenuLink' acima. */
    }
    input {
      color: #ffffff;
      background: #5579A1;
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    } 
  }
`;

AlurakutMenu.Logo = styled.img`
  background-color: #ffffff;
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`;

// =================================================================
// Sidebar (Sub-componente)
// =================================================================
interface ProfileSidebarProps {
  githubUser: string;
}

function AlurakutMenuProfileSidebar({ githubUser }: ProfileSidebarProps) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} alt={`${githubUser} avatar`} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />
        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// =================================================================
// Menu Padrão da Sidebar (Sub-componente)
// =================================================================
export function AlurakutProfileSidebarMenuDefault() {
  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} alt="Perfil" />
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} alt="Recados" />
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} alt="Fotos" />
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} alt="Depoimentos" />
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} alt="GitHub Trends" />
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}/icons/logout.svg`} alt="Sair" />
            Sair
          </a>
      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}

AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;

// -----------------------------------------------------------------
// EXPORTAÇÃO PRINCIPAL
// Exportamos o AlurakutMenu como 'default' para facilitar a importação
// -----------------------------------------------------------------
export default AlurakutMenu;
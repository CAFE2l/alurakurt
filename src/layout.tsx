import type { Metadata } from "next";
import GlobalStyle from '../app/_components/globalstyles'; // 1. Importa seu GlobalStyle
import { AlurakutMenu } from "../src/components/AlurakutMenu/index"; // 2. Importa o Menu
import StyledComponentsRegistry from "../lib/styled-components-registry"; // 3. Importa o Registry (essencial)

export const metadata: Metadata = {
  title: "Alurakut",
  description: "Um projeto da Alura Imersão React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Você pode definir o usuário aqui por enquanto
  const githubUser = 'CAFE2l'; 

  return (
    <html lang="pt-br" suppressHydrationWarning> 
      {/* suppressHydrationWarning: 
        Importante para ignorar erros de extensões (como Grammarly) 
        que mexem no HTML, como vimos antes.
      */}
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle /> {/* Carrega os estilos globais para todo o site */}
          
          <AlurakutMenu githubUser={githubUser} /> {/* Carrega o Menu em todas as páginas */}
          
          {/* 'children' é o seu 'page.tsx' (ou qualquer outra página).
            Ele será renderizado aqui, dentro do layout.
          */}
          {children} 
          
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
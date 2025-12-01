'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // O "ServerStyleSheet" é o que coleta os estilos
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    // Limpa os estilos depois de pegá-los
    ;(styledComponentsStyleSheet.instance as any).clearTag()
    return <>{styles}</>
  })

  // Se estiver no navegador, renderiza os filhos normalmente
  if (typeof window !== 'undefined') {
    return <>{children}</>
  }

  // Se estiver no servidor, usa o StyleSheetManager para coletar os estilos
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
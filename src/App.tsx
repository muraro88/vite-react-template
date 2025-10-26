//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Estilos CSS embutidos (JavaScript objects)
  // Usamos a paleta de cores do perfil: preto, branco e cinzas.
  // Adicionamos o tipo 'CSSProperties' para o TypeScript entender o objeto
  const pageStyle: CSSProperties = {
    backgroundColor: '#FFFFFF', // Fundo branco, como o perfil
    color: '#333333', // Cor de texto principal (carvão escuro)
    fontFamily: 'Arial, sans-serif', // Uma fonte limpa
    display: 'flex',
    flexDirection: 'column', // Agora TypeScript aceita 'column'
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ocupa a tela inteira
    textAlign: 'center', // E também 'center'
    padding: '20px',
  }

  // Adicionamos o tipo aqui também
  const logoStyle: CSSProperties = {
    fontSize: '2.5rem', // Tamanho grande para o nome
    fontWeight: 'bold',
    color: '#000000', // Preto, como o logo
    margin: '0 0 10px 0',
  }

  // E aqui
  const textStyle: CSSProperties = {
    fontSize: '1.2rem',
    color: '#555555', // Um cinza médio para o subtítulo
    margin: '0',
  }

  // Todo o conteúdo da sua página fica dentro do 'return ()'
  return (
    <div style={pageStyle}>
      <h1 style={logoStyle}>Clínica Slim Medicine</h1>
      <p style={textStyle}>
        Nossa nova página estará no ar em alguns dias.
      </p>
    </div>
  )
}
export default App



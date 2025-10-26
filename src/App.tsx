// Este 'import' carrega o CSS básico. Pode deixar.
import './App.css'
// Importamos 'CSSProperties' para ajudar o TypeScript com os estilos
import { CSSProperties } from 'react'

function App() {
  const pageStyle: CSSProperties = {
    backgroundColor: '#FFFFFF', // Fundo branco, como o perfil
    color: '#333333',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
  };

  const logoImageStyle: CSSProperties = {
    width: '150px', // Tamanho do logo
    height: 'auto', // Mantém a proporção
    marginBottom: '20px', // Espaço abaixo do logo
  };

  const titleStyle: CSSProperties = {
    fontSize: '2.2rem', // Título um pouco menor, para ter o logo
    fontWeight: 'bold',
    color: '#000000',
    margin: '0 0 10px 0',
  };

  const textStyle: CSSProperties = {
    fontSize: '1.2rem',
    color: '#555555',
    margin: '0',
  };

  return (
    <div style={pageStyle}>
      {/* Aqui usamos a tag <img> para adicionar o logo */}
      {/* Certifique-se que o 'src' corresponde ao nome do seu arquivo de imagem na pasta 'public' */}
      <img src="/logo-slim-medicine.png" alt="Logo Clínica Slim Medicine" style={logoImageStyle} />
      <h1 style={titleStyle}>Clínica Slim Medicine</h1>
      <p style={textStyle}>
        Nossa nova página estará no ar em alguns dias.
      </p>
    </div>
  )
}

export default App

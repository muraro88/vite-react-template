// Este 'import' carrega o CSS básico. Pode deixar.
import './App.css'
// Importamos 'CSSProperties' para ajudar o TypeScript com os estilos
import { CSSProperties } from 'react'

function App() {
  const pageStyle: CSSProperties = {
    backgroundColor: '#FFFFFF',
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
    height: 'auto',
    marginBottom: '20px', // Espaço abaixo do logo
  };

  const textStyle: CSSProperties = {
    fontSize: '1.2rem',
    color: '#555555',
    margin: '0 0 25px 0', // Espaço abaixo do texto
    maxWidth: '400px',
  };

  // Estilo para o nosso botão de WhatsApp
  const buttonStyle: CSSProperties = {
    backgroundColor: '#000000', // Botão preto, seguindo a paleta
    color: '#FFFFFF', // Texto branco
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none', // Remove sublinhado do link
    borderRadius: '8px', // Cantos arredondados
    display: 'inline-block',
    margin: '10px 0',
    width: '90%', // Ocupa 90% da largura
    maxWidth: '400px', // Limite máximo
    transition: 'opacity 0.3s ease',
  };
  
  // Estilo para o link do Instagram (opcional)
  const instagramLinkStyle: CSSProperties = {
    fontSize: '1rem',
    color: '#333333',
    textDecoration: 'none',
    marginTop: '30px',
  };

  return (
    <div style={pageStyle}>
      {/* 1. O LOGO */}
      {/* Certifique-se que 'src' é o nome exato do arquivo na pasta 'public' */}
      <img 
        src="/logo-slim-medicine.jpg" 
        alt="Logo Clínica Slim Medicine" 
        style={logoImageStyle} 
      />

      {/* 2. TEXTO DE CHAMADA */}
      <p style={textStyle}>
        Agende sua consulta de forma rápida e prática.
      </p>

      {/* 3. BOTÃO DE WHATSAPP */}
      <a
        // IMPORTANTE: Troque o número abaixo!
        href="https://wa.me/5584998999999"
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        // Efeito hover simples
        onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseOut={e => (e.currentTarget.style.opacity = '1')}
      >
        Agendar Consulta pelo WhatsApp
      </a>

      {/* BÔNUS: Você pode adicionar mais links aqui, como o Instagram */}
      <a 
        href="https://www.instagram.com/clinicaslimmedicine/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={instagramLinkStyle}
      >
        Siga-nos no Instagram
      </a>

    </div>
  )
}

export default App

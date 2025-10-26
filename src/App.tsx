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
    backgroundColor: '#128C7E', // Um verde mais escuro e calmo
    color: '#FFFFFF', // Texto branco
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none', // Remove sublinhado do link
    borderRadius: '8px', // Cantos arredondados
    display: 'flex', // Alterado para flex
    alignItems: 'center', // Alinha ícone e texto
    justifyContent: 'center', // Centraliza o conteúdo
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
      {/* O nome do arquivo .jpg deve ser exato */}
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
        // Número de WhatsApp atualizado
        href="https://wa.me/5584998999999"
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        // Efeito hover simples
        onMouseOver={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseOut={e => (e.currentTarget.style.opacity = '1')}
      >
        {/* Ícone SVG do WhatsApp */}
        <svg fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '10px' }} viewBox="0 0 24 24">
          <path d="M19.001 4.908A9.817 9.817 0 0012.004 2c-5.42 0-9.8 4.38-9.8 9.8 0 1.74.45 3.39 1.25 4.84l-1.33 4.86 4.98-1.3c1.4.74 2.97 1.15 4.59 1.15h.01c5.42 0 9.8-4.38 9.8-9.8.01-2.65-1.03-5.14-2.89-7.01zm-7 14.28c-1.5 0-2.95-.4-4.2-1.12l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 01-1.26-4.38c0-4.54 3.68-8.22 8.22-8.22s8.22 3.68 8.22 8.22-3.68 8.22-8.22 8.22zm4.39-5.31c-.22-.11-.76-.38-1.04-.51-.27-.13-.47-.19-.67.19-.2.38-.78 1.04-.96 1.24-.18.2-.36.22-.66.08-.3-.13-1.26-.47-2.4-1.48-1.14-1.01-1.61-1.69-1.9-2.23-.29-.54-.04-.84.07-.94.1-.1.22-.26.33-.39.11-.13.15-.22.23-.38.08-.15.04-.29-.02-.4l-.18-.42c-.44-1.05-.68-1.13-.94-1.13-.25 0-.5.04-.76.04s-.6.09-.86.38c-.27.29-.87.84-.87 2.04 0 1.2.89 2.37 1.01 2.54.12.17 1.76 2.67 4.27 3.77 2.51 1.09 3.01.87 3.54.81.53-.06 1.12-.22 1.27-.43.16-.21.16-.39.11-.43l-.22-.12z" />
        </svg>
        <span>Agendar Consulta pelo WhatsApp</span>
      </a>

      {/* BÔNUS: Link do Instagram (corrigido) */}
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

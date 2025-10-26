//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
/import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Todo o conteúdo da sua página fica dentro do 'return ()'
  return (
    <div>
      <h1>Bem-vindo à Minha Nova Página!</h1>
      <p>
        Este é o meu primeiro site usando React. Eu editei direto no GitHub!
      </p>

      <h2>Meus Links Favoritos</h2>
      <ul>
        <li><a href="[https://google.com](https://google.com)">Google</a></li>
        <li><a href="[https://youtube.com](https://youtube.com)">YouTube</a></li>
      </ul>

      <img
        src="[https://placehold.co/600x300/EEE/31343C?text=Minha+Imagem+Aqui](https://placehold.co/600x300/EEE/31343C?text=Minha+Imagem+Aqui)"
        alt="Um placeholder de imagem"
        style={{ marginTop: '20px', maxWidth: '100%' }}
      />
    </div>
  )
}

export default App

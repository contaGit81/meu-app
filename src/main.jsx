import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import CadastroProprietario from './CadastroProprietario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CadastroProprietario/>
  </StrictMode>,
)

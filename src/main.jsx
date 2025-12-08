import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AlgoContext} from './components/utils/AlgoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlgoContext>
      <App />
    </AlgoContext>
  </StrictMode>,
)

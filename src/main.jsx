import React from "react"
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import Accueil from "./composants/Accueil"
/*
  code porteru de la page d'accueil
  la page d'accueil est écrite en composant React 
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
)

// no main criamos as rotas

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from 'react-router-dom'; // tivemos de instalar este package para fazer as rotas dos botões
import {router} from './router' // criámos um novo ficheiro chamado router.jsx para termos as nossas rotas separadas do codigo do main para não se tornar tão confuso


ReactDOM.createRoot(document.getElementById("root")).render( //aqui o 2º router refere-se à variavel que foi criada no ficheiro router para definir as rotas
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//     {/* <App /> */}
//   </StrictMode>,
// )

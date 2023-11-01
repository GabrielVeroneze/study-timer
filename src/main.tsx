import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from 'pages/Inicio/index.tsx'
import 'styles/global/reset.css'
import 'styles/global/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Inicio />
    </React.StrictMode>,
)

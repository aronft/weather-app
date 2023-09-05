import './sass/index.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'

import { MainApp } from './MainApp'

const root = createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    <MainApp />
    // </React.StrictMode>
)

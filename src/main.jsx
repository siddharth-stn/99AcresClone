import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)

import "./index.css"
import HomePage from './pages/HomePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)

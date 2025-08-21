import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
// import App from './App.tsx'

const App:React.FC = () =>{
  return(
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

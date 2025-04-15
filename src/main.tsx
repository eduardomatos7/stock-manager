import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import StockContextProvider from './contexts/StockContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  </StrictMode>,
)

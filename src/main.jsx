import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import PaginationProvider from './components/PaginationProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <PaginationProvider>
      <App />
      </PaginationProvider>
   </React.StrictMode>

)

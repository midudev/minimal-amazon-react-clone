import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import '@/index.css'
import App from '@/components/App'
import { Provider as StateProvider } from 'jotai'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

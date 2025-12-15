import './App.css'
import { lazy, Suspense } from 'react'
import Header from './pages/Header/Header'
import { DataContextProvider } from './context/DataContext'

const Services = lazy(() => import('./pages/Services/Services'))
const Move = lazy(() => import('./pages/Move/Move'))
const Works = lazy(() => import('./pages/Works/Works'))
const Local = lazy(() => import('./pages/Local/Local'))

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{
        border: "1px solid var(--laranja)",
        width: "var(--gap)",
        height: "var(--gap)",
        borderRadius: "50%",
        borderRightColor: "var(--cinza)",
        animation: "spin 1s infinite"
      }}>
        <style>
          {
            `@keyframes spin {
                      to{
                          transform: rotate(360deg);
                      }
                  }
                      `
          }
        </style>
      </div>
    </div>
  )
}

function App() {
  return (
    <DataContextProvider>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <Move />
        <Works />
        <Local />
      </Suspense>
    </DataContextProvider>
  )
}

export default App

import './App.css'
import { lazy, Suspense } from 'react'
import Header from './pages/Header/Header'
import { DataContextProvider } from './context/DataContext'
import Loading from './components/Loading'

const Services = lazy(() => import('./pages/Services/Services'))
const Move = lazy(() => import('./pages/Move/Move'))
const Works = lazy(() => import('./pages/Works/Works'))
const Local = lazy(() => import('./pages/Local/Local'))



function App() {
  return (
    <DataContextProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <Services />
        <Move />
        <Works />
        <Local />
      </Suspense>
    </DataContextProvider>
  )
}

export default App

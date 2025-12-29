import './App.css'
import Header from './pages/Header/Header'
import { DataContextProvider } from './context/DataContext'
import Loading from './components/Loading'

import LazyOnView from './components/LazyOnView'

function App() {
  return (
    <div>
      <DataContextProvider>
        <Header />
        <LazyOnView importFunc={() => import('./pages/Services/Services')} fallback={<Loading />} />
        <LazyOnView importFunc={() => import('./pages/Move/Move')} fallback={<Loading />} />
        <LazyOnView importFunc={() => import('./pages/Works/Works')} fallback={<Loading />} />
        <LazyOnView importFunc={() => import('./pages/Local/Local')} fallback={<Loading />} />
      </DataContextProvider>
    </div>
  )
}

export default App

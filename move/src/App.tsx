import 'react'
import './App.css'
import Header from './pages/Header/Header'
import Services from './pages/Services/Services'
import Move from './pages/Move/Move'
import Works from './pages/Works/Works'
import { DataContextProvider } from './context/DataContext'
import Local from './pages/Local/Local'

function App() {


  return (
    <DataContextProvider>
      <Header />
      <Services />
      <Move />
      <Works />
      <Local />
    </DataContextProvider>
  )
}

export default App

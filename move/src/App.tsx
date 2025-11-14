import './App.css'
import Header from './pages/Header/Header'
import Services from './pages/Services/Services'
import Move from './pages/Move/Move'
import Works from './pages/Works/Works'
import Local from './pages/Local/Local'
import Form from './pages/Form/Form'
import { DataContextProvider } from './context/DataContext'

function App() {


  return (
    <DataContextProvider>
      <Header />
      <Services />
      <Move />
      <Form />
      <Works />
      <Local />
    </DataContextProvider>
  )
}

export default App

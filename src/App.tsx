import './App.css'
import ContainerPage from './components/ContainerPage'
import Icons from './components/Icons'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App flex gap-8 lg:gap-6 flex-col items-center justify-center h-screen">
      <Navbar/>
      <ContainerPage/>
      <Icons/>
    </div>
  )
}

export default App

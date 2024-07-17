import Header from './Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App

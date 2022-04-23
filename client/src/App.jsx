import Index from './pages'
import Admin from './pages/admin'
import Home from './pages/home'
import AddTip from './pages/addTip'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addTip" element={<AddTip/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/" exact element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import Index from './pages'
import Transact from './pages/transact'
import Home from './pages/home'
import AddTip from './pages/addTip'
import Admin from './pages/admin'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { TransactionsProvider } from './context/TransactionContext'

const App = () => {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/addTip" element={<AddTip/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/transact/:id" element={<Transact />}/>
            {/* <Route path=':id' element={<Transact />}/> */}
          {/* </Route> */}
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/" exact element={<Index />}/>
        </Routes>
      </TransactionsProvider>
    </BrowserRouter>
  )
}

export default App

import {TransactionsProvider} from '../context/TransactionContext'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'

const Index = () => {
  return (
    <TransactionsProvider>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Welcome />
        <Footer />
      </div>
    </TransactionsProvider>
  )
}

export default Index

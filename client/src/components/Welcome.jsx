import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from 'react-router-dom'

const Welcome = () => {
    const {connectWallet,currentAccount} = useContext(TransactionContext);
    return (<>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Our App
          </a>
        </h1>
        { currentAccount && <Navigate to='/home' /> }
        <button className="mt-3 text-2xl" onClick={connectWallet}>
          Connect Wallet
        </button>
    </main>
</>
)};
export default Welcome 
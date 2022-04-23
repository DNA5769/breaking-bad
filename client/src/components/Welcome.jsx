import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from 'react-router-dom'

const Welcome = () => {
    const {connectWallet,currentAccount} = useContext(TransactionContext);
    let admin = 0x52e1447a2c83d66216c6c0a4246fad6435a2de26;
    return (<>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Our App
          </a>
        </h1>
        { console.log(currentAccount) }
        { currentAccount && <Navigate to='/home' /> }
        { currentAccount == admin && <Navigate to='/admin' /> }
        <button className="mt-3 text-2xl" onClick={connectWallet}>
          Connect Wallet
        </button>
    </main>
</>
)};
export default Welcome 
// { currentAccount == admin ? <Navigate to='/admin' /> : <Navigate to='/home' /> }      
// { console.log(admin) }
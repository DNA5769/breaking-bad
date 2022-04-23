import React, { useContext, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from 'react-router-dom'
import * as API from '../../api/index'

const Welcome = () => {
    const {connectWallet,currentAccount} = useContext(TransactionContext);
    
    useEffect(() => {
      if(currentAccount != "")
        API.login(currentAccount).then(res => console.log(res.data));
    }, [currentAccount])
    
    return (<>
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Our App
          </a>
        </h1>
        { console.log(currentAccount) }
        <button className="mt-3 text-2xl" onClick={connectWallet}>
          Connect Wallet
        </button>
    </main>
</>
)};
export default Welcome 
// { currentAccount && <Navigate to='/home' /> }
// { currentAccount == admin && <Navigate to='/admin' /> }
// { currentAccount == admin ? <Navigate to='/admin' /> : <Navigate to='/home' /> }      
// { console.log(admin) }
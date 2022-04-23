import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from 'react-router-dom'
import * as API from '../../api/index'

const Welcome = () => {
    const {connectWallet,currentAccount} = useContext(TransactionContext);
    const [redirectState, setRedirectState] = useState(0)
    
    useEffect(() => {
      if(currentAccount != "")
        API.login(currentAccount).then(res => {
          if(res.data.isAdmin)
            setRedirectState(1);
          else
            setRedirectState(2);
        });
    }, [currentAccount])
    
    return (<>
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
        { redirectState === 1 && <Navigate to='/admin' /> }
        { redirectState === 2 && <Navigate to='/home' /> }
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
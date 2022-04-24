import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { AiOutlineWallet } from 'react-icons/ai';
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
        { redirectState === 1 && <Navigate to='/admin' /> }
        { redirectState === 2 && <Navigate to='/home' /> }

        <h1 className="text-6xl font-bold">
          Breaking Bad
        </h1>
        
        <h2 className="m-3 text-3xl italic font-bold">
          Earn Crypto by Reporting Drug Trafficking
        </h2>
        
        <button className="flex items-center justify-between px-4 py-3 mt-5 text-lg text-white bg-blue-600 rounded-xl font-inter" onClick={connectWallet}>
          <AiOutlineWallet className='mr-2' /> Connect Wallet
        </button>
    </main>
</>
)};
export default Welcome 
// { currentAccount && <Navigate to='/home' /> }
// { currentAccount == admin && <Navigate to='/admin' /> }
// { currentAccount == admin ? <Navigate to='/admin' /> : <Navigate to='/home' /> }      
// { console.log(admin) }
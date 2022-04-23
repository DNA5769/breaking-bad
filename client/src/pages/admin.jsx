import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from "react-router-dom";
import * as API from '../../api/index'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Admin = () => {
  const {currentAccount} = useContext(TransactionContext);
  const [redirect, setRedirect] = useState(false);
  
  useEffect(() => {
    if(currentAccount != "")
      API.login(currentAccount).then(res => {
        if(!res.data.isAdmin)
          setRedirect(true);
      });
  }, [currentAccount]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5">
      { redirect && <Navigate to='/home' /> }
      <Form />          
      <Footer />
    </div>
  )
}

export default Admin
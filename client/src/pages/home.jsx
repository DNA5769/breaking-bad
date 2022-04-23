import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate, useNavigate } from 'react-router-dom'
import * as API from '../../api/index'
import Footer from '../components/Footer'
import Tip from '../components/Tip'
import axios from 'axios';
import '../App.css'


const Home = () => {
  const {currentAccount} = useContext(TransactionContext);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentAccount != "")
      API.login(currentAccount).then(res => {
        if(res.data.isAdmin)
          setRedirect(true);
        else
          axios.get('http://localhost:3030/tipoff/user', { params: { userHash: currentAccount } })
            .then(res => setTipoffs(res.data));
      });
  }, [currentAccount]);
  
  const [tipoffs, setTipoffs] = useState([]);

  // let history = useHistory();
  // let admin = 0x52e1447a2c83d66216c6c0a4246fad6435a2de26;

  // const {currentAccount} = useContext(TransactionContext);

  // useEffect(() => {
  //   if(currentAccount == admin)
  //     props.history.push("/admin")
  // },[currentAccount]);

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-5">
      <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
          { redirect && <Navigate to='/admin' /> }
          
          <div className='flex justify-between w-full'>
            <h1 className='text-2xl font-inter'>Project_Name</h1>
            <button className='p-2 px-4 text-white bg-blue-600 rounded-md font-inter' onClick={() => navigate('/addTip')}>Add Tip-Off</button>
          </div>
  
          <div className='flex flex-col items-start w-full my-5'>
            <h3 className='mb-5 text-lg font-inter'>Past Tip-Off</h3>

            {tipoffs.map(tipoff => <div className='w-full my-2 border-2'>
              Location: {tipoff.location}
              <br/>
              Message: {tipoff.message}
              <br/>
              Bounty: {tipoff.bounty.$numberDecimal}
              <br/>
              File Paths: {tipoff.filePaths}
              <br/>
            </div>)}

            {/* <table className='w-full text-left border font-inter'>
              <thead>
                <tr className='border'>
                  <th className='w-1/5 px-6 py-4 text-gray-900'>Name</th>
                  <th className='w-3/5 px-6 py-4 text-gray-900'>Scenario</th>
                  <th className='w-1/5 px-6 py-4 text-gray-900'>Reward</th>
                </tr>
              </thead>

              <tbody className='table-body'>
                <tr>
                  <td className='w-1/5 px-6 py-4'>Something</td>
                  <td className='w-1/5 px-6 py-4 text-gray-900'>Sooooo this soo that soo thiss</td>
                  <td className='w-1/5 px-6 py-4 text-gray-900'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='w-1/5 px-6 py-4'>Something</td>
                  <td className='w-1/5 px-6 py-4'>Sooooo this soo that soo thiss</td>
                  <td className='w-1/5 px-6 py-4'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='w-1/5 px-6 py-4'>Something</td>
                  <td className='w-1/5 px-6 py-4'>Sooooo this soo that soo thiss</td>
                  <td className='w-1/5 px-6 py-4'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='w-1/5 px-6 py-4'>Something</td>
                  <td className='w-1/5 px-6 py-4'>Sooooo this soo that soo thiss</td>
                  <td className='w-1/5 px-6 py-4'>0.003 ETH</td>
                </tr>
              </tbody>
              
            </table> */}
          </div>

      </main>
      <Footer />
    </div>
  )
}

export default Home
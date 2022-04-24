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
  const [redirect, setRedirect] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentAccount !== "")
    {
      API.login(currentAccount).then(res => {
        if(res.data.isAdmin)
          setRedirect(1);
        else
          axios.get('http://localhost:3030/tipoff/user', { params: { userHash: currentAccount } })
            .then(res => setTipoffs(res.data));
      });
    }
    else
      setRedirect(-1);
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
          { redirect == 1 && <Navigate to='/admin' /> }
          { redirect == -1 && <Navigate to='/' /> }
          
          <div className='flex justify-between w-full'>
            <h1 className='text-2xl font-bold font-inter'>Breaking Bad</h1>
            <div>
              <button className='p-2 px-4 mr-3 text-white bg-blue-600 rounded-md font-inter' onClick={() => navigate('/bounties')}>Recent Bounties</button>
              <button className='p-2 px-4 text-white bg-blue-600 rounded-md font-inter' onClick={() => navigate('/addTip')}>Add Tip-Off</button>
            </div>
          </div>
  
          <div className='flex flex-col items-start w-full my-5'>
            <h3 className='mb-5 text-lg font-inter'>Your Reports</h3>

            <div className='grid grid-cols-3 gap-5'>
              {
                tipoffs.map((tipoff) =>(
                  <div className={ (parseFloat( tipoff.bounty.$numberDecimal ) > 0 ? "bg-green-50" : "bg-gray-50") + " w-full border rounded-md flex flex-col items-start hover:border-gray-500 font-inter  hover:drop-shadow-md"}>
                    <Tip tipoff={tipoff}/>
                  </div>)
                )
              }
            </div>


          </div>

      </main>
      <Footer />
    </div>
  )
}

export default Home
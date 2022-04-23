import { useContext, useEffect } from 'react';
import Footer from '../components/Footer'
// import {  withRouter } from "react-router-dom";
import Tip from '../components/Tip'
import '../App.css'
import { TransactionContext } from '../context/TransactionContext';


const Home = () => {
  // let history = useHistory();
  // let admin = 0x52e1447a2c83d66216c6c0a4246fad6435a2de26;

  // const {currentAccount} = useContext(TransactionContext);

  // useEffect(() => {
  //   if(currentAccount == admin)
  //     props.history.push("/admin")
  // },[currentAccount]);

  return (

    <div className="flex min-h-screen flex-col items-center justify-center py-5">
      <main className='flex w-full flex-1 flex-col items-center px-44 text-center'>
          <div className='flex w-full justify-between'>
            <h1 className='text-2xl font-inter'>Project_Name</h1>
            <button className='bg-blue-600 p-2 px-4 rounded-md text-white font-inter' onClick={() => navigate('/addTip')}>Add Tip-Off</button>
          </div>
  
          <div className='flex w-full my-5 flex-col items-start'>
            <h3 className='text-lg font-inter mb-5'>Past Tip-Off</h3>

            <table className='border w-full text-left font-inter'>
              <thead>
                <tr className='border'>
                  <th className='text-gray-900 px-6 py-4 w-1/5'>Name</th>
                  <th className='text-gray-900 px-6 py-4 w-3/5'>Scenario</th>
                  <th className='text-gray-900 px-6 py-4 w-1/5'>Reward</th>
                </tr>
              </thead>

              <tbody className='table-body'>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='text-gray-900 px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='text-gray-900 px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
              </tbody>
              
            </table>
          </div>

      </main>
      <Footer />
    </div>
  )
}

export default Home
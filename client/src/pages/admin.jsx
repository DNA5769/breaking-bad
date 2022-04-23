import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Navigate } from "react-router-dom";
import * as API from '../../api/index'
import Footer from '../components/Footer'
import axios from 'axios'
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { useNavigate } from 'react-router'


const Admin = () => {
    const [allTips, setTips] = useState();
    const navigate = useNavigate()
    const {currentAccount} = useContext(TransactionContext);
    const [redirect, setRedirect] = useState(false);
  
    useEffect(() => {
        if(currentAccount != "")
            API.login(currentAccount).then(res => {
                if(!res.data.isAdmin)
                    setRedirect(true);
                else{
                    axios.get('http://localhost:3030/tipoff/all')
                    .then((res)=>{
                        setTips(res.data)
                    })
                }
            });
    }, [currentAccount]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 font-inter">
        <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
            { redirect && <Navigate to='/home' /> }
            <h3 className='my-8 text-3xl font-bold'>Admin</h3>

            <div className='grid w-full grid-cols-3 gap-5'>
              {
                allTips && allTips.map(tipoff =>
                    <div className='flex flex-col items-start w-full p-3 border rounded-md hover:border-gray-500 font-inter bg-gray-50 hover:drop-shadow-md'>
                        <div className='flex flex-row w-full my-2 space-x-2 rounded-md'>
                            <BiCurrentLocation size={25} className="w-1/12"/>
                            <p className='w-11/12 text-left'>{tipoff.location}</p>
                        </div>
                        
                        <div class="w-full border-t my-2"></div>

                        <div className='flex flex-row w-full my-2 space-x-2 rounded-md'>
                            <BiMessageDetail size={25} className="w-1/12"/>
                            <p className='w-11/12 text-left'>{tipoff.message}</p>
                        </div>

                        <div class="w-full my-2 border-t"></div> 
                        
                        <div className='flex flex-row w-full my-2 space-x-2 rounded-md'>
                            <AiOutlineEye size={25} className="w-1/12"/>
                            <div className='flex flex-row w-11/12'>
                                <AiOutlineFileJpg size={25} className="mt-1"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                            </div>
                        </div>

                        <div className='flex justify-center w-full my-5 item-center'>


                            { parseFloat( tipoff.bounty.$numberDecimal ) === 0 &&
                                <button onClick={()=>navigate('/transact')} className='flex flex-row items-center py-1 text-white rounded-full bg-cyan-500 hover:shadow-md hover:shadow-cyan-600 '>
                                    <FaEthereum size={25} className="m-2" color='white'/> 
                                    <a className='mr-3 font-semibold'>Pay Now</a> 
                                </button>
                            }
                        </div>
                    </div>
                )
              }
            </div>

        </main>
    </div>
  )
}

export default Admin
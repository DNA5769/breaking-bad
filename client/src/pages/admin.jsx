import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link, Navigate } from "react-router-dom";
import * as API from '../../api/index'
import Footer from '../components/Footer'
import axios from 'axios'
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import CommentSection from '../components/commentSection';
import Tip from '../components/Tip';


const Admin = () => {
    const [allTips, setTips] = useState();
    const navigate = useNavigate()
    const {currentAccount} = useContext(TransactionContext);
    const [redirect, setRedirect] = useState(false);
    const [tipId,setTipId] = useState("");
  
    useEffect(() => {
        if(currentAccount != "")
            API.login(currentAccount).then(res => {
                if(!res.data.isAdmin)
                    setRedirect(true);
                else{
                    axios.get('http://localhost:3030/tipoff/all')
                    .then((res)=>{
                        setTips(res.data)
                        // console.log(allTips);
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
                allTips && allTips.map(tipoff =>(
                        <div className={ (parseFloat( tipoff.bounty.$numberDecimal ) > 0 ? "bg-green-50" : "bg-gray-50") + " w-full border rounded-md p-3 flex flex-col items-start hover:border-gray-500 font-inter  hover:drop-shadow-md"}>
                        <Tip tipoff = {tipoff}>
                        <div className='flex justify-center w-full my-5 item-center'>
                            { parseFloat( tipoff.bounty.$numberDecimal ) === 0 &&
                                <Link to={`/transact/${tipoff.userHash}`} className='flex flex-row items-center py-1 text-white rounded-full bg-cyan-500 hover:shadow-md hover:shadow-cyan-600 '>
                                    <FaEthereum size={25} className="m-2" color='white'/> 
                                    <a className='mr-3 font-semibold'>Pay Now</a> 
                                </Link>
                            }
                        </div>
                        </Tip>
                        </div>
                        )
                )
              }
            </div>

        </main>
    </div>
  )
}

export default Admin
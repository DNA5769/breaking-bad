import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { Link, Navigate } from "react-router-dom";
import * as API from '../../api/index'
import Footer from '../components/Footer'
import axios from 'axios'
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import CommentSection from '../components/commentSection';
import Tip from '../components/Tip';

const Admin = () => {
    const [allTips, setTips] = useState();
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
                        // console.log(allTips);
                    })
                }
            });
    }, [currentAccount]);

    // const sortTips =() =>{
    //     const newTips = [...allTips];
    //     newTips.sort((tip1,tip2) =>{
    //         return tip1.
    //     })
    // }    
    console.log(allTips)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5 font-inter">
        <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
            { redirect && <Navigate to='/home' /> }
            <h3 className='my-8 text-3xl font-bold'>Admin</h3>
            <div className='right-0 bottom-0'>
            <label>
            Sort by
            <select className=''>
                <option value=''>Select</option>
                <option  value='User Reliability'>User Reliability</option>
            </select>
            </label>
            </div>
            <div className='grid w-full grid-cols-3 gap-5'>
              {
                allTips && allTips.map(
                    
                    (tipoff,index) => {
                        let score = 0;
                        axios.post('http://localhost:3030/user/getUser',{hash_id:tipoff.userHash})
                        .then(res => {
                            score = res.data.user.score
                            allTips[index].score = score
                        })
                        .catch(err => console.log(err)) 

                        return( <div className={ (parseFloat( tipoff.bounty.$numberDecimal ) > 0 ? "bg-green-50" : "bg-gray-50") + " w-full border rounded-md p-3 flex flex-col items-start hover:border-gray-500 font-inter  hover:drop-shadow-md"}>
                            <Tip tipoff = {tipoff}>
                            <div className='flex flex-row w-full space-x-2 rounded-md p-2'>
                                <AiOutlineStar size={25} className="w-1/12"/>
                                <p className='w-11/12 text-left'>{score}</p>
                            </div>
                            <div className='flex justify-center w-full my-2 item-center'>
                                { parseFloat( tipoff.bounty.$numberDecimal ) === 0 &&
                                    <Link to={`/transact/${tipoff.userHash}`} className='flex flex-row items-center py-1 text-white rounded-full bg-cyan-500 hover:shadow-md hover:shadow-cyan-600 '>
                                        <FaEthereum size={25} className="m-2" color='white'/> 
                                        <a className='mr-3 font-semibold'>Pay Now</a> 
                                    </Link>
                                }
                            </div>
                            </Tip>
                        </div>)
                    }
                )
              }
            </div>

        </main>
    </div>
  )
}

export default Admin
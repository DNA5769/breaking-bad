import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { useNavigate } from 'react-router'


const Admin = () => {
    const [allTips, setTips] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3030/tipoff/all')
        .then((res)=>{
            setTips(res.data)
        })
    },[])

    console.log(allTips)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5 font-inter">
        <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
            <h3 className='text-3xl font-bold my-8'>Admin</h3>

            <div className='grid grid-cols-3 gap-5'>
              {
                allTips && allTips.map(tipoff =>
                    <div className='w-full border rounded-md p-3 flex flex-col items-start hover:border-gray-500 font-inter bg-gray-50 hover:drop-shadow-md'>
                        <div className='flex flex-row rounded-md w-full space-x-2 my-2'>
                            <BiCurrentLocation size={25} className="w-1/12"/>
                            <p className='text-left w-11/12'>{tipoff.location}</p>
                        </div>
                        
                        <div class="w-full border-t my-2"></div>

                        <div className='flex flex-row rounded-md w-full space-x-2 my-2'>
                            <BiMessageDetail size={25} className="w-1/12"/>
                            <p className='text-left w-11/12'>{tipoff.message}</p>
                        </div>

                        <div class="w-full my-2 border-t"></div> 
                        
                        <div className='flex flex-row rounded-md w-full space-x-2 my-2'>
                            <AiOutlineEye size={25} className="w-1/12"/>
                            <div className='w-11/12 flex flex-row'>
                                <AiOutlineFileJpg size={25} className="mt-1"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                                <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                            </div>
                        </div>

                        <div className='flex w-full item-center justify-center my-5'>
                            <button onClick={()=>navigate('/transact')} className='flex flex-row items-center rounded-full bg-cyan-500 py-1 text-white hover:shadow-md hover:shadow-cyan-600 '>
                                <FaEthereum size={25} className="m-2" color='white'/> 
                                <a className='mr-3 font-semibold'>Pay Now</a> 
                            </button>
                        </div>
                    </div>
                )
              }
            </div>

        </main>


              
      <Footer />
    </div>
  )
}

export default Admin
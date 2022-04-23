import { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
import Tip from '../components/Tip'
import axios from 'axios';
import '../App.css'
import { TransactionContext } from '../context/TransactionContext';
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'


const Home = () => {
  const navigate = useNavigate();
  const { currentAccount } = useContext(TransactionContext);
  const [tipoffs, setTipoffs] = useState([]);

  useEffect(() => {
    if (currentAccount !== "")
      axios.get('http://localhost:3030/tipoff/user', { params: { userHash: currentAccount } })
        .then(res => {
          setTipoffs(res.data); 
          console.log(res.data);
          console.log(res.data[0].bounty.$numberDecimal)
        });
  }, [currentAccount]);

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
          <div className='flex justify-between w-full'>
            <h1 className='text-2xl font-inter font-bold'>Project_Name</h1>
            <button className='p-2 px-4 text-white bg-blue-600 rounded-md font-inter' onClick={() => navigate('/addTip')}>Add Tip-Off</button>
          </div>
  
          <div className='flex flex-col items-start w-full my-5'>
            <h3 className='mb-5 text-lg font-inter'>Past Tip-Off</h3>

            <div className='grid grid-cols-3 gap-5'>
              {
                tipoffs.map(tipoff =>
                  <div className={ (parseFloat( tipoff.bounty.$numberDecimal ) > 0 ? "bg-green-50" : "bg-gray-50") + " w-full border rounded-md p-3 flex flex-col items-start hover:border-gray-500 font-inter  hover:drop-shadow-md"}>
                    <div className='flex flex-row rounded-md w-full space-x-2'>
                      <BiCurrentLocation size={25} className="w-1/12 mt-1"/>
                      <p className='text-left w-11/12'>{tipoff.location}</p>
                    </div>
                    <div class="w-full my-1 border-t"></div> 
                    <div className='flex flex-row rounded-md w-full space-x-2'>
                      <BiMessageDetail size={25} className="w-1/12 mt-1"/>
                      <p className='text-left w-11/12'>{tipoff.message}</p>
                    </div>
                    <div class="w-full my-1 border-t"></div> 
                    <div className='flex flex-row rounded-md w-full space-x-2'>
                      <AiOutlineEye size={25} className="w-1/12 mt-1"/>
                      <div className='w-11/12 flex flex-row'>
                        <AiOutlineFileJpg size={25} className="mt-1"/>
                        <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                        <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                        <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
                      </div>
                    </div>
                  </div>
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
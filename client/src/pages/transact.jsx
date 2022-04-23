import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/Footer'
import Form from '../components/Form'
import { TransactionContext } from '../context/TransactionContext';

const Transact = () => {
  let { id } = useParams();
  const {setFormData,formData} = useContext(TransactionContext);
  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, 'addressTo': id }));
    console.log(formData);
  },[])
  // console.log(id);
  return (
    <>
    <div className="flex min-h-screen flex-col items-center py-5">
      <div className='my-10 text-3xl font-bold'>Offer Bounty to <span className=' text-gray-400 font-mono font-normal text-lg'>{id}</span></div>
      <Form />          
    </div>
    <div className=' align-middle text-center'>
      <Footer />
    </div>
    </>
  )
}

export default Transact
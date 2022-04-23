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
    <div className="flex min-h-screen flex-col items-center justify-center py-5">
      <Form />          
      <Footer />
    </div>
  )
}

export default Transact
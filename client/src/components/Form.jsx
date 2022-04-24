import React, { useContext } from "react";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";
import axios from "axios";
const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="p-2 border-2 rounded-md my-2 font-inter w-1/3"
    />
);

const Form = () => {
    const {isLoading,handleChange,sendTransaction,formData} = useContext(TransactionContext);
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        
        e.preventDefault();
        console.log(formData)
        if (!addressTo || !amount || !keyword || !message) return;
    
        sendTransaction();
        axios.post('http://localhost:3030/admin/transact',{addressTo:addressTo})
      };
    return(
    <div className='flex w-full flex-col items-center px-44 text-center'>
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {isLoading
                  ? <Loader />
                  : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-blue-600 my-2 p-2 px-4 rounded-md text-white font-inter"
                    >
                      Send now
                    </button>
                    )}
    </div>
    )
}

export default Form;
import React from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import Footer  from '../components/Footer'
const Bounties = () =>{
    const {transactions} = useContext(TransactionContext)
    console.log(transactions)
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-5 font-inter">
            <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
                <h3 className='my-8 text-3xl font-bold'>Bounties</h3>
                <table className='w-full text-left border font-inter'>
                <thead>
                    <tr className='border'>
                    <th className='w-1/5 px-6 py-4 text-gray-900'>Address To</th>
                    <th className='w-1/5 px-6 py-4 text-gray-900'>Reward</th>
                    <th className='w-1/5 px-6 py-4 text-gray-900'>Time</th>
                    </tr>
                </thead>

                <tbody className='table-body'>
                    {
                        transactions.map(tran => <tr className="h-10">
                            <td className="px-6">{tran.addressTo.substring(0, 5)}..............{tran.addressTo.split("").reverse().join("").substring(0, 5)}</td>
                            <td className="px-6">{tran.amount}</td>
                            <td className="px-6">{tran.timestamp}</td>
                        </tr>)
                    }
                </tbody>

                </table>



                
            </main>
            <Footer />
        </div>
    )
}
export default Bounties
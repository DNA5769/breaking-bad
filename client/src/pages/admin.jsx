import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Admin = () => {
    const [allTips, setTips] = useState();

    useEffect(()=>{
        axios.get('http://localhost:3030/tipoff/all')
        .then((res)=>{
            setTips(res.data)
        })
    },[])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5 font-inter">
        <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
            <h3 className='text-3xl font-bold'>Admin</h3>

            <div className='grid grid-cols-3 gap-5'>
              {
                allTips.map(tipoff =>
                  console.log(tipoff.location)
                )
              }
            </div>

        </main>


              
      <Footer />
    </div>
  )
}

export default Admin
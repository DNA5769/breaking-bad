import Footer from '../components/Footer'

const AddTip = () => {


    return (
        <div className='flex min-h-screen flex-col items-center justify-center py-5'>
            <main className='flex w-full flex-1 flex-col items-center px-44 text-center'>
                <h1 className='font-inter text-2xl m-5'>Enter The Details</h1>
                <input type='text' placeholder='Enter the Name' className='p-2 border-2 rounded-md my-2 font-inter w-1/3'/>
                <textarea placeholder='Brief the Scene' rows={4} className='p-2 border-2 rounded-md my-2 font-inter w-1/3' />
                <input type='text' placeholder='Enter the location'className='p-2 border-2 rounded-md my-2 font-inter w-1/3' />

                <button className='bg-blue-600 my-2 p-2 px-4 rounded-md text-white font-inter'>Add Tip-Off</button>
            </main>
        </div>
    )
}

export default AddTip
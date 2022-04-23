import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5">
      <main className='flex w-full flex-1 flex-col items-center px-44 text-center'>
          <div className='flex w-full justify-between'>
            <h1 className='text-2xl'>Project_Name</h1>
            <button className='bg-blue-600 p-2 px-4 rounded-md text-white font-inter'>Add Tip-Off</button>
          </div>

          <div className='flex w-full my-5'>
            <h3>Past Tip-Off</h3>
          </div>

      </main>
      <Footer />
    </div>
  )
}

export default Home
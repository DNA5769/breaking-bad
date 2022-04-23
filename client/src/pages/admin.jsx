import Footer from '../components/Footer'

const Admin = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-5">
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
          Admin Dashboard
          <div className='flex w-full my-5 flex-col items-start'>
            <h3 className='text-lg font-inter mb-5'>Past Tip-Off</h3>

            <table className='border w-full text-left font-inter'>
              <thead>
                <tr className='border'>
                  <th className='text-gray-900 px-6 py-4 w-1/5'>Name</th>
                  <th className='text-gray-900 px-6 py-4 w-3/5'>Scenario</th>
                  <th className='text-gray-900 px-6 py-4 w-1/5'>Reward</th>
                </tr>
              </thead>

              <tbody className='table-body'>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='text-gray-900 px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='text-gray-900 px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 w-1/5'>Something</td>
                  <td className='px-6 py-4 w-1/5'>Sooooo this soo that soo thiss</td>
                  <td className='px-6 py-4 w-1/5'>0.003 ETH</td>
                </tr>
              </tbody>
              
            </table>
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default Admin
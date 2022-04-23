import React, { useState } from 'react';
import Footer from '../components/Footer'

const AddTip = () => {
    const [files, setFiles] = useState([]);

    const handleUpload = e => {
        setFiles([...files, e.target.files[0]])
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-5'>
            <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
                <h1 className='m-5 text-2xl font-inter'>Enter The Details</h1>
                <input type='text' placeholder='Enter the Location' className='w-1/3 p-2 my-2 border-2 rounded-md font-inter'/>
                <textarea placeholder='Brief the Scene' rows={4} className='w-1/3 p-2 my-2 border-2 rounded-md font-inter' />
                {files.map((file, i) => <div className='flex justify-between w-1/3 p-2 my-2 border-2 font-inter'>
                    <h2 className='flex-1'>{file.name}</h2>
                    <h2 className='font-bold text-red-600 cursor-pointer' onClick={() => setFiles(files.filter((f, j) => i !== j))}>X</h2>
                </div>)}
                <label for="file-upload" className='w-1/3 p-2 my-2 text-white bg-blue-600 border-2 rounded-md cursor-pointer font-inter'>Upload Evidence (optional) </label>
                <input type='file' id="file-upload" placeholder='Enter the Location' onChange={handleUpload} className='hidden'/>
                
                <button className='p-2 px-4 my-2 text-white bg-blue-600 rounded-md font-inter'>Add Tip-Off</button>
            </main>
        </div>
    )
}

export default AddTip
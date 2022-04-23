import React, { useState, useContext } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'
import { TransactionContext } from '../context/TransactionContext';

const AddTip = () => {
    const { currentAccount } = useContext(TransactionContext);

    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    const handleUpload = e => {
        if (e.target.files.length !== 0);
            setFiles([...files, e.target.files[0]]);
        e.target.value = "";
    };

    const handleSubmit = async () => {
        if (location === '' && message === '')
        {
            setError('Please enter the location and brief the scene!!!');
            return;
        }
        else if (location === '')
        {
            setError('Please enter the location!!!');
            return;
        }
        else if (message === '')
        {
            setError('Please brief the scene!!!');
            return;
        }
        else
            setError('');
        
        const formData = new FormData();
        formData.append('userHash', currentAccount);
        formData.append('location', location);
        formData.append('message', message);

        formData.append('fileCount', files.length);
        for (let i = 0; i < files.length; ++i)
            formData.append(`file${i+1}`, files[i]);

        try {
            const res = await axios.post('http://localhost:3030/tipoff', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
        } catch (err) {
            console.log(err);
            setError('Please try again later');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-5'>
            <main className='flex flex-col items-center flex-1 w-full text-center px-44'>
                <h1 className='m-5 text-2xl font-inter'>Enter The Details</h1>
                <input type='text' placeholder='Enter the Location' value={location} onChange={e => setLocation(e.target.value)} className='w-1/3 p-2 my-2 border-2 rounded-md font-inter'/>
                <textarea placeholder='Brief the Scene' value={message} onChange={e => setMessage(e.target.value)} rows={4} className='w-1/3 p-2 my-2 border-2 rounded-md font-inter' />
                {files.map((file, i) => <div className='flex justify-between w-1/3 p-2 my-2 border-2 font-inter'>
                    <h2 className='flex-1'>{file.name}</h2>
                    <h2 className='font-bold text-red-600 cursor-pointer' onClick={() => setFiles(files.filter((f, j) => i !== j))}>X</h2>
                </div>)}
                <label for="file-upload" className='w-1/3 p-2 my-2 text-white bg-blue-600 border-2 rounded-md cursor-pointer font-inter'>Upload Evidence</label>
                <input type='file' id="file-upload" placeholder='Enter the Location' onChange={handleUpload} className='hidden'/>
                
                <button className='p-2 px-4 my-2 text-white bg-blue-600 rounded-md font-inter' onClick={handleSubmit}>Add Tip-Off</button>
                <p className='text-sm italic text-red-600'>{error}</p>
            </main>
        </div>
    )
}

export default AddTip
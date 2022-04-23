import React, { useState, useRef, useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import * as API from '../../api/index'
import { BiSend } from 'react-icons/bi'

const CommentSection = ({ tipoff }) => {
    const {currentAccount} = useContext(TransactionContext);
    const [comments, setComments] = useState(tipoff?.comments);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        // console.log(tipoff)
        if(currentAccount != "")
          API.login(currentAccount).then(res => {
            if(res.data.isAdmin)
              setUser("Officer");
            else
              setUser("Informer");
          });
      }, [currentAccount])

    const handleClick = () => {
        const finalComment = `${user}: ${comment}`;
        API.comment(finalComment, tipoff._id).then(res => {
            // console.log(res);
            setComments((prev) => {
                return [...prev,finalComment];
            })
            setComment("");
        })
    }

    return (
        <div className='w-full border-2 overflow-y-scroll h-32 py-2 px-2 my-5 scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-grey-700 scrollbar-track-gray-100'>
            <div>
                <div className='font-semibold'>Enquiry</div>
                {comments.map((c,i) => (
                    <h5 className='align-top text-left'> {c} </h5>
                ))}
            </div>
            <input placeholder='Write Here' value={comment} onChange={(e) => setComment(e.target.value)} className="w-2/3 h-10 p-2 my-2 border-2 rounded-md font-inter"></input>
            <button className="text-white p-2 rounded-sm bg-cyan-500" onClick={handleClick}><BiSend/></button>
        </div>
    )
}

export default CommentSection
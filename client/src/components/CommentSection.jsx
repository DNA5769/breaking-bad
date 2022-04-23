import React, { useState, useRef, useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import * as API from '../../api/index'

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
        <div className='w-full border-2 overflow-y-scroll h-32 py-2 px-1 my-5 scrollbar-thin scrollbar-thumb-gray-500 hover:scrollbar-thumb-grey-700 scrollbar-track-gray-100'>
            <div>
                <div className='font-semibold'>Enquiry</div>
                {comments.map((c,i) => (
                    <h5 className='align-top text-left'> {c} </h5>
                ))}
            </div>
            <div>
                <input className='p-2' placeholder='Write Here' value={comment} onChange={(e) => setComment(e.target.value)}></input>
            </div>
            <button className="text-white bg-black p-1 rounded-sm" onClick={handleClick}>Send</button>
        </div>
    )
}

export default CommentSection
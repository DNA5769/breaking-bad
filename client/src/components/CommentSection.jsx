import React, { useState, useRef, useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import * as API from '../../api/index'

const CommentSection = ({ tipoff }) => {
    const {currentAccount} = useContext(TransactionContext);
    console.log(tipoff);
    const [comments, setComments] = useState(tipoff?.comments);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        if(currentAccount != "")
          API.login(currentAccount).then(res => {
            if(res.data.isAdmin)
              setUser("Police");
            else
              setUser("Informer");
          });
      }, [currentAccount])

    const handleClick = () => {
        const finalComment = `${user}: ${comment}`;
        API.comment(finalComment, tipoff._id).then(res => {
            console.log(res);
            setComments((prev) => {
                return [...prev,finalComment];
            })
            setComment("");
        })
    }

    return (
        <div>
            <div>
                <h3>Comments</h3>
                {comments.map((c,i) => (
                    <h5> {c} </h5>
                ))}
            </div>
            <div>
                <h3>Write a Comment</h3>
                <textarea placeholder='Write Here' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            </div>
            <button className="text-white bg-black" onClick={handleClick}>Comment</button>
        </div>
    )
}

export default CommentSection
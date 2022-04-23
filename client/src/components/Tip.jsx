import React, { Children } from "react";
import { BiCurrentLocation, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineFileJpg, AiOutlineEye} from 'react-icons/ai'
import CommentSection from "./CommentSection";

const Tip = ({tipoff,children}) => {
    // console.log(tipoff)
    return (
    <>
        <div className='flex flex-row w-full space-x-2 rounded-md'>
            <BiCurrentLocation size={25} className="w-1/12"/>
            <p className='w-11/12 text-left'>{tipoff.location}</p>
          </div>

          <div className="w-full my-1 border-t"></div> 

          <div className='max-h-52 overflow-y-auto flex flex-row w-full space-x-2 rounded-md'>
            <BiMessageDetail size={25} className="w-1/12"/>
            <p className='w-11/12 text-left'>{tipoff.message}</p>
          </div>

          <div class="w-full my-1 border-t"></div> 

          <div className='flex flex-row w-full space-x-2 rounded-md'>
            <AiOutlineEye size={25}/>
            <div className='flex flex-row w-11/12'>
              <AiOutlineFileJpg size={25} className="mt-1"/>
              <AiOutlineFileJpg size={25} className="mt-1 ml-2"/>
            </div>
          </div>
            <CommentSection tipoff={tipoff} />
        {children}
    </>
    )
}

export default Tip;
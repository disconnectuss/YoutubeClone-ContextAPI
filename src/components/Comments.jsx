import millify from 'millify';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import StringSide from './StringSide';
import { useState } from 'react';




const Comments = ({ comments }) => {
   
  




    return (
        <div className="m-5 gap-10">
             <div>
                <h3>{comments.length} Comments</h3>
                <input className='border-b-2 bg-black p-4 m-5' type="text" placeholder="Add a comment..." />
            </div>
            {comments.map((comment) =>(
                <div key={comment.id} className='p-5' >
                    <div className='flex flex-row gap-10'>
                        <div>
                            <img className='rounded-full w-12 h-12' 
                        src={comment.author.avatar[1].url ?
                        comment.author.avatar[0].url :
                        comment.author.avatar[1].url} alt="" />
                        </div>
                        
                        <div>
                            <div className='flex flex-row gap-10'>
                                <p className='font-bold'>{comment.author.title}</p>
                                <span className='text-sm'>{comment.publishedTimeText}</span>
                            </div>
                            <div className='flex text-sm mb-1 '>
                            <StringSide text={comment.content} max={100} />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex gap-2 items-center pr-3 rounded-full hover:bg-slate-700 p-2">
                                    <AiFillLike/>
                                    <span className='text-sm'>{comment.stats.votes}</span>
                                </div>
                                <div className='p-2 rounded-full hover:bg-slate-700'>
                                    <AiFillDislike/>
                                </div>
                                <button className="p-2 rounded-full hover:bg-slate-700">Reply</button>
                            </div>
                            <div
                            className={`flex items-center ms-52 ${
                                comment.stats.replies !== 0
                                  ? "text-blue-400 cursor-pointer"
                                  : ""
                              } `}
                              >
                                <div className='flex items-center rounded-full hover:bg-slate-600 '>
                                   <div>
                                    <AiFillCaretDown/>   
                                </div>
                                <div
                            className={`${
                           comment.stats.replies !== 0
                          ? "text-blue-400 cursor-pointer hover:bg-slate-600 rounded-full p-2"
                          : " "}`}>
                            <span>{comment.stats.replies} </span>
                            <span className="ps-2">Replies </span>
                             </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default Comments

import React from 'react'
import deleteicon from '../assets/delete.jpeg'
//double dots are used in path to reach a parent folder.

const Task = ({ text, onEdit, onDelete }) => {
    return (
        <div className="container border-b flex items-center justify-between relative top-10">
            <div className="txt flex items-center justify-center gap-2 ">
                <p className='text-xs p-2'>●</p>
                <p className='p-2 overflow-scroll w-[38vw] h-[40px] min-w-[5vw] min-h-[1vh]'>{text}</p>
            </div>
            <div className="options flex items-center jusity-center p-0.5">
                <button className="edit 
                md:bg-blue-500 rounded-full w-[60px] h-[35px] min-w-[60px] min-h-[35px] text-white p-2 text-[13px] hover:bg-blue-600 transition duration-500 cursor-pointer" onClick={onEdit}>Edit</button>
                <button className="delete  p-2"><img src={deleteicon} alt="delete image" className='rounded-full w-[50px] h-[50px] min-h-[30px] min-w-[30px] p-2 cursor-pointer' onClick={onDelete} /></button>

            </div>
        </div>
    )
}

export default Task
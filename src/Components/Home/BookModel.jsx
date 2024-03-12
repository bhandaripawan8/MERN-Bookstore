import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'



const BookModel = ({books, onClose}) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        <div className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative' onClick={(event) => event.stopPropagation()} >
            <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {books.publishedYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{books._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl'/>
          <h2 className='my-1'>{books.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl'/>
          <h2 className='my-1'>{books.author}</h2>
        </div>
        <p className='mt-4'>Anything you want to show</p>
        <p className='my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quisquam, explicabo molestiae rerum aliquam reiciendis nesciunt recusandae totam eum velit illo aspernatur atque odit fugit saepe optio cum officiis commodi numquam vitae perferendis. Cupiditate accusantium rerum vel exercitationem reiciendis dignissimos laudantium natus numquam, similique aut doloremque nobis saepe ducimus deleniti?
        </p>
        </div>
    </div>
  )
}

export default BookModel
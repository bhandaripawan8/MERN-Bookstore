import {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      axios.get('http://localhost:3000/api/books')
      .then((res) =>{
        setBooks(res.data.data)
        setLoading(false)
      })
      .catch((error) =>{
        console.log(error);
        setLoading(false);
      })
    },[])
  return (
    <div className='p-4'>
<div className='p-4 flex justify-between items-center'>
  <h1 className='text-3xl my-8'>Books List</h1>
  <Link to={'/books/create'}>
    <MdOutlineAddBox className='text-4xl text-blue-600 hover:text-blue-800'/>
  </Link>
</div>
  {loading ? (<Spinner/>) : (
    <table className='w-full border-separate border-spacing'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Published Year</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr className='h-8' key={book._id}>
            <td className='border border-slate-700 rounded-md text-center'>{index + 1 }</td>
            <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishedYear}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800'/>
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600'/>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600'/>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

  )
}

export default Home
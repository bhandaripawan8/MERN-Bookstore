import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const {enqueueSnackbar} = useSnackbar();


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublishedYear(res.data.publishedYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert('An error occurred. Please try again.');
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishedYear,
    };
    axios.put(`http://localhost:3000/api/books/${id}`, data)
      .then((res) => {
        // Handle successful update
        // console.log('Book updated successfully:', res.data);
        enqueueSnackbar('Book edited successfully', {variant: 'success'})
        navigate('/'); // Navigate to home page after successful update
      })
      .catch((error) => {
        // Handle error
        // console.error('Error updating book:', error);
        enqueueSnackbar('Error', {variant: 'error'})
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Published Year</label>
          <input
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Update</button>
      </div>
    </div>
  );
}

export default EditBook;

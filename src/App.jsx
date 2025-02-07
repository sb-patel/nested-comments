import { useState } from 'react'
import './App.css'
import Comments from './Comments';

function App() {
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const newComment = (text) => {
    return {
      id: new Date().getTime(),
      display: text,
      children: []
    }
  }

  const handleNewComment = (e) => {
    if(input){
      setComments([...comments, newComment(input)]);
      setInput('');
    }
  }
  
  const addReply = () => {

  }

  const [comments, setComments] = useState([
    {
      id: 1,
      display: "First Parent Comment",
      children: [
        {
          id: 2,
          display: "First Child Comment",
        },
        {
          id: 3,
          display: "Second Child Comment",
        }
      ],
    },
    {
      id: 4,
      display: "First Parent Comment",
    }
  ]);

  return (
    <>
      <h1>Nested Comments</h1>
      <div>
        <input
          type='text'
          value={input}
          placeholder='Your comments...'
          className='input-box'
          onChange={handleInputChange}
        />
      </div>
      {/* handle button */}
      <div>
        <button
          onClick={handleNewComment}
          className='comment-button'>
          Comment
        </button>
      </div>

      {/*Nested Comments*/}
      <div className='comments'>
        {
          comments.map((item) => (
            <Comments key={item.id} comment={item} addReply={addReply}  />
          ))
        }
      </div>
    </>
  )
}

export default App

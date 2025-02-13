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
    if (input) {
      setComments([...comments, newComment(input)]);
      setInput('');
    }
  }

  const addReply = (parentId, text) => {
    const copyComments = [...comments];
    addComments(copyComments, parentId, text);
  }

  const addComments = (comments, parentId, text) => {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].id === parentId) {
        comments[i].children.unshift(newComment(text));
      }
    }

    for (let i = 0; i < comments.length; i++) {
      addComments(comments[i].children, parentId, text);
    }
  }

  const [comments, setComments] = useState([
    {
      id: 1,
      display: "First Parent Comment",
      children: [
        {
          id: 2,
          display: "First Child Comment",
          children: [],
        },
        {
          id: 3,
          display: "Second Child Comment",
          children: [
            {
              id: 5,
              display: "First child of Second Parent Comment",
              children: [],
            }
          ],
        }
      ],
    },
    {
      id: 4,
      display: "Second Parent Comment",
      children: [],
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
        <ul>
          {
            comments.map((item) => (
              <Comments key={item.id} comment={item} addReply={addReply} />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App

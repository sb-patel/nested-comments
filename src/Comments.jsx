import React, { useRef, useState } from "react"

const Comments = ({comment, addReply}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState('');
  const inputRef = useRef(null);
  const handleReply = () => {
    setShowReplyBox(true);
    setTimeout(() => {
      inputRef.current.focus();
    },1);
  }
  const handleCancleButton = () => {
    setShowReplyBox(false);
    setReplyText('');
  }

  const handleReplySave = (commemntId) => {
    addReply(commemntId, replyText);
    handleCancleButton();
  }

  const handleKeyDown = (e, commemntId) => {
    if(e.key === 'Enter'){
      handleReplySave(commemntId);
    }
    else if(e.key === 'Escape'){
      handleCancleButton();
    }
  }


  return (  
    <li className="comment-line">
        {comment.display}
        {
          !showReplyBox && (
            <button
              className="btn"
              onClick={handleReply}
            >
              Reply
            </button>
          )
        }
        {
          showReplyBox ? (
            <div>
              <br />
              <input
                value={replyText} 
                type="text" 
                ref={inputRef} 
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, comment.id)}
              />
              <br />
              <button className="btn" onClick={handleCancleButton}>Cancle</button>
            </div>
          ) : null
        }
        {
          comment.children.length ? (
            <ul>
              {
                comment.children.map((item) => (
                  <Comments key={item.id} comment={item} addReply={addReply} />
                ))
              }
            </ul>
          ) : null
        }
    </li>
  )
};

export default Comments;

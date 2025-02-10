import React, { useState } from "react"

const Comments = ({comment, addReply}) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const handleReply = () => {
    setShowReplyBox(true);
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
              <input type="text"></input>
              <br />
              <button className="btn">Cancle</button>
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

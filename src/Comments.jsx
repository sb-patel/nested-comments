import React from "react"

const Comments = ({comment, addReply}) => {
  return (  
    <li>
        {comment.display}
    </li>
  )
};

export default Comments;

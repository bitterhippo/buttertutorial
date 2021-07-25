import React from 'react';

const Post = ({ title, summary}) => {

  console.log(title, summary);

  return (
    <div>
      <h3>{title}</h3>
      <span>{summary}</span>
    </div>
  )
};

export default Post;
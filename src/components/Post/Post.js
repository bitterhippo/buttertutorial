import React from 'react';
import Colors from '../Colors';

const Post = ({ title, summary}) => {

  console.log(title, summary);

  return (
    <div>
      <h3 style={{...styles.text, ...styles.title}}>{title}</h3>
      <span style={styles.body}>{summary}</span>
    </div>
  )
};

const styles = {
  text: {
    color : Colors.TextBody
  },
  title: {
    fontWeight: 'bold'
  },
  body: {

  }
}

export default Post;
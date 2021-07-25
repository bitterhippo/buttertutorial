import React from 'react';
import Colors from '../Colors';

const Post = ({ title, summary}) => {

  console.log(title, summary);

  return (
    <div style={styles.postWrapper}>
      <h3 style={{...styles.text, ...styles.title}}>{title}</h3>
      <span style={styles.body}>{summary}</span>
    </div>
  )
};

const styles = {
  postWrapper: {
    textAlign: 'left'
  },
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
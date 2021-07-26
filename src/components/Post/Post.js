import React from 'react';
import Colors from '../Colors';

const Post = ({ title, summary}) => {

  return (
    <div style={styles.postWrapper}>
      <h1 style={{...styles.text, ...styles.title}}>{title}</h1>
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
    fontSize: 20,
    color: Colors.TextBody
  }
}

export default Post;
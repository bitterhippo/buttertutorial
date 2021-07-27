import React from 'react';
import Colors from '../Colors';

const Post = ({ title, summary}) => {

  return (
    <div style={styles.postWrapper}>
      <h1 style={{...styles.text, ...styles.title}}>{title}</h1>
      <span style={{...styles.body, ...styles.text}}>{summary}</span>
    </div>
  )
};

const styles = {
  text: {
    color: Colors.TextBody,
    fontFamily: 'Open Sans',
    opacity: 1
  },
  title: {
    fontWeight: 'bold'
  },
  body: {
    fontSize: 20,
  }
}

export default Post;
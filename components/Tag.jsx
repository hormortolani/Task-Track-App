import React from 'react'

import "./Tag.css";



const Tag = ({tagName, selectTag, selected}) => {
    const tagStyle = {
      HTML: {backgroundColor: "#fda821"},
      CSS: {backgroundColor: "#15d4c8"},
      Javascript: {backgroundColor: "#808080"},
      React: {backgroundColor: "#0000ff"},
      default: {backgroundColor: "#f9f9f9"},
    }
      return (
      <button type='button' 
      style={selected ? tagStyle[tagName] : tagStyle.default}
      className='tag' 
      onClick={() => 
        selectTag(tagName)}>
          {tagName}
        </button>
  );
};

export default Tag
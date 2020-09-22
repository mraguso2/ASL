import React from 'react'
import styled from 'styled-components';

// const TextBoxContainer = styled.div`
//   width: 100%;
//   min-height: 10rem;
//   border-radius: 10px;
//   background: hsla(0,0%,100%,0.3);
//   border: 5px solid rgba(72, 0, 255, 0.62);
//   box-shadow: 0px 5px 35px rgba(120, 53, 238, 0.75);
// `;

const TextBoxContainer = styled.textarea`
  width: 100%;
  min-height: 20rem;
  border-radius: 10px;
  background: hsla(0,0%,100%,0.3);
  border: 5px solid rgba(72, 0, 255, 0.62);
  box-shadow: 0px 5px 35px rgba(120, 53, 238, 0.75);
`;

const TextBox = () => {
  return (
    // <TextBoxContainer>
      <form action="">
        <TextBoxContainer name="words" id="words"></TextBoxContainer>
      </form>
    // </TextBoxContainer>
  )
}

export default TextBox
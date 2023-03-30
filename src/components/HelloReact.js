import React from 'react';

// TODO: Add a comment explaining what a react component is
// A React component is a reusable unit of code that encapsulates 
// a specific functionality or behavior of a user interface. 
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension for JavaScript that allows developers to write HTML-like 
  // syntax directly in their JavaScript code.
  return <p>Hello World! Here is {text}</p>;
}

export default HelloReact;

// TODO: Add a comment giving a brief description of what React is
// The code snippet imports the React library in a JavaScript file. 
// React is a popular JavaScript library for building user interfaces (UIs). 
// It allows developers to create reusable UI components that can be rendered 
// efficiently and update dynamically in response to changes in data.
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
// React is a library that provides the core functionality for 
// building user interfaces, including components, state management, 
// and rendering. React-DOM is a separate package that provides the 
// rendering logic for React components in the browser. It allows developers 
// to manipulate the DOM using React syntax and provides 
// additional features such as event handling and server-side rendering. 
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// The ReactDOM.render method is a critical method in React DOM 
// that is used to render React components to the DOM. 
// It takes two arguments - a React component to render and a 
// target container where the component should be rendered. The 
// target container is typically an HTML element that exists in 
// the document, such as a <div> or <body>
ReactDOM.render(<App />, document.getElementById('root'));

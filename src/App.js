import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
// This import statement is importing a component named "HelloReact" from 
// the "./components/HelloReact" file path. 
import HelloReact from './components/HelloReact';

// TODO: Add a comment explaining the purpose of the App component
// The purpose of the App component is to act as a container or 
// wrapper for other components in the application. 
// App component is a functional component that returns the 
// <HelloReact /> component. This means that when the App component 
// is rendered to the DOM, it will render the <HelloReact /> component 
// as a child component.
function App() {
  return <HelloReact />;
}

export default App;

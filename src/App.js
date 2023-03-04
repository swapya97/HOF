import './App.css';
import React from 'react';

// Define the higher-order function
function withBorder(Component) {
  // Define the new component
  return function(props) {
    // Add border styles to the original component
    return (
      <div style={{border: "1px solid black"}}>
        <Component {...props} />
      </div>
    );
  };
}

// Define the original component
function MyComponent(props) {
  return <div>Hello {props.name}!</div>;
}

// Create the new component with the higher-order function
const MyComponentWithBorder = withBorder(MyComponent);

// Render the new component
function App() {
  return (
    <div>
      <MyComponentWithBorder name="John" />
    </div>
  );
}

export default App;
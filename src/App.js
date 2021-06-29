import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hours from './components/Hours';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hours />
      </div>
    );
  }
}
export default App;

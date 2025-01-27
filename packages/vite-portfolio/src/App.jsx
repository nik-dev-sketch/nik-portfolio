import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
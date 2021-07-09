import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const startDate: Date = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <Header startDate={startDate} />
        <Dashboard />
      </header>
    </div>
  );
}

export default App;

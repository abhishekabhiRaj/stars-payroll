import React from 'react';
import Navbar from './components/navbar/Navbar';
import IndexView from './components/index/IndexView';


function App() {
  return (
    <>
      <section className="__bg-image"/>
      <div className="__app">
        <Navbar />
        <IndexView />
      </div>
    </>
  );
}

export default App;

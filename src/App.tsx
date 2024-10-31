import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import tailwind from "tailwindcss";

function App() {
  return (
    <div className="place-items-center flex flex-row items-center justify-center size-full  m-0 bg-slate-700">
      <List/>
    </div>
  );
}

export default App;

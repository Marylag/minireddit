import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { Subreddits } from './components/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <div className='main'>
        <div className='subreddits'>
          <Subreddits />
        </div>
        <div className='posts'>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;

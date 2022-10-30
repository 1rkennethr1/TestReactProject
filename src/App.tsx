import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import MediaCard from './components/MediaCard';
import MyProps from './components/props';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MediaCard />
        <MyProps name = "Romel Kenneth Recabo" role = "Initiator" pr = "Divine/Immortal" age = {21} sex = "Male"/>
        <Button variant = 'contained'>Invoke</Button>
      </header>
    </div>
  );
}
export default App;

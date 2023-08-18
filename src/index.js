import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Records from './Components/Records';
// import Myarray from './Components/Myarray';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Button/>
    <Records/>
    {/* <Myarray/> */}
  </React.StrictMode>
);



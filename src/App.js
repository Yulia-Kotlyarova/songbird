import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Answer from './components/Answer';
import About from './components/About';

function App() {

  let[title, setTitle] = React.useState([
    { id: 1, active:true, title: 'разминка'},
    { id: 2, active:false, title: 'воробьиные'},
    { id: 3, active:false, title: 'лесные птицы'},
    { id: 4, active:false, title: 'певчие птицы'},
    { id: 5, active:false, title: 'хищные птицы'},
    { id: 6, active:false, title: 'морские птицы'},
])

let[info, setInfo] = React.useState([

])

const [isLoading, setLoading] = React.useState(true)
// let [pic, setPic] = React.useState ([
//   { pic: '../'}
// ])

  return (
    <div className="App">
      <div className = "container">
      <Header title = { title } />
        <div className = "row">
          <Question/>
          <Answer/>
          <About/>
        </div>
      </div>
    </div>
  );
}

export default App;

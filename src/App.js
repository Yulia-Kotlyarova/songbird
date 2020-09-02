import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Question from './components/Question';
import Answer from './components/Answer';
import About from './components/About';
import birdsData from './store/state';

function randomInteger(min, max) {
  let a = min + Math.random() * (max + 1 - min);
  return Math.floor(a);
}
let rand = randomInteger(0, 5);

let round1 = birdsData[0][rand];
let round2 = birdsData[1][rand];
let round3 = birdsData[2][rand];
let round4 = birdsData[3][rand];
let round5 = birdsData[4][rand];
let round6 = birdsData[5][rand];

let rounds = [round1, round2, round3, round4, round5, round6];

function App() {

let[title, setTitle] = React.useState([
    { id: 1, active:true, title: 'разминка'},
    { id: 2, active:false, title: 'воробьиные'},
    { id: 3, active:false, title: 'лесные птицы'},
    { id: 4, active:false, title: 'певчие птицы'},
    { id: 5, active:false, title: 'хищные птицы'},
    { id: 6, active:false, title: 'морские птицы'},
])

let[birds, setBirdsData] = React.useState(rounds); // BIRD FOR EACH ROUND
let[birdsRound, setBirdsRound] = React.useState(rounds); // BIRD FOR ONE ROUND

let onChoice = (e) => {
  setBirdsRound(
      birdsRound = birdsRound.map(bird => {
          if (bird.name === e) {
              bird.completed = true;
          } 
          else if (bird.name !== e){
            bird.completed = false;
          }
          return bird
      })
  )
}

  return (
    <div className="App">
      <div className = "container">
      <Header title = { title } />
        <div className = "row">
          <Question  rounds = { rounds } />
          <Answer rounds = { rounds } birdsData = { birdsData } onChoice = { onChoice } />
          <About rounds = { rounds }  />
        </div>
      </div>
    </div>
  );
}

export default App;

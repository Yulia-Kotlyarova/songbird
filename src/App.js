import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

let[url, setUrl] = React.useState([

])

let[id, setId] = React.useState([

])

let[audio, setAudio] = React.useState([

])

const [isLoading, setLoading] = React.useState(true)

useEffect(() => {
  const fetchItems = async () => {
    const result = await axios('https://cors-anywhere.herokuapp.com/https://www.xeno-canto.org/api/2/recordings?query=cnt:russia ');
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    let rand = randomInteger(1, 99);

    let name = result.data.recordings[rand].en;
    let id = result.data.recordings[rand].id;
    let audio = result.data.recordings[rand].file;

    console.log(result.data.recordings[rand]);
    setInfo(name);
    setId(id);
    setAudio(audio);
    setLoading(false);

    const resultPic = await axios(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=${result.data.recordings[rand].sp}`);


    let url = resultPic.data.photos.photo[0].url_m;
    setUrl(url);
    // setInfo(name);
    // setLoading(false);
  }

  fetchItems();
}, [])

  return (
    <div className="App">
      <div className = "container">
      <Header title = { title } />
        <div className = "row">
          <Question isLoading = {isLoading} info = {info} id = {id} url = {url} audio = {audio} />
          <Answer info = {info} />
          <About info = {info} url = {url} audio = {audio} />
        </div>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Landing from './Landing/Landing';
import {Routes,Route} from 'react-router-dom';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import axios from 'axios';
import { useState } from 'react';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY ='25bab1795946.826a4e7d4eec5dfd0a7d';
function App() {
const [characters,setCharacters] = useState([]);

const onSearch =(id)=>{
axios (`${URL_BASE}/${id}?key=${API_KEY}`)
.then(response => response.data)
.then((data)=>{
  if (data.name){
    setCharacters((oldChars)=> [...oldChars,data]);
  }else{
    window.alert('!no Hay personajes con este ID!');
  }
});
}

const onClose =(id) =>{
  const characterFiltered = characters.filter(character => character.id !== Number(id) )
  setCharacters(characterFiltered)
}


  return (
    <div className="App">
<Nav onSearch={onSearch}/>
<Cards characters={characters} onClose={onClose}/>

  <Routes>
<Route path='/' element={<Landing/>}/>
<Route path='login' element={Form}/>
<Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
<Route path='/about' element= {<About/>}/>
<Route path='/detail/:id' element= {<Detail/>}/>

  </Routes>
    </div>
  );
}

export default App;

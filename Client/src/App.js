import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import Form from './components/Form';
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App() {
   let [characters, setCharacters] = useState([]); 
   let [access, setAccess] = useState(false);
   let location = useLocation();
   const navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const result = await axios(URL + `?email=${email}&password=${password}`)
         const { data } = result;
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } 
      catch (error) {
         console.log(error);
      }
   }
   
   async function onSearch(id) { 
      if ( characters.find(character => character.id===Number(id)) ) {
         alert('El personaje ya esta agregado!');
         return;
      }

      try {
         const result = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const { data } = result;
         if (data.name)
            setCharacters((characters) => [...characters, data]);
         else 
            window.alert('¡No hay personajes con este ID!');
      }
      catch (error) {
         console.log(error);
      }
   } 

   function onClose(id) {
      const arrFiltered = characters.filter((obj) => obj.id!=Number(id));
      setCharacters(arrFiltered);
   }

   useEffect(() => { !access && navigate('/'); }, [access]);
   
   return (
      <div id='App' className='App'>
         {location.pathname!=='/' ? (<Nav onSearch={onSearch} />) : null }
         <Routes>
            <Route path= '/' element={<Form login={login}/>} /> 
            <Route path= '/home' element={<Cards characters={characters} onClose={onClose}/> } />
            <Route path= '/about' element={<About/>} />
            <Route path= '/detail/:id' element={<Detail/>} />
            <Route path= '/favorites' element={<Favorites onClose={onClose}/>} />
         </Routes>  
      </div>
   );
}

export default App; 

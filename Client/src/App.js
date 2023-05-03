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
   let email = 'maximo.chertudi@gmail.com';
   let password = 'Password!';
   let location = useLocation();
   const navigate = useNavigate();

   function login(userData) {
      if (userData.email===email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }

   // function onSearch(id) {
   //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((characters) => [...characters, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   function onClose(id) {
      setCharacters(characters.filter((obj) => obj.id!==Number(id)));
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

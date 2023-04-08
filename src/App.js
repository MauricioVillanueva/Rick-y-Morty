import './App.css'
import Nav from './components/Nav/Nav'
import { useEffect, useState } from 'react'
import Form from './components/Form/Form.jsx'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

function App () {
 //! HOOKS
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters,setCharacters] = useState([]);
  const { access, setAccess } = useState(false);

  useEffect(() => {
    !access && navigate("/")
  }, [access]);

  //! CREDENCIALES FAKE
  const username = "mauriciovillanueva@gmail.com";
  const password = "rideordie31";

 //! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "2e2b897b4891.93528e4d79d430711417";

    if(characters.find((char) => char.id === id)){
      return alert("Personaje repetido")
    } else {
      fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
             // setCharacters([...characters, data]);
         } else {
           alert('No hay personajes con ese ID');
         }
      });
    }
 };

  const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id ));
 };

  const login = (userData) => {
    if(userData.name === username && userData.password === password){
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }

 // ! RENDER
  return (
    <div className='App' style={{ padding: '25px' }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/"
        element={<Form login={login}/>}
        />
        <Route path="/home" 
        element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route path="/about" 
        element={<About/>}
        />
        <Route path="/detail/:detailId" 
        element={<Detail/>}
        />
      </Routes>
      <hr />
    </div>
  )}
}
export default App

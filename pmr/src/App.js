import './Styles/App.css';
import Nav from  './components/Nav'
import Hero from  './components/Hero'
import Banner from './components/Banner'
import Comments from './components/Comments'
import {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {
  const [listOfEntries, setEntries] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true)


  useEffect(()=>{
    Axios.get('http://localhost:3001/getEntry').then((response) => {
      setEntries(response.data)
    })
  }, []);
  
  return (
    <div className="App">
      <Nav />
      <Banner />
      {loggedIn && <Hero />}
      {loggedIn && <div>
        {listOfEntries.map((user) =>{
          return (
            <Comments 
              name = {user.user}
              entry = {user.entry}
              date = {user._id}
            />
          )
        })}
      </div>}
    </div>
  );
}

export default App;


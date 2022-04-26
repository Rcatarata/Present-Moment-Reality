import './Styles/App.css';
import Nav from  './components/Nav'
import Hero from  './components/Hero'
import Banner from './components/Banner'
import Comments from './components/Comments'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Hero />
      <Comments 
        name = 'jeff'
        date = 'today'
      />
      <Comments 
        name = 'jeff'
        date = 'today'
      />
      <Comments 
        name = 'jeff'
        date = 'today'
      />
    </div>
  );
}

export default App;

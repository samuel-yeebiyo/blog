import Nav from './components/resusable/Nav';
import Home from './components/Home';
import Articles from './components/Articles';
import Post from './components/resusable/Post'
import Footer from './components/resusable/Footer';

import {Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="main-container">
        <Route path="/" exact component={()=> <Home/>}/>
        <Route path="/articles" exact component={()=> <Articles/>}/>
        <Route path="/articles/sample" exact component={()=> <Post/>}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

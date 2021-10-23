import Nav from './components/resusable/Nav';
import Home from './components/Home';
import Articles from './components/Articles';
import About from './components/About';
import Post from './components/resusable/Post';
import Footer from './components/resusable/Footer';

import {Route, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

import './App.css';

function App() {

  const [meta, setMeta] = useState([]);

  useEffect(()=>{
    async function fetchMetaD(){
      await fetch('http://192.168.137.1:5000/api/get-metadata').then( async (res)=> {
          
        res= await res.json()
        console.log("Fetched: ", res)
        setMeta(res);

      }).catch(err => console.log(err))
    }

    fetchMetaD()

  },[])


  return (
    <div className="App">
      <Nav/>
      <div className="main-container">
        <Route path="/" exact component={()=> <Home meta={meta}/>}/>
        <Route path="/articles" exact component={()=> <Articles meta={meta}/>}/>
        <Route path="/about" exact component={()=> <About/>}/>
        {
          meta.map((item)=>(
            <Route path={item.path} exact component={()=> <Post hero={item.hero} id={item.id}/>}/>
          ))
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;

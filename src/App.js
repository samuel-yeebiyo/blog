import Nav from './components/resusable/Nav';
import Home from './components/Home'
import Footer from './components/resusable/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="main-container">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

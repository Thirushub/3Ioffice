import React from 'react';
import { BrowserRouter as Router, Link ,Routes, Route,} from 'react-router-dom';
import Home from './Home'
import About from './Contact'
import Contact from './Contact';

const App = () => {
  return (
<Router>
      <div className="App">
    <div >
          <Link to="/"><button>Home</button></Link>
          <Link to="/about"><button>About</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
        </div>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact"element={<Contact />}></Route>
        </Routes>
    </div>
    
    </Router>
    );
    }
    
    
    export default App;
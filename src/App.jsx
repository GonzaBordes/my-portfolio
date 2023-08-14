import './index.css';
import "./variables.css";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from './pages/Home';
import useLocoScroll from './hooks/UseLocoScroll';

function App() { 
  
  useLocoScroll(true)

 

  return (
    <div className="App" data-scroll-container>
      <Home />         
    </div>               
  )
}

export default App;

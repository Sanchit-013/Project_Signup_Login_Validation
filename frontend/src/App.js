import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './compo/signup';
import Login from './compo/login';
import Navv from './compo/nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navv/>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      </BrowserRouter>
      {/* <Navv/>
      <Signup /> */}
      
     
    </div>
  );
}

export default App;

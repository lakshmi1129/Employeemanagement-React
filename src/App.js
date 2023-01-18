import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Edit from './components/Edit'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/edit' element={<Edit/>} />
    </Routes>


    </div>
  );
}

export default App;

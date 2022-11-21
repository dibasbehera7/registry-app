import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Registry from './routes/Registry';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registry' element={<Registry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

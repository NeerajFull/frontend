import { Route, Routes } from 'react-router-dom';
import './App.css';
import OutFooter from './components/OutFooter';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import MePage from './components/MePage';

function App() {
  return (
    <div className="App">

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/me' element={<MePage />} />
      </Routes>
      <OutFooter />
    </div>
  );
}

export default App;

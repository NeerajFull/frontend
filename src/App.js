import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import OutFooter from './components/OutFooter';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Login from './components/Login';
import Win from './components/Win';
import Mine from './components/Mine';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {

  const userAccessToken = useSelector(store => store.user.userAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (userAccessToken && (window.location.href.includes("login") || window.location.href.includes("register"))) {
      navigate("/mine");
    } else if (!userAccessToken) {
      (window.location.href.includes("mine") || window.location.href.includes("win")) && navigate("/login")
    }
  }, [userAccessToken, window.location.href])

  return (
    <div className="App">

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/win' element={<Win />} />
        <Route path='/mine' element={<Mine />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
      <OutFooter />
    </div>
  );
}

export default App;

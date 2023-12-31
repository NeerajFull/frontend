import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import OutFooter from './components/OutFooter';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import Login from './components/Login';
import Win from './components/Win';
import Mine from './components/Mine';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import axios from 'axios';
import { setIsLogin } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phone = localStorage.getItem("maryPhone");
  const isLogin = useSelector(store => store.user.isLogin);

  const getLoginStatus = async () => {
    try {
      if (phone) {
        const data = await axios.post("http://localhost:3000/api/get-status", {
          phone: phone
        });
        if (data.data.status) {
          dispatch(setIsLogin(data.data.isLoggedIn));
          return data.data.isLoggedIn;
        } else {
          alert("Not able to get the login status");
        }
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLoginStatus()
      .then(res => {
        if (res) {
          return;
        } else {
          navigate("/login");
        }
      })
      .catch(err => console.log(err));
  }, []);



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

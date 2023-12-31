import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../redux/slices/userSlice";


const Login = () => {

    const dispatch = useDispatch();

    const [phone, setPhone] = useState("+91");
    const [password, setPassword] = useState(null);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        try {
            if (phone.length > 3 && password) {
                const data = await axios.post("http://localhost:3000/api/login-user", {
                    phone, password
                });
                console.log(data)
                const d = await data.data;
                if (d.status) {
                    const data = await axios.patch("http://localhost:3000/api/set-login-status", {
                        phone,
                        isLoggedIn: true
                    });
                    if (data.data.status) {
                        localStorage.setItem("maryPhone", phone);
                        dispatch(setIsLogin(true));
                        navigate("/mine");
                    } else {
                        alert("something went wrong");
                    }
                } else {
                    setErrorMessage(d.message);
                }
            }
            else if (phone.length <= 3) {
                setPhoneError(true);
                setErrorMessage("Phone number is required")
            } else if (!password) {
                setPasswordError(true);
                setErrorMessage("Password is required")
            } else {
                setPhoneError(true);
                setPasswordError(true);
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setPasswordError(true);
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setPhoneError(false);
            setPasswordError(false);
            setErrorMessage("");
        }, 5000)
    }, [phoneError, passwordError, errorMessage])


    return <>
        <header className="me-header">
            <div className="header-div">
                <img className="left-arrow" src="Images/LeftArrow.png" alt="" />
                <span className="me-left-text">Login</span>
            </div>
        </header>
        <div className="login-page">
            <form name="myForm" method="post">
                <div id="check-karo1" className="mobile">
                    <img className="mobile-img" src="Images/Mobile.png" alt="phone" />
                    <input
                        className="mobile-inp"
                        type="text"
                        name="Uname"
                        placeholder="Mobile Number"
                        onChange={(e) => setPhone(e.target.value.trim())}
                        value={phone}
                    />
                </div>
                <span style={{ fontSize: "13px", color: "red", display: phoneError ? "block" : "none" }}>{errorMessage}</span>

                <div id="right-number"></div>
                <div id="check-karo2" className="mobile">
                    <img className="mobile-img" src="Images/KeyPass.png" alt="keys" />
                    <input
                        className="mobile-inp"
                        type="password"
                        name="Upassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}
                    />
                </div>
                <span style={{ fontSize: "13px", color: "red", display: passwordError ? "block" : "none" }}>{errorMessage}</span>
                <div id="right-pass">
                    {/* <span id ="pass-text">Password is required</span> */}
                    {/* <span id ="pass-text">Enter a valid Password</span> */}
                </div>
            </form>
            <div style={{ textAlign: "center", marginTop: 40 }}>
                <button
                    className="btn-me"
                    id="logButton"
                    onClick={handleLogin}
                >Login</button>
            </div>
        </div>
        <div style={{ textAlign: "center" }}>
            <button className="btn-me-1" onClick={() => navigate("/register")}>Resgister</button>
            <button className="btn-me-1" onClick={() => navigate("/forgotpassword")}>Forgot Password?</button>
        </div>
    </>
}

export default Login;
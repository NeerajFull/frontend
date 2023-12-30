import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {


    const [phone, setPhone] = useState("+91");
    const [verificationCode, setVerificationCode] = useState("");
    const [password, setPassword] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [verificationError, setVerificationError] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const navigate = useNavigate();

    const handleOtp = async () => {
        try {
            if (phone) {
                const data = await axios.post("http://localhost:3000/api/send-otp", {
                    phone
                })
                if (data.data.status)
                    setIsOtpSent(true);
                else
                    alert(data.data.message);
            } else {
                setPhoneError(true);
            }
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
        }

    }

    const handleRegister = async () => {
        try {
            if (phone.length > 3 && password && verificationCode) {
                const data = await axios.patch("http://localhost:3000/api/forgot-password", {
                    phone, password, otp: verificationCode
                })

                if (data.data.status) {
                    navigate("/mine");
                } else {
                    alert("Something went wrong, Please wait");
                }
            } else {
                if (phone.length <= 3) {
                    setPhoneError(true);
                } else if (!password) {
                    setPasswordError(true);
                } else if (verificationCode) {
                    setVerificationError(true);
                }
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }

    }

    useEffect(() => {
        setTimeout(() => {
            setIsOtpSent(!isOtpSent);
        }, 60000)
    }, [isOtpSent]);

    useEffect(() => {
        setTimeout(() => {
            setPhoneError(false);
            setPasswordError(false);
            setVerificationError(false);
        }, 5000)
    }, [phoneError, passwordError])



    return <>
        <header className="header">
            <div className="header1">
                <a href="/Me.html">
                    <img className="left-arrow" src="/Images/LeftArrow.png" alt="" />
                </a>
                <p className="header-text">Reset Password</p>
            </div>
        </header>
        <div className="main-box">
            <div className="mobile-number">
                <img className="logo" src="/Images/Mobile.png" alt="" />
                <input type="text" name id="hello-input" value={phone} onChange={(e) => setPhone(e.target.value.trim())} placeholder="Mobile Number" />
            </div>
            <span style={{ fontSize: "13px", color: "red", display: phoneError ? "block" : "none" }}>Mobile number is required</span>
            <div className="verification">
                <div style={{
                    width: '60%', height: '3.5rem', paddingLeft: '1rem', display: 'flex', alignItems: 'center', boxShadow: `0 3px 1px -2px rgba(0,0,0,.2), 
                        0 2px 2px 0 rgba(0,0,0,.14), 
                        0 1px 5px 0 rgba(0,0,0,.12)`}}>
                    <img className="logo" src="/Images/suggestions.png" alt="" />
                    <input type="text" name id="hello-input" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value.trim())} placeholder="Verification Code" />
                </div>
                <span style={{ fontSize: "13px", color: "red", display: verificationError ? "block" : "none" }}>Verification code is required</span>
                <div onClick={handleOtp} style={{
                    width: '35%', height: '3.3rem', marginLeft: '5%', display: 'flex', alignItems: 'center', boxShadow: `0 3px 1px -2px rgba(0,0,0,.2), 
                        0 2px 2px 0 rgba(0,0,0,.14), 
                        0 1px 5px 0 rgba(0,0,0,.12)`}}>
                    <button disabled={isOtpSent} className="btn-otp">{!isOtpSent ? "OTP" : "Please wait for few sec"}</button>
                </div>
            </div>
            <div className="logo mobile-number">
                <img className="logo" src="/Images/KeyPass.png" alt="" />
                <input type="text" name id="hello-input" value={password} onChange={(e) => setPassword(e.target.value.trim())} placeholder="New Password" />
            </div>
            <span style={{ fontSize: "13px", color: "red", display: passwordError ? "block" : "none" }}>Password is required</span>
            <button onClick={handleRegister} className="btn-register">
                Continue
            </button>
        </div>
    </>
}

export default ForgotPassword;


const MePage = () => {

    function checkLogin() {

        const un = document.forms["myForm"]["Uname"].value;
        const pw = document.forms["myForm"]["Upassword"].value;

        if (un === "hello" && pw === "1234") {
            window.location.href = "WelcomePage.html"
        }
        else {
            console.log("Invalid username or password")
        }
    }

    return <>
        <>
            <header className="me-header">
                <div className="header-div">
                    <img className="left-arrow" src="Images/LeftArrow.png" alt="" />
                    <span className="me-left-text">Login</span>
                </div>
            </header>
            <div className="login-page">
                <form name="myForm" method="post">
                    <div id="check-karo1" className="mobile">
                        <img className="mobile-img" src="Images/Mobile.png" alt="" />
                        <input
                            className="mobile-inp"
                            type="text"
                            name="Uname"
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div id="right-number"></div>
                    <div id="check-karo2" className="mobile">
                        <img className="mobile-img" src="Images/KeyPass.png" alt="" />
                        <input
                            className="mobile-inp"
                            type="text"
                            name="Upassword"
                            id=""
                            placeholder="Password"
                        />
                    </div>
                    <div id="right-pass">
                        {/* <span id ="pass-text">Password is required</span> */}
                        {/* <span id ="pass-text">Enter a valid Password</span> */}
                    </div>
                </form>
                <div style={{ textAlign: "center", marginTop: 40 }}>
                    <input
                        type="button"
                        className="btn-me"
                        id="logButton"
                        defaultValue="Login"
                        onClick={checkLogin}
                    />
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <button className="btn-me-1">Resgister</button>
                <button className="btn-me-1">Forgot Password?</button>
            </div>
        </>

    </>
}

export default MePage;
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OutFooter = () => {
    const navigate = useNavigate();
    const isLogin = useSelector(store => store.user.isLogin);

    return <>
        <div className="footer-div">
            <button id="myButton" className="Page1 flex-class" onClick={() => navigate("/")}>
                <img className="footer-img" src="Images/Home.png" alt="" />
                <span className="text-footer">Home</span>
            </button>
            <button className="Page2 flex-class" onClick={() => navigate("/search")}>
                <img className="footer-img" src="Images/Search.png" alt="" />
                <span className="text-footer">search</span>
            </button>
            {
                !isLogin ?
                    <button id="myButton" className="Page3 flex-class" onClick={() => navigate("/login")}>
                        <img className="footer-img" src="Images/Me.png" alt="" />
                        <span className="text-footer">Me</span>
                    </button>
                    :

                    <>
                        <button id="myButton" className="Page3 flex-class" onClick={() => navigate("/win")}>
                            <img className="footer-img" src="Images/win.png" alt="" />
                            <span className="text-footer">Win</span>
                        </button>
                        <button id="myButton" className="Page3 flex-class" onClick={() => navigate("/mine")}>
                            <img className="footer-img" src="Images/Me.png" alt="" />
                            <span className="text-footer">My</span>
                        </button>
                    </>
            }
        </div>

    </>
}

export default OutFooter;
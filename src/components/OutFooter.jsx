import { useNavigate } from "react-router-dom";

const OutFooter = () => {
    const navigate = useNavigate();

    return <>
        <div className="footer-div">
            <a id="myButton" className="Page1 flex-class" onClick={() => navigate("/")}>
                <img className="footer-img" src="Images/Home.png" alt="" />
                <span className="text-footer">Home</span>
            </a>
            <a className="Page2 flex-class" onClick={() => navigate("/search")}>
                <img className="footer-img" src="Images/Search.png" alt="" />
                <span className="text-footer">search</span>
            </a>
            <a id="myButton" className="Page3 flex-class" onClick={() => navigate("/me")}>
                <img className="footer-img" src="Images/Me.png" alt="" />
                <span className="text-footer">Me</span>
            </a>
        </div>

    </>
}

export default OutFooter;
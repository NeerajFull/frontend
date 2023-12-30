import { useDispatch } from "react-redux";
import { getUserAccessToken } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Mine = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(getUserAccessToken(""))
        navigate("/login");
    }

    return <>

<>
  <header className="mine-header">
    <div className="user-details">
      <div className="left">
        <div className="left-img">
          <img className="nine" src="Images/Nine.svg" alt="" />
        </div>
        <div className="left-info">
          <p className="user-name">User: 919773503609</p>
          <p className="user-id">ID: 593602</p>
        </div>
      </div>
      <div className="right">
        <img className="bell" src="Images/bell.png" alt="" />
      </div>
    </div>
    <div className="money">
      <div className="balance">
        <p>₹ 0.00</p>
        <p>Balance</p>
        <button className="btn-balance">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="welcome/Recharge.html"
          >
            Recharge
          </a>
        </button>
      </div>
      <div className="commission">
        <p>₹ 0</p>
        <p>Commission</p>
        <button className="btn-commission">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="welcome/See.html"
          >
            See
          </a>
        </button>
      </div>
      <div className="intrest">
        <p>₹ 0</p>
        <p>Intrest</p>
        <button className="btn-intrest">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="welcome/See.html"
          >
            See
          </a>
        </button>
      </div>
    </div>
  </header>
  <div className="main-options">
    <ul>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/signIn.png" alt="" />
            <p className="list-text">Sign In</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/order.png" alt="" />
            <p className="list-text">Orders</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/promotion.png" alt="" />
            <p className="list-text">Promotion</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/Envelope.png" alt="" />
            <p className="list-text">Red Envelope</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li className="wallet-list-js">
        <div className="flex-box wallet-click">
          <div className="left-side-flex">
            <img className="signIn" src="Images/wallet.png" alt="" />
            <p className="list-text">Wallet</p>
          </div>
          <div className="right-side-flex wallet-right-js">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
        <div className="remove-div"></div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/BankCard.png" alt="" />
            <p className="list-text">Bank Card</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/Address.png" alt="" />
            <p className="list-text">Adress</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box wallet-click-new">
          <div className="left-side-flex">
            <img className="signIn" src="Images/security.png" alt="" />
            <p className="list-text">Account security</p>
          </div>
          <div className="right-side-flex wallet-right-js-new">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
        <div className="js-list-new">
          <button href="#" style={{ textDecoration: "none" }}>
            <div className="list-p">Reset Password</div>
          </button>
        </div>
      </li>
      <li>
        <div className="flex-box wallet-click-upper">
          <div className="left-side-flex">
            <img className="signIn" src="Images/AppDownload.png" alt="" />
            <p className="list-text">App Download</p>
          </div>
          <div className="right-side-flex wallet-right-js-upper">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
        <div className="js-list-upper">
          <button href="#" style={{ textDecoration: "none" }}>
            <div className="list-p">Android Download</div>
          </button>
        </div>
      </li>
      <li>
        <div className="flex-box">
          <div className="left-side-flex">
            <img className="signIn" src="Images/suggestions.png" alt="" />
            <p className="list-text">Complaints &amp; Suggestions</p>
          </div>
          <div className="right-side-flex">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div className="flex-box wallet-click-last">
          <div className="left-side-flex">
            <img className="signIn" src="Images/about.png" alt="" />
            <p className="list-text">About</p>
          </div>
          <div className="right-side-flex wallet-right-js-last">
            <img className="list-down" src="Images/list-down.png" alt="" />
          </div>
        </div>
        <div className="js-list-last">
          <button href="#" style={{ textDecoration: "none" }}>
            <div className="list-p">Privacy Policy</div>
          </button>
          <button href="#" style={{ textDecoration: "none" }}>
            <div className="list-p">Risk Disclosure Agreement</div>
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div className="logout">
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  </div>
</>


    </>
}

export default Mine;
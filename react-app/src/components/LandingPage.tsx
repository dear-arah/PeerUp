import { useNavigate } from 'react-router-dom';



function LandingPage() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/new-page');
    };

    return (
      <div className="LandingPage">
        <div className="LandingPageLeft">
          <h1 className="PeerUpLandingPage">PeerUp</h1>
          <p className="Tagline">Upskill with a mentor perfectly paired for you.</p>
  
          <div className="auth-tabs">
            <p className="active-tab" id="login-txt">Login</p>
            <p className="inactive-tab" id="signup-txt">Sign Up</p>
          </div>
  
          <div className="input-fields">
            <div className="input-wrapper">
              <label>Username</label>
              <input type="text" placeholder="Enter Username" />
            </div>
          
            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
          </div>
  
          <button className="login-button" onClick={handleClick}>Login</button>
          <p className="forgot-password">Forgot Password?</p>
        </div>
  
        <div className="LandingPageRight">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <img src="./resources/arrow.svg" alt="Arrow" className="arrow" />
        </div>
      </div>
    );
  }
  


export default LandingPage;

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const navigate = useNavigate();

  const showForm = (formType: 'login' | 'signup') => {
    setActiveTab(formType);
  };

  const homepage = () => {
    navigate('/homepage');
  };

  return (
    <div className="LandingPage">
      <div className="LandingPageLeft">
        <h1 className="PeerUpLandingPage" onClick={homepage}>PeerUp</h1>
        <p className="Tagline">Upskill with a mentor perfectly paired for you.</p>

        <div className="auth-tabs">
          <button
            className={`btn ${activeTab === 'login' ? 'btn-primary' : 'btn-secondary'} active-tab`}
            id="login-txt"
            onClick={() => showForm('login')}
          >
            Login
          </button>
          <button
            className={`btn ${activeTab === 'signup' ? 'btn-primary' : 'btn-secondary'} inactive-tab`}
            id="signup-txt"
            onClick={() => showForm('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="displayLoginSignUp">
          <main>
            {activeTab === 'login' ? <Login /> : <SignUp />}
          </main>
        </div>
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
};

export default LandingPage;

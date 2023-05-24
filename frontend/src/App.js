import React, { useState, useLayoutEffect, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Game from './pages/Game';
import GameSearch from './pages/GameSearch';
import Layout from './pages/Layout'
import AuthBG from './pages/auth/AuthBG';
import PopupBGDefault from './components/PopupBGDefault';
import Coach from './pages/Coach';
import Dashboard from './pages/Dashboard';
import ExtraLayout from './pages/ExtraLayout';
import LegalLayout from './components/Legal/LegalLayout';
import BecomingACoach from './pages/BecomingACoach';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProgressBar from "@badrap/bar-of-progress";


function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage(localStorage.getItem('language'));
    }else{
      localStorage.setItem('language', language);
    }
  }, []);

  function toggle_login() {
    setLoginVisible(!loginVisible);
    setSignupVisible(false);
  }
  function toggle_signup() {
    setSignupVisible(!signupVisible);
    setLoginVisible(false);
  }
  function close_popup() {
    setSignupVisible(false);
    setLoginVisible(false);
  }

  
  return (
      <div id="App" dir={language==="ar"?"rtl":"ltr"}>
      <BrowserRouter>
          <Wrapper>
            {/* Login Popup */}
            {loginPopUp()}

            {/* Signup Popup */}
            {signupPopUp()}
            <Routes>
              <Route path="/" element={<Layout toggle_login={toggle_login} toggle_signup={toggle_signup} />}>
                <Route index element={<Home />} />
                <Route path="game" element={<Game />} />
                <Route path="search" element={<GameSearch />} />
                <Route path="coach" element={<Coach />} />
                <Route path="join" element={<BecomingACoach />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/terms" element={<LegalLayout title="Terms and Conditions" />} />
              <Route path="/signup" element={<AuthBG><Signup /></AuthBG>} />
              <Route path="/login" element={<AuthBG><Login /></AuthBG>} />
            </Routes>
          </Wrapper>
      </BrowserRouter>
      </div>


  );

  function signupPopUp() {
    return signupVisible &&
      <PopupBGDefault close_popup={close_popup}><Signup toggle_login={toggle_login} toggle_signup={toggle_signup} /></PopupBGDefault>;
  }

  function loginPopUp() {
    return loginVisible &&
      <PopupBGDefault close_popup={close_popup}><Login toggle_login={toggle_login} toggle_signup={toggle_signup} /></PopupBGDefault>;
  }

 
}
const Wrapper = ({ children }) => {
  const progress = new ProgressBar(
    {
      size: 4,
      color: "#FE595E",
      className: "bar-of-progress",
      delay: 80,
    }
  );
  const [prevLocation, setPrevLocation] = useState(null);
  const location = useLocation();


  const handleRouteChange = (url) => {
    progress.start();
  };
  const handleRouteComplete = (url) => {
    progress.finish();
  }

  useEffect(() => {
    if (prevLocation !== location.pathname) {
      setTimeout(
        () => {handleRouteComplete()}
      ,200) }
  });

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    if (prevLocation !== location.pathname) {
      handleRouteChange();
    }
    setPrevLocation(location.pathname);
  }, [location.pathname]);
  return children
}
export default App;

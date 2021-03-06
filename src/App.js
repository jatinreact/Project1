import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Register from './Components/Register/Register';
import Login from './Components/Register/Login';
import VerifyOtp from './Components/Register/VerifyOtp';
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/FAQ';
import AboutUs from './Components/AboutUs/AboutUs';
import InvestmentPackages from './Components/InvestmentPackages/InvestmentPackages';
import Referrals from './Components/Referrals/Referrals';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/verify-otp" component={VerifyOtp}/>
      <Route exact path="/faq" component={FAQ}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/investment-packages" component={InvestmentPackages}/>
      <Route exact path="/referrals" component={Referrals}/>
    </Switch>
    </>
  );
}

export default App;

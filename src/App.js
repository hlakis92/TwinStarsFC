import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Club from "./pages/Club/Club";
import News from "./pages/News/News";
import About from "./pages/About/About";
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Nav from './components/Nav';
// import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
        <img 
        src={require(".//TwinStarsLogoNBG.png")} 
        alt="TwinstarsLogo" 
        width="250" 
        height="250" 
        top="10" />
        <div>
          <h1 style = {{
          width : "100%", 
          height : "100%", 
          float: "right"}}>
            One Team One Dream
          </h1>
          </div>
          <Nav />
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/" element={<About />} />
                <Route exact path="/" element={<Club />} />
                <Route exact path="/" element={<News />} />
                {/* <Route component={NoMatch} /> */}
              </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;

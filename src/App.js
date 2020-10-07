import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './css/styles.css';
import './js/scripts';

function App() {
  return (
    <div className="App">

    <Nav collapseOnSelect />
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />

    </div>
  );
}

export default App;

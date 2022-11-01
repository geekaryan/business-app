import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Interests from './components/Interests';
import Main from './components/Main';

export default function App(){
    return(
        <div>
        <Header />
        <Main />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}
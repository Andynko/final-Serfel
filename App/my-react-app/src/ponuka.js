import React, { Component } from 'react';
import logo from './logo.png';
import pizza from './pizza1.jpg';
import './App.css';

import "./People.js";
import ponuka1 from './ponuka1.png';
import ponuka2 from './ponuka2.png';

import { Link } from 'react-router-dom';

import {Tab, TabList, TabPanel, Tabs} from "react-tabs";









class App extends Component {
    render() {
        return (

            <div className="App">

            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 class="nepizzuj"> N E P I Z Z U J</h1>
        <h1 className="App-title">N E P I Z Z U J</h1>
        </header>


        <div class="Nadmenu">
            <div class="menu">

            <ul class="menu">
            <a href="/" class="domov"><div class="domov"><p class="domov">Domov</p> </div>      </a>
        <li><a href="galeria">Galéria</a>

            </li>
            <li><a href="ponuka">Ponuka</a></li>
        <li><a href="kontakt">Kontakt</a></li>
        </ul>

        </div>
        </div>

      <div class="ponuka">


            <img src={ponuka1} className="ponuka1" alt="logo" />
            <img src={ponuka2} className="ponuka2" alt="logo" />
            </div>





        <div class="spodok">
            <p class="spodok">Tešíme sa na Vás !</p>

        </div>


        </div>




    );
    }
}

export default App;



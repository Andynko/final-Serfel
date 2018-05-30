import React, { Component } from 'react';


import logo from './logo.png';
import './App.css';
import dva from './dva.png';
import tri from './tri.png';
import styri from './styri.png';
import pat from './pat.png';
import sest from './sest.png';

import osem from './osem.png';


import pizza from './pizza1.jpg';
import { Link } from 'react-router-dom';




class Users extends Component {
    componentWillMount() {
        this.setState({users: []});
    }

    componentDidMount() {
        this.loadPeople();
    }

    loadPeople() {

        fetch('https://jsonplaceholder.typicode.com/users')

            .then(response => response.json())

            .then(people => {

                this.setState({users: people});

            });

    }

    renderUsers() {
        return (

            <ul className="ludia" >
            <p>Majitel spoločnosti:</p>
        {this.state.users.filter(u => {
            return u.name.substring(0, 1).toUpperCase() === 'K'
        }).map(u => {
            return (<li key={u.id}>{u.name}</li>);
        })}
    </ul>)
    }

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

        <div class="galeria">
            <img src={dva} className="pizza1" title="pizza"/>
            <img src={tri} className="pizza1" title="pizza"/>
            <img src={styri} className="pizza1" title="pizza" />
            <img src={pat} className="pizza1" title="pizza" />
            <img src={sest} className="pizza1" title="pizza"/>
            <img src={styri} className="pizza1" title="pizza"/>
            <img src={osem} className="pizza1" title="pizza"/>
            <img src={pat} className="pizza1" title="pizza"/>
            <img src={tri} className="pizza1" title="pizza"/>
            <img src={dva} className="pizza1" title="pizza"/>
            <img src={sest} className="pizza1" title="pizza" />
            <img src={pat} className="pizza1" title="pizza"/>






            </div>

            <div class="spodok">
            <p class="spodok">Tešíme sa na Vás !</p>

        </div>










        </div>








    );
    }
}

export default Users;
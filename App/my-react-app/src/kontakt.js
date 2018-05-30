import React, { Component } from 'react';


import logo from './logo.png';
import fb from './fb.png';
import mapa from './mapa.png';
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

            <p>Dnes Vám poradí:</p>
            {this.state.users.filter(u => {
                return u.name.substring(0, 1).toUpperCase() === 'K'
            }).map(u => {
                return (<li key={u.id}>{u.name}</li>);
            })}
    </ul>)
    }

    render() {
        return (
            <div className="celok">

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
<div class="spokojny">
<div class="lava"> {this.renderUsers()}


    <button class="button">
        <div className="App-button">
            <a class ="button" href="mailto:miroslav.krsjak@euba.sk?subject=(Predmet - mailu)&body=Telo%20mailu" onClick={() => {this.handleClick}}>Pošlite nám mail!</a>
        </div>
        </button>

</div>
 <div class="prava">

            <p class="adresa">  Dolnozemská cesta 2410/1 </p>




            <p class="otvaracie">

            Nájdete nás aj na Facebooku!

            </p>

        <a href="https://www.facebook.com/andy.serfel" target="_blank"> <img src={fb} className="fb" alt="logo" /></a>

            </div>

<div class="mapa"> <p class="mapa">Mapa</p>
        <img src={mapa} className="mapa" alt="logo" />

            </div>
            </div>





            <div class="spodok">
            <p class="spodok">Tešíme sa na Vás !</p>

        </div>



            </div>








    );
    }
}

export default Users;
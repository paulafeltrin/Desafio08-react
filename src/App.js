import React, { Component } from "react";
import "./App.css";
import image from "./img/apple.jpg";

class App extends Component {
  state = {
    nome: "Paula",
    idade: 24,
    comida: "lasanha",
    musics: ["No Roots", "So Far Away", "Céu Azul"]
  };

  render() {
    return (
      <section>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comida}</h3>

        <ul className="meusDados">
          <li>{this.state.musics[0]}</li>
          <li>{this.state.musics[1]}</li>
          <li>{this.state.musics[2]}</li>
        </ul>

        <figure>
          <img src={image} />
        </figure>
      </section>
    );
  }
}

export default App;

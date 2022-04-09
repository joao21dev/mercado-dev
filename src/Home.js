import React, { Component } from "react";

import Anunciohome from "./Anunciohome.js";
import LinkCategoria from "./LinkCategoria.js";
import HeaderHome from "./HeaderHome.js";

import base from "./base";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anuncios: [],
    };

    base.bindToState("anuncios", {
      context: this,
      state: "anuncios",
    });
  }
  render() {
    let index = 0;
    return (
      <div>
        <HeaderHome />
        <div className="container">
          <h3>Últimos Anúncios</h3>
          <div className="row">
            {Object.keys(this.state.anuncios).map((key) => {
              const anuncio = this.state.anuncios[key];
              return <Anunciohome id={key} anuncio={anuncio} key={key} />;
            })}
          </div>
          <h3>Categorias</h3>
          {JSON.stringify(this.state.anuncios)}
          <div className="row">
            {this.props.categorias.map((cat, indice) => {
              return [
                <LinkCategoria categoria={cat} key={indice} />,
                ++index % 4 === 0 && (
                  <div key={"c" + indice} className="w-100"></div>
                ),
              ];
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

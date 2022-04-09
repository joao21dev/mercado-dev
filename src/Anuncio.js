import axios from "axios";
import React, { Component } from "react";

class Anuncio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anuncio: {},
      isLoading: true,
    };

    const id = this.props.match.params.idAnuncio;

    const url = `https://mercado-dev-7850f-default-rtdb.firebaseio.com/anuncios/${id}.json`;

    axios.get(url).then((data) => {
      this.setState({ anuncio: data.data, isLoading: false });
    });
  }
  render() {
    const anuncio = this.state.anuncio;

    if (this.state.isLoading) {
      return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />;
    }

    return (
      <div>
        <h1>Anuncio</h1>
        <p>{JSON.stringify(this.state.anuncio)}</p>
      </div>
    );
  }
}

export default Anuncio;

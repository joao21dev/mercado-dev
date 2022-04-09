// header interno
<>
  
  // container
  <div className="container" style={{ paddingTop: "120px" }}></div>
  // header home
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3 text-center">
        <img src={logo} className="App-logo" alt="logo" width="200" />
      </h1>
      <p className="text-center">
        <Link
          className="btn btn-anuncie btn-lg"
          to="/novo-anuncio"
          role="button"
        >
          Anuncie Grátis &raquo;
        </Link>
      </p>
    </div>
  </div>
  // anuncio home
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
      <a href="#">
        <img
          className="card-img-top"
          src="http://placehold.it/200x140"
          alt=""
        />
      </a>
      <div className="card-body">
        <h4 className="card-title">
          <Link to={`/anuncios/ver/`}>nome</Link>
        </h4>
        <h5>preco</h5>
        <p className="card-text">descricao</p>
      </div>
    </div>
  </div>
  // categoria home
  <Link
    to={`/anuncios/categoria/`}
    className="btn btn-secondary h-100 m-2 col-sm"
  >
    <i className={`fa  fa-4x`} aria-hidden="true"></i>
    <br />
    categoria
  </Link>
  // footer
  <footer className="py-5 bg-dark mt-4">
    <div className="container">
      <p className="m-0 text-center text-white">
        Copyright &copy; DevPleno.com 2017
      </p>
    </div>
  </footer>
</>;

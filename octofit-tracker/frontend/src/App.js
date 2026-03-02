import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container py-5">
      <nav className="navbar navbar-expand-lg navbar-light mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={require('./logo.svg')} alt="Octofit Logo" className="octofitapp-small-logo" />
          Octofit Tracker
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Activities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body text-center">
              <img src={logo} className="App-logo mb-3" alt="logo" />
              <h1 className="card-title display-4 mb-3">Welcome to Octofit Tracker</h1>
              <p className="card-text lead mb-4">
                Edit <span className="font-monospace">src/App.js</span> and save to reload.
              </p>
              <a
                className="btn btn-primary"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

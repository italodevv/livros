import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  document.title = 'Livros React';
  return (
    <div className="App"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={'/lista'} className="navbar-brand">Catálogo</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/dados'} className="nav-link">Novo</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

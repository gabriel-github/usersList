import React from "react";

import Usuarios from "./components/Usuarios";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";

import Home from "./components/Home";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada"

import DetalhesUsuario from "./components/DetalhesUsuario";
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuarios cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar usuarios</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/usuarios/:id">
              <DetalhesUsuario/>
            </Route>

            <Route path="/usuarios" >
              <Usuarios />
            </Route>

            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>

            <Route path="*">
              <PaginaNaoEncontrada />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}



export default App;

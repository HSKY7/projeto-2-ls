import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cabeçalho from './componentes/Cabeçalho';
import Inicio from './componentes/Inicio';
import PontosTuristicos from './componentes/PontosTuristicos';
import Serviços from './componentes/Serviços';
import Forms  from './componentes/Forms';
import Mapas from './componentes/Mapas';
import Rodape from './componentes/Rodape';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabeçalho />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Inicio />
                  <Forms />
                  <Rodape />
                </>
              }
            />
            <Route path="/serviços" element={<Serviços />} />
            <Route path="/pontosturisticos" element={<PontosTuristicos />} />
            <Route path='/mapas' element={<Mapas />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import NavBar from './components/layout/NavBar'
import Footer from "./components/layout/Footer"
import Home from "./components/pages/Home"
import BuscaNome from "./components/pages/BuscaNome"
import BuscaTipo from "./components/pages/BuscaTipo"
import ListaIniciais from "./components/pages/ListaIniciais"
import Sobre from "./components/pages/Sobre"

import Iniciais01 from "./components/iniciais/Iniciais01"
import Iniciais02 from "./components/iniciais/Iniciais02"
import Iniciais03 from "./components/iniciais/Iniciais03"
import Iniciais04 from "./components/iniciais/Iniciais04"
import Iniciais05 from "./components/iniciais/Iniciais05"
import Iniciais06 from "./components/iniciais/Iniciais06"
import Iniciais07 from "./components/iniciais/Iniciais07"
import Iniciais08 from "./components/iniciais/Iniciais08"
import Iniciais09 from "./components/iniciais/Iniciais09"

import ConsultaMunchlax from "./components/outrasConsultas/ConsultaMunchlax"
import ConsultaPikachu from "./components/outrasConsultas/ConsultaPikachu"

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/buscanome" element={<BuscaNome />} />
        <Route path="/buscatipo" element={<BuscaTipo />} />
        <Route path="/listainiciais" element={<ListaIniciais />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/listainiciais/iniciais01" element={<Iniciais01 />} />
        <Route path="/listainiciais/iniciais02" element={<Iniciais02 />} />
        <Route path="/listainiciais/iniciais03" element={<Iniciais03 />} />
        <Route path="/listainiciais/iniciais04" element={<Iniciais04 />} />
        <Route path="/listainiciais/iniciais05" element={<Iniciais05 />} />
        <Route path="/listainiciais/iniciais06" element={<Iniciais06 />} />
        <Route path="/listainiciais/iniciais07" element={<Iniciais07 />} />
        <Route path="/listainiciais/iniciais08" element={<Iniciais08 />} />
        <Route path="/listainiciais/iniciais09" element={<Iniciais09 />} />
        <Route path="/consultamuchlax" element={<ConsultaMunchlax />} />
        <Route path="/consultapikachu" element={<ConsultaPikachu />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

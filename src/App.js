import { Route, Routes, BrowserRouter } from "react-router-dom";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import TelaPropostas from "./Componentes/Telas/TelaPropostas";
  
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
                <Route path="/propostas" element={<TelaPropostas/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

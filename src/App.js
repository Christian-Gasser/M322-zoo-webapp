import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage_Component/Home.jsx'
import Attractions from './Attractions.jsx'
import Details from './Details.jsx'
import Map from './Map.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/attractions/:id" element={<Details />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;

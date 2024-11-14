import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './attractions.jsx'
import './details.jsx'
import './map.jsx'

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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage_Component/Home.jsx'
import Details from './Details.jsx'
import Map from './Map.jsx'
import Activity from './Activity_Component/Activity.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/details/:activityId?" element={<Details />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;

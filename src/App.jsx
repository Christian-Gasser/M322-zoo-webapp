import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Homepage_Component/Home.jsx'
import Details from './Details.jsx'
import Map from './Map.jsx'
import Activity from './Activity_Component/Activity.jsx';
import Header from "./Header_Component/Header";
import Footer from './Footer_Component/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/details/:activityId?" element={<Details />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

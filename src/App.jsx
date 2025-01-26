import { Routes, Route } from 'react-router-dom';
import Home from './Homepage_Component/Home.jsx'
import Details from './Details_Component/Details.jsx'
import Map from './Map_Component/Map.jsx'
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
          <Route path="/activities" element={<Activity />} />
          <Route path="/activities/:activityId/:executionId" element={<Details />} />
          <Route path="/activities/:activityId" element={<Activity />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

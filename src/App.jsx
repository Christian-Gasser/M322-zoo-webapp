import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage_Component/Home.jsx'
import Details from './components/Details_Component/Details.jsx'
import Map from './components/Map_Component/Map.jsx'
import Activity from './components/Activity_Component/Activity.jsx';
import Header from "./components/Header_Component/Header";
import Footer from './components/Footer_Component/Footer';
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

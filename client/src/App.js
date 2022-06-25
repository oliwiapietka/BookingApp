import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage/HomePage';
import SearchResultPage from './screens/SearchResultPage/SearchResultPage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HotelDetailsPage from './screens/HotelDetailsPage/HotelDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/BookingApp" element={<HomePage />} />
          <Route path="/hotels" element={<SearchResultPage />} />
          <Route path="/hotel" element={<HotelDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

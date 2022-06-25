import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage/HomePage';
import SearchResultPage from './screens/SearchResultPage/SearchResultPage';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/BookingApp" element={<HomePage />} />
          <Route path="/hotels" element={<SearchResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

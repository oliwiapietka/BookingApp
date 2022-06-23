import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import Slider from '../utils/Slider/Slider.js';
import SearchBar from '../utils/SearchBar/SearchBar';
import PropertyType from '../utils/PropertyType/PropertyType';
import Explore from '../utils/Explore/Explore';
import Footer from '../utils/Footer/Footer';

export default function HomePage() {
    return(
        <div className="home">
            <div className='photo-container'>
                <Slider />
                <SearchBar />
                <PropertyType />
                <Explore />
                <Footer />
            </div>
        </div>
    )
};
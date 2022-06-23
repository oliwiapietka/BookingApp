import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar';
import Slider from '../../components/Slider/Slider';
import SearchBar from '../../components/SearchBar/SearchBar';
import PropertyType from '../../components/PropertyType/PropertyType';
import Explore from '../../components/Explore/Explore';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
    return(
        <div className="home">
            <div className='photo-container'>
                <NavBar />
                <Slider />
                <SearchBar />
                <PropertyType />
                <Explore />
                <Footer />
            </div>
        </div>
    )
};
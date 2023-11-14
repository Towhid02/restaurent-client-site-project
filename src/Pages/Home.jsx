
import Banner from '../Components/Banner';
import Experience from '../Components/Experience';
import FoodItems from '../Components/FoodItems';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <FoodItems></FoodItems>
            <Slider></Slider>
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default Home;
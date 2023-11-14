
import Banner from '../Components/Banner';
import Chef from '../Components/Chef';
import Experience from '../Components/Experience';
import FoodItems from '../Components/FoodItems';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';


const Home = () => {
    return (
        <div className=' bg-backBg sticky'>
            <div>
            <Banner></Banner>
            <FoodItems></FoodItems>
            <Slider></Slider>
            <Experience></Experience>
            <Chef></Chef>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Home;
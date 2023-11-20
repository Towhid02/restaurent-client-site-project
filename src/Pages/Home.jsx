
import Banner from '../Components/Banner';
import Chef from '../Components/Chef';
import Customer from '../Components/Customer';
import Experience from '../Components/Experience';

import Footer from '../Components/Footer';
import Slider from '../Components/Slider';
import Foods from './Foods';


const Home = () => {
    return (
        <div>
            <div >
            <Banner></Banner>
            {/* <FoodItems></FoodItems> */}
            <Foods></Foods>
            <Slider></Slider>
            <Experience></Experience>
            <Chef></Chef>
            <Customer></Customer>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Home;
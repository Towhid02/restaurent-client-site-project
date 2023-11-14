import { Carousel } from 'flowbite-react';
import slider_2 from "../../public/assets/banner_2.jpg"
import slider_3 from "../../public/assets/banner_3.jpeg"
import slider_4 from "../../public/assets/banner_4.jpeg"


const Slider = () => {
    return (
        <div className=' max-w-3xl mx-auto my-5'>     
           <div className="h-80">
           <Carousel>
        <img className=' w-full h-96' src={slider_2} alt="..." />
        <img className=' w-full h-96' src={slider_3} alt="..." />
        <img className=' w-full h-96' src={slider_4} alt="..." />
      </Carousel>
    </div>
 
        </div>
    );
};

export default Slider;
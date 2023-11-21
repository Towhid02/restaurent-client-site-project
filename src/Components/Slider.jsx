import { Carousel } from 'flowbite-react';
import slider_2 from "../../public/assets/banner_2.jpg"
import slider_3 from "../../public/assets/banner_3.jpeg"
import slider_4 from "../../public/assets/banner_4.jpeg"
import slider_5 from "../../public/assets/slider-4.jpg"
import slider_6 from "../../public/assets/slider-5.jpeg"


const Slider = () => {
    return (
        <div className=' bg-sliderBg bg-contain rounded-3xl'>
        <div className='card mx-auto my-5'>     
           <div className="h-80">
           <Carousel>
        <img className=' w-full h-96' src={slider_2} alt="..." />
        <img className=' w-full h-96' src={slider_3} alt="..." />
        <img className=' w-full h-96' src={slider_4} alt="..." />
        <img className=' w-full h-96' src={slider_5} alt="..." />
        <img className=' w-full h-96' src={slider_6} alt="..." />
      </Carousel>
    </div>
 
        </div>
        </div>
    );
};

export default Slider;
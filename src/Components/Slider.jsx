import { Carousel } from 'flowbite-react';


const Slider = () => {
    return (
        <div className=' min-w-5xl mx-auto my-5'>     
           <div className="h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className=" bg-slider_1 bg-cover  flex h-full items-center justify-center">
          Slide 1
        </div>
        <div className=" bg-slider_2 bg-cover  flex h-full items-center justify-center ">
          Slide 2
        </div>
        <div className=" bg-slider_3 bg-cover flex h-full items-center justify-center ">
          Slide 3
        </div>
      </Carousel>
    </div>
 
        </div>
    );
};

export default Slider;
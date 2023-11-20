import { Carousel } from 'flowbite-react';
import customer_1 from "../../public/assets/customer.jpg"
import customer_2 from "../../public/assets/customer-2.jpg"
import customer_3 from "../../public/assets/customer-3.jpg"
import customer_4 from "../../public/assets/customer -4.jpg"

const Customer = () => {
    return (
        
            <div className=' my-2 hero  bg-customerBg rounded-2xl'>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='py-10 px-5 card'>
                <h1 className='text-3xl font-galada'>
                What our customer saying?
                </h1>
                
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 py-5 '>
                <div className='  rounded-2xl ' data-aos="fade-left">
                    <div className="h-56 sm:h-64  ">
                    <Carousel>
                    
        <img src={customer_1} alt="..." />
        <img src={customer_2} alt="..." />
        <img src={customer_3} alt="..." />
        <img src={customer_4} alt="..." />
      </Carousel>
      </div>
                    </div>
                    <div className='  '>
                        <p className=' text-xl font-itim '>
                        Discover the heartbeat of our restaurant through the words of our satisfied customers. Experience culinary delight and impeccable service as shared by those who have savored the flavors and ambiance that make dining at our establishment an unforgettable experience.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
        
    );
};

export default Customer;
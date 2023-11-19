import { Carousel } from 'flowbite-react';
import customer_1 from "../../public/assets/customer.jpg"
import customer_2 from "../../public/assets/customer-2.jpg"
import customer_3 from "../../public/assets/customer-3.jpg"
import customer_4 from "../../public/assets/customer -4.jpg"

const Customer = () => {
    return (
        <div>
            <div className='py-20'>
                <h1 className='text-3xl font-galada'>
                What our customer saying?
                </h1>
                <div className='flex md:flex-row lg:flex-col justify-center gap-5 '>
                    <div className='flex-1 card'>
                        <p className=' font-itim'>
                        Discover the heartbeat of our restaurant through the words of our satisfied customers. Experience culinary delight and impeccable service as shared by those who have savored the flavors and ambiance that make dining at our establishment an unforgettable experience. Join the chorus of delighted patrons and indulge in a dining journey that speaks for itself.
                        </p>
                    </div>
                    <div className='flex-1 card '>
                    <Carousel>
        <img src={customer_1} alt="..." />
        <img src={customer_2} alt="..." />
        <img src={customer_3} alt="..." />
        <img src={customer_4} alt="..." />
      </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
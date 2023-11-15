import { useLoaderData } from "react-router-dom";
import CategoryCard from "../Components/CategoryCard";


const Foods = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
           <div className="p-10 rounded-xl my-2  " >
            <h1 className=" text-center text-6xl font-grand font-bold">Our Foods Category</h1>
         
            <div className=" grid grid-cols-3 gap-5 text-center my-10"  data-aos="fade-up"
                data-aos-anchor-placement="top-center" >
            {
                categories.map(category => 
                <CategoryCard key={category?._id}
                categories={category}
                >

                </CategoryCard>)
            }
            </div>
        </div>
        </div>
    );
};

export default Foods;
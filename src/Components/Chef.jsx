import chef_1 from "../../public/assets/chef-1.jpg"
import chef_2 from "../../public/assets/chef-2.jpg"
import chef_3 from "../../public/assets/chef-3.jpg"

const Chef = () => {
    return (
        <div>
            <h1 className="text-4xl font-galada py-10">
            Experts Our Team
            </h1>

            <div className=" grid grid-cols-1  md:grid-cols-3" data-aos="zoom-in">

            <div className="card  shadow-xl">
            <figure><img className=" rounded-3xl" src={chef_3} alt="Album"/></figure>
            <div className="card-body">
            <h2 className=" text-2xl md:text-4xl font-itim font-bold">Mazabin </h2>
            <p className=" text-lg md:text-xl font-mooli">Pastry Chef</p>
            </div>
            </div>
            
            <div className="card  shadow-xl">
            <figure><img className=" rounded-3xl" src={chef_2} alt="Album"/></figure>
            <div className="card-body">
            <h2 className="text-2xl lg:text-4xl font-itim font-bold">Towhid</h2>
            <p className=" text-xl font-mooli">CEO & Founder</p>
            </div>
            </div>

            <div className="card  shadow-xl">
            <figure><img className=" rounded-3xl" src={chef_1} alt="Album"/></figure>
            <div className="card-body">
            <h2 className=" text-2xl lg:text-4xl font-itim font-bold">Noura</h2>
            <p className=" text-xl font-mooli"> Executive Chef</p>
            </div>
            </div>

            

            </div>
        </div>
    );
};

export default Chef;
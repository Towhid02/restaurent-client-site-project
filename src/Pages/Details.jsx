import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const Details = () => {
    const { user } = useContext(AuthContext)
    
    const menu = useLoaderData()
    console.log(menu);

    const {_id, name, category, chef, origin, price, image, short_description }= menu;

    const  handleOrder = ()=> {
      const data = {
        email: user.email,
        products: menu

      }  
      console.log(data);
      fetch('https://y-orcin-nu.vercel.app/orders',  {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Order Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                } else {
                  Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add order',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                  });
            }
        })
    }

    return (
        <div>
          <Navbar></Navbar>
            <div className="card glass bg-detailsBg bg-contains bg-cover bg-blend-overlay bg-opacity-40" >
  <figure><img className=" rounded-lg shadow-2xl" src={image} alt="car!"/></figure>
  <div className="card-body" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <h2 className=" text-white text-3xl md:text-5xl font-galada">{name} </h2>
    <h2 className=" text-white text-3xl md:text-5xl font-itim">{category} Platter </h2>
    <h2 className=" text-white text-xl md:text-2xl font-mooli ">Chef : {chef}</h2>
    <h2 className=" text-white text-xl md:text-2xl font-mooli">Origin : {origin}</h2>
    <h2 className="font-bold text-red-500 text-xl md:text-4xl font-grand"> Price : {price} Tk </h2>
    <p className="font-itim text-white text-2xl text-justify">{short_description}</p>
  </div>
  <div className="">
  <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-xl px-5 py-2.5 text-center mr-2 mb-2"><Link to={`/updateFood/${_id}`}>Modify</Link></button>

  <button type="button" className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-itim" onClick={()=> handleOrder()}>
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Order</span></button>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Details;
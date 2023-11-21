/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MenuCard = ({menu, menus, setMenus}) => {

    const {_id, name, category, image, price    } = menu;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://y-orcin-nu.vercel.app/menu/${_id}`, {
                    method: 'DELETE'
                })
                .then (res => res.json())
                .then(data =>{
                    console.log(data);
                    if (data.deleteCount > 0) {
                        Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                              )
                      const remaining = menus.filter(dish => dish._id !== _id) ;  
                      setMenus(remaining)  
                    }
                })
            // 
            }
          })

    }
    return (
        <div>
        <div className="card glass shadow-xl">
        <figure><img className=" w-full h-60" src={image} /></figure>
        <div className="p-5">
        <h2 className=" text-black font-bold text-lg font-itim">{name}</h2>
        <h2 className="text-black font-bold text-xl font-itim">{category} Platter</h2>
        <h2 className="text-black font-bold text-xl font-itim">Price: {price} Tk</h2>
        <div className="flex justify-center py-5">
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link to={`/details/${_id}`}>DETAILS</Link></button>

        <button type="button"  onClick={() => handleDelete(_id)} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
        </div>
        </div>
        </div>
        </div>
        );
        };

export default MenuCard;
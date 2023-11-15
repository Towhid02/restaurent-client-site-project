/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ModifyFood = () => {

    const menu = useLoaderData()
    const {_id, food_name, category, chief_name, origin, price, image }= menu;

    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;

        const food_name = form.name.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const chief_name = form.chef.value;
        const origin = form.origin.value;
        const price = form.price.value;
        const image = form.image.value;

        const updatedFood = { food_name, category, quantity, chief_name, origin, price,image }

        console.log(updatedFood);
        fetch(`http://localhost:5000/menu/${menu._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedFood)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Item Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div className=" bg-addFoodBg bg-cover p-10 md:p-24 rounded-3xl my-8 " >
            <h2 className="text-3xl font-extrabold text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full px-5 py-2.5 text-center mr-2 mb-2 font-itim">MODIFY FOOD ITEMS</h2>
            <form onSubmit={handleUpdateFood}>
              
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white"> Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            name="name" placeholder=" Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Food Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            name="category" placeholder="Category Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            name="quantity" 
                            placeholder=" Quantity" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Chef Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            name="chef" placeholder="Chef Name" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Origin</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="origin" 
                            placeholder="Origin" 
                            className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-mooli text-white">image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Modify Food Item" className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full px-5 py-2.5 text-center mr-2 mb-2 btn-block font-itim" />

            </form>
            </div>
        </div>
    );
};

export default ModifyFood;
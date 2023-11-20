/* eslint-disable react/prop-types */

const Order = ({order}) => {
    const {  name, category, origin, chef, price, image }= order;
    console.log(order);
    return (
        <div>
             <div className="card  bg-base-100 shadow-xl">
            <figure><img className="w-80 h-60" src={image} alt="Album"/></figure>
            <div className="card-body">
            <h2 className="card-title text-3xl text-[#51060b] font-bold font-itim"> {name}</h2>
            <h2 className="card-title text-[#3f5efb] font-itim">Category : {category}</h2>
            <h2 className="card-title text-[#000851] font-itim">Origin : {origin}</h2>
            <h2 className="card-title text-[#000851] font-itim">Chef : {chef}</h2>
            <p className="card-title  font-itim">Price : {price} Tk</p>
           
            </div>
</div>
        </div>
    );
};

export default Order;
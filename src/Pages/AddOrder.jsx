/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import Order from "../Components/Order";


const AddOrder = (data) => {

    const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://y-orcin-nu.vercel.app/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOrders(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Order Confirm Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching order data:", error);
        });
    }
  }, [user?.email]);
    return (
        <div>
            <h1 className=" font-bold text-5xl my-5 font-grand">My Orders </h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {
        orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
        </div>
    );
};

export default AddOrder;
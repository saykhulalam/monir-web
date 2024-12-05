import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Container from "./Container";
import OrderLoding from "./OrderLoding";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched orders:", ordersList); // Log the fetched orders
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timestamp) => {
    const date = timestamp.toDate();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Dhaka",
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const handleDelete = async (orderId) => {
    try {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders(orders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <Container>
      <div className="mt-[150px] pb-10">
        <h1 className="text-black font-bangla font-bold text-[25px]">
          Admin Panel - Orders
          <span className="ml-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            {orders.length}
          </span>
        </h1>
        {loading ? (
          <OrderLoding />
        ) : (
          <div>
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  className="mt-5 border-[2px] border-black p-5 rounded-lg"
                  key={order.id}
                >
                  <h2 className="text-[22px] font-semibold mb-1 text-black">
                    Ordered by:{" "}
                    <span className="text-green-700">
                      {order.name || "No name provided"}
                    </span>
                  </h2>

                  <h1 className="text-[18px] font-bangla font-semibold">
                    {order.product || "No product"}
                  </h1>

                  <h5 className="text-[15px] font-bangla">
                    <span className="font-bold text-blue-700">
                      Contact number:
                    </span>{" "}
                    {order.phone || "N/A"}
                  </h5>

                  <h5 className="text-[15px] font-semibold">
                    <span className="font-bold text-blue-700">Quantity: </span>(
                    {order.quantity || "N/A"} KG)
                  </h5>

                  <h5 className="text-[15px] font-pera">
                    <span className="font-bold text-blue-700">Address:</span>{" "}
                    {order.address || "No address available"}
                  </h5>

                  <h5 className="text-[15px] font-pera flex items-center gap-1">
                    <span className="font-bold text-blue-700">Date:</span>
                    <h5 className="font-bangla">
                      {formatDate(order.timestamp)}
                    </h5>
                  </h5>

                  <h5 className="text-[15px] font-pera flex items-center gap-1">
                    <span className="font-bold text-blue-700">Time:</span>
                    <h5 className="font-bangla">
                      {formatTime(order.timestamp)}
                    </h5>
                  </h5>

                  <button
                    onClick={() => handleDelete(order.id)}
                    className="text-red-500 border-[2px] border-black px-2 rounded-lg mt-2 text-[15px] hover:bg-black duration-150 font-semibold hover:border-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div className="border-[2px] border-black flex justify-center mt-20 py-1">
                <p className="text-[20px] text-red-500">No orders available.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Admin;

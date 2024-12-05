import React, { useState } from "react";
import Container from "./Container";
import ProductCard from "./ProductCard";
import producat1 from "../assets/producat1.jpg";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProducatPage = () => {
  const products = [
    {
      id: 1,
      image: producat1,
      name: "Almond Biscuits (বাদাম বিস্কুট)",
      prize: "180",
    },
    {
      id: 2,
      image: producat1,
      name: "Raisin Biscuits (কিসমিস বিস্কুট)",
      prize: "180",
    },
    {
      id: 3,
      image: producat1,
      name: "Cream Biscuits (ক্রিম বিস্কুট)",
      prize: "180",
    },
    {
      id: 4,
      image: producat1,
      name: "Cashew Biscuits (কাজু বিস্কুট)",
      prize: "180",
    },
    {
      id: 5,
      image: producat1,
      name: "Malai Biscuits (মালাই বিস্কুট)",
      prize: "180",
    },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formData, setFormData] = useState({
    name: "",      // Added name field for the customer
    address: "",
    phone: "",
    quantity: "",
  });

  const handleOrderClick = (productName) => {
    setSelectedProduct(productName);
    setIsPopupOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      product: selectedProduct,
      name: formData.name,  // Include name in the order data
      address: formData.address,
      phone: formData.phone,
      quantity: formData.quantity,
      timestamp: new Date(),
    };

    try {
      // Firestore-এ অর্ডার ডেটা যোগ করুন
      await addDoc(collection(db, "orders"), orderData);
      alert("Order placed successfully!");

      // Reset form and close popup
      setIsPopupOpen(false);
      setFormData({ name: "", address: "", phone: "", quantity: "" });
    } catch (error) {
      console.error("Error adding order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <section id="producat" className="mt-14">
      <Container>
        <h1 className="xl:text-[35px] text-[20px] py-2 font-bold text-center font-bangla bg-black text-white">
          All product (সমস্ত পণ্য)
        </h1>
        <div className="flex justify-between flex-wrap gap-5 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              prize={product.prize}
              onOrderClick={() => handleOrderClick(product.name)}
            />
          ))}
        </div>

        {/* Popup Form */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-md w-[400px]">
              <h2 className="text-xl font-bold mb-4 font-bangla">Order Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1 font-bangla">
                    Product (পণ্য)
                  </label>
                  <input
                    type="text"
                    value={selectedProduct}
                    readOnly
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1 font-bangla">
                    Name (নাম)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1 font-bangla">
                    Address (ঠিকানা)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1 font-bangla">
                    Phone (ফোন নম্বর)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1 font-bangla">
                    KG (কেজি)
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-2"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProducatPage;

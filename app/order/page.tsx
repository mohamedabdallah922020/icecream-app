"use client"
import React, { useState } from 'react';

const Order: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>(''); // State for selected flavor

  const handleFlavorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFlavor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the order submission if needed
    console.log('Submitted:', selectedFlavor);
    // You can add more logic to handle and store orders
  };

  return (
    <div>
         <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Ice Cream Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/vanilla.png" alt="Vanilla Ice Cream" className="h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-4">Vanilla</h2>
            <p className="text-gray-600">Classic creamy vanilla flavor.</p>
            <p className="text-blue-500 font-bold mt-2">$3.99</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/chocolate.png" alt="Chocolate Ice Cream" className="h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-4">Chocolate</h2>
            <p className="text-gray-600">Rich, decadent chocolate goodness.</p>
            <p className="text-blue-500 font-bold mt-2">$4.29</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/strawberry.png" alt="Strawberry Ice Cream" className="h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-4">Strawberry</h2>
            <p className="text-gray-600">Deliciously sweet and fruity strawberry flavor.</p>
            <p className="text-blue-500 font-bold mt-2">$4.19</p>
          </div>
          {/* Add more ice cream flavors in a similar manner */}
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Place Your Ice Cream Order</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <label htmlFor="flavor" className="mr-2">
            Choose a Flavor:
          </label>
          <select
            id="flavor"
            name="flavor"
            value={selectedFlavor}
            onChange={handleFlavorChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select...</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Strawberry">Strawberry</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded">
            Place Order
          </button>
        </form>
        {selectedFlavor && (
          <div className="flex items-center">
            <img src={'./images/'+selectedFlavor.toLowerCase()+'.png'} alt="Ice Cream Cone" className="h-12 mr-2" />
            <p className="text-lg">You selected: {selectedFlavor} Ice Cream</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
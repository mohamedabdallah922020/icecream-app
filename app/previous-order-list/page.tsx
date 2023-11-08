
"use client"
import React, { useState } from 'react';

interface Order {
  id: number;
  flavor: string;
  quantity: number;
}

const PreviousOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, flavor: 'Vanilla', quantity: 2 },
    { id: 2, flavor: 'Chocolate', quantity: 3 },
    // Add more example orders as needed
  ]);

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">My Previous Orders</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{order.flavor}</h2>
              <p>Quantity: {order.quantity}</p>
              {/* You can display more order details if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousOrders;
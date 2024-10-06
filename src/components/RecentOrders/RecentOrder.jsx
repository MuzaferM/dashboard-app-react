// src/components/RecentOrders.js
import React from 'react';
import './RecentOrder.scss';
import { RECENT_ORDERS } from '../../constants/constants';

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h3 className='recent-order-header'>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Purchase Date</th>
            <th>Customer</th>
            <th>Event</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {RECENT_ORDERS.map((order) => (
            <tr key={order.orderNumber}>
              <td>{order.orderNumber}</td>
              <td>{order.date}</td>
              <td>{order.customer}</td>
              <td>{order.event}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;

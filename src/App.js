// src/App.js
import React from 'react';
import './App.scss';
import Sidebar from './components/SideBar/Sidebar';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import RecentOrders from './components/RecentOrders/RecentOrder';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Overview />
        <RecentOrders />
      </div>
    </div>
  );
}

export default App;

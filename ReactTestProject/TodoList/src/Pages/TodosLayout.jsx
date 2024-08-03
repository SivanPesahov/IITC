import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';

function TodosLayout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default TodosLayout;
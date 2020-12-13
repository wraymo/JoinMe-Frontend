import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import OrderDetailView from 'src/views/order/OrderDetailView';
import IssueOrderView from 'src/views/order/IssueOrderView';
import AcceptOrderView from 'src/views/order/AcceptOrderView';
import MyRequestListView from 'src/views/myrequest/MyRequestListView';
import MyOrderListView from 'src/views/myorder/MyOrderListView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'orders/:id', element: <OrderDetailView /> },
      { path: 'accept/:id', element: <AcceptOrderView /> },
      { path: 'issue', element: <IssueOrderView /> },
      { path: 'myrequests', element: <MyRequestListView /> },
      { path: 'myorders', element: <MyOrderListView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/products" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

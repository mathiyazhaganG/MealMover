import React from 'react';
import ReactDom from 'react-dom/client';
import Header from '../components/Header';
import Body from '../components/Body';
import Error from '../components/Error';
import About from '../components/About';
import Deals from '../components/Deals';
import { createBrowserRouter,RouterProvider } from 'react-router';









const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>
  },
  {
    path: "/home",
    element: <App />,
    errorElement:<Error/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement:<Error/>
  },
  {
    path: "/deals",
    element: <Deals/>,
    errorElement:<Error/>
  }
  
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
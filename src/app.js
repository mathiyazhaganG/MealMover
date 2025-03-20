import React from 'react';
import ReactDom from 'react-dom/client';
import Header from '../components/Header';
import Body from '../components/Body';
import Error from '../components/Error';
import About from '../components/About';
import Deals from '../components/Deals';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router';
import Menu from '../components/Menu';










const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Body />,
        errorElement:<Error/>
      },
      {
        path: "/about",
        element: <About name={"mathiyazhagan G"}/>,
        errorElement:<Error/>
      },
      {
        path: "/deals",
        element: <Deals/>,
        errorElement:<Error/>
      
    },
    {
      path: "/restaurant/:id",
      element: <Menu/>,
    }
      
      
    ],
    errorElement:<Error/>
  },
 
  
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
// layout
import MainLayout from "./layout/MainLayout";
// react-router dom 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// page
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

// loader
import { loader } from "./pages/Home";

function App() {
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>,
        loader:loader
      }
    ]
  }
  
]);

return <><RouterProvider router={routes}/></>
}
export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Login from "./Screens/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);
function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

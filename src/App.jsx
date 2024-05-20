import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
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
    path: "/about-us",
    element: <AboutUs />,
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

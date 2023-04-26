import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Root from "./Pages/Root";
import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
function App() {
  return (
    <div className={classes.app}>
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
      <Footer />
    </div>
  );
}

export default App;

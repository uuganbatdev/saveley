import BottomNav from "./components/bottomNav";
import Wave from "./components/wave";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Rewards from "./pages/rewards";
import Leaderboard from "./pages/leaderboard";
import Profile from "./pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Wave />
        <BottomNav />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rewards",
        element: <Rewards />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

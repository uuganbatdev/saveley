import BottomNav from "./components/bottomNav";
import Wave from "./components/wave";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Rewards from "./pages/rewards";
import Leaderboard from "./pages/leaderboard";
import Profile from "./pages/profile";
import TopDetail from "./components/topDetail";
import { useState, createContext, useContext } from "react";
import Login from "./pages/login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

export const AppContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen w-screen overflow-x-hidden overflow-y-auto pb-16 px-7">
        <Wave />
        <TopDetail />
        <BottomNav />
        <Outlet />
      </div>
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

const loginRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen overflow-y-auto pb-16 px-7 pt-7">
        <Wave />
        <Login />
      </div>
    ),
  },
]);

function App() {
    const initAppstate = {isLoggedIn: true, email: "uuganbat.dev@gmail.com"};
  const [appState, setAppState] = useState(initAppstate);
  return (
    <AppContext.Provider value={{appState,setAppState}}>
      <InnerApp />
    </AppContext.Provider>
  );
}

function InnerApp () {
  const {isLoggedIn} = useContext(AppContext).appState;
  return (
    <>
      <ToastContainer />
      <RouterProvider router={isLoggedIn ? router : loginRouter} />
    </>
  )
}

export default App;

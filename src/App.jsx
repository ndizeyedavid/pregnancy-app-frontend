import { createBrowserRouter, RouterProvider } from "react-router-dom";
import View from "./components/View";

// routes 
import Home from "./routes/Home";
import Calendar from "./routes/Calendar";
import TimelinePage from "./routes/TimelinePage";
import Profile from "./routes/Profile";
import ListArticles from "./routes/ListArticles";
import Article from "./routes/Article";
import FoodPage from "./routes/FoodPage";
import Doctor from "./routes/Doctor";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ErrorPage from "./routes/ErrorPage";

import Sports from "./routes/Sports";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/timeline",
    element: <TimelinePage />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/articles",
    element: <ListArticles />
  },
  {
    path: "/read/:articleId",
    element: <Article />
  },
  {
    path: "/food",
    element: <FoodPage />
  },
  {
    path: "/sports",
    element: <Sports />
  },
  {
    path: "/doctor",
    element: <Doctor />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

const App = () => {
  return (
    <View>
      <RouterProvider router={router} />
    </View>
  );
};

export default App;

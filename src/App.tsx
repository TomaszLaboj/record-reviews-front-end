import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import CurrentReview from "./components/CurrentReview";
import Archives from "./components/Archives";
import RootLayout from "./Root";

const App = () => {
const router = createBrowserRouter([
  {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "current-review",
          element: <CurrentReview />,
        },
        {
          path: "archives",
          element: <Archives />,
        },
      ],
    },
])

  return (
     <RouterProvider router={router} />
  );
}
export default App;

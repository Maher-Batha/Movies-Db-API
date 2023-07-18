import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import SingleMovie from "./pages/SingleMovie";
import { loader as homePageLoader } from "./pages/HomePage";
import { loader as SingleMovieLoader } from "./pages/SingleMovie";
import SinlgePageError from "./pages/SinlgePageError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 12,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: homePageLoader(queryClient),
        element: <HomePage />,
        errorElement: <SinlgePageError />,
      },
      {
        path: "movies/:id",
        loader: SingleMovieLoader(queryClient),
        errorElement: <SinlgePageError />,
        element: <SingleMovie />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;

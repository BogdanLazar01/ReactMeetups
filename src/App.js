import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

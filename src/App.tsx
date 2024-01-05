import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";
import Navbar from "./components/Navbar";
import ActivitiesPage from "./pages/ActivitiesPage";
import MonthlyPage from "./pages/MonthlyPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<ActivitiesPage />}></Route>
          <Route path="/monthly-stats" element={<MonthlyPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route
            path="/*"
            element={
              <div className="text-center text-3xl mt-10">Page not found :(</div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

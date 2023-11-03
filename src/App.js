import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { FavoritesContext } from "./store/Favorite/context";
import { initialState, favoritesReducer } from "./store/Favorite/reducer";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import MainPage from "./pages/MainPage";
import TechPage from "./pages/TechPage";
import FootballPage from "./pages/FootballPage";
import FashionPage from "./pages/FashionPage";
import NewsTemplate from "./pages/NewsTemplate";
import Favorites from "./pages/Favorites";
import Page404 from "./pages/Page404";

export default function App() {
  const [initialLocalStorageState] = useLocalStorage("favorites", initialState);

  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    initialLocalStorageState
  );

  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  return (
    <div className="App">
      <FavoritesContext.Provider value={favoritesContextValue}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/section/technology" element={<TechPage />} />
          <Route path="/section/football" element={<FootballPage />} />
          <Route path="/section/fashion" element={<FashionPage />} />
          <Route path="/news/:newsId" element={<NewsTemplate />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

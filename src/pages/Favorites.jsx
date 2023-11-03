import React from "react";
import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/Favorite/context";
import CardsList from "../components/CardsList";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export default function Favorites() {
  const { favoritesState } = useContext(FavoritesContext);
  const { products } = favoritesState;

  const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    favoritesState
  );

  useEffect(() => {
    setLocalStorageState(favoritesState);
  }, [favoritesState, setLocalStorageState]);

  return (
    <div>
      <Layout>
        <Container className="my-5">
          <h1 align="center" className="pt-3 mb-5">
            Știrile tale favorite
          </h1>
          {products.length === 0 ? (
            <p align="center">Momentan nu ai nicio știre favorită.</p>
          ) : (
            <CardsList newsListItems={products} />
          )}
        </Container>
      </Layout>
    </div>
  );
}

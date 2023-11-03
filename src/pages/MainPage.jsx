import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import { getNewsSectionsEndpoint } from "../API/Endpoints";
import { getNewsList } from "../API/Data";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import CardsList from "../components/CardsList";
import styles from "./css/MainPage.module.css";

export default function MainPage() {
  const technologyNewsEndpoint = getNewsSectionsEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsSectionsEndpoint("football", 1, 6);
  const fashionNewsEndpoint = getNewsSectionsEndpoint("fashion", 1, 6);

  const technologyData = useFetch(technologyNewsEndpoint);
  const footballData = useFetch(footballNewsEndpoint);
  const fashionData = useFetch(fashionNewsEndpoint);

  const technologyListItems = getNewsList(technologyData);
  const footballListItems = getNewsList(footballData);
  const fashionListItems = getNewsList(fashionData);

  return (
    <div>
      <Layout>
        <div className="technology my-5">
          <Container>
            <h1 align="center" className="mb-5 pt-3">
              Tech
            </h1>
            <CardsList newsListItems={technologyListItems} />
            <p className="d-flex flex-row align-items-center justify-content-center">
              Vezi toate știrile legate de tehnologie în secțiunea
              <Link className={`${styles.link} ps-1`} to="/section/technology">
                Tech
              </Link>
              .
            </p>
          </Container>
        </div>
        <div className="football my-5">
          <Container>
            <h1 align="center" className="mb-5 pt-3">
              Fotbal
            </h1>
            <CardsList newsListItems={footballListItems} />
            <p className="d-flex flex-row align-items-center justify-content-center">
              Vezi toate știrile legate de fotbal în secțiunea
              <Link className={`${styles.link} ps-1`} to="/section/football">
                Fotbal
              </Link>
              .
            </p>
          </Container>
        </div>
        <div className="fashion my-5">
          <Container>
            <h1 align="center" className="mb-5 pt-3">
              Fashion
            </h1>
            <CardsList newsListItems={fashionListItems} />
            <p className="d-flex flex-row align-items-center justify-content-center">
              Vezi toate știrile legate de fashion în secțiunea
              <Link className={`${styles.link} ps-1`} to="/section/fashion">
                Fashion
              </Link>
              .
            </p>
          </Container>
        </div>
        <div className="favorites my-5">
          <Container>
            <h1 align="center" className="mb-5 pt-3">
              Favorite
            </h1>
            <p className="d-flex flex-row align-items-center justify-content-center">
              Vrei să îți salvezi știrile favorite pentru a le reciti mai
              încolo?
            </p>
            <p className="d-flex flex-row align-items-center justify-content-center">
              În cadrul fiecărei știri găsești un buton prin care poți adăuga
              știrea la favorite.
            </p>
            <p className="d-flex flex-row align-items-center justify-content-center">
              Vizitează secțiunea{" "}
              <Link className={`${styles.link} px-1`} to="/favorites">
                Favorite
              </Link>
              pentru a vedea știrile adăugate.
            </p>
          </Container>
        </div>
      </Layout>
    </div>
  );
}

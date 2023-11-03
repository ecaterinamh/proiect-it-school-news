import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { getNewsSectionsEndpoint } from "../API/Endpoints";
import { getNewsList } from "../API/Data";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import CardsList from "../components/CardsList";
import PaginationNews from "../components/PaginationNews";

export default function FootballPage() {
  let [queryParams] = useSearchParams();

  let currentPage = queryParams.get("page");

  if (!currentPage) {
    currentPage = 1;
  }

  const newsFootballSectionEndpoint = getNewsSectionsEndpoint(
    "football",
    currentPage
  );

  const news = useFetch(newsFootballSectionEndpoint);

  const sectionNewsList = getNewsList(news);

  return (
    <Layout>
      <Container className="my-5">
        <h1 align="center" className="mb-5 pt-3">
          Fotbal
        </h1>

        <CardsList newsListItems={sectionNewsList} />

        <PaginationNews active={currentPage} baseUrl={`/section/football`} />
      </Container>
    </Layout>
  );
}

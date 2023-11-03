import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getNewsDetailsEndpoint } from "../API/Endpoints";
import { getNewsDetails } from "../API/Data";
import { getDate } from "../Utils/date";
import { addToFavorites } from "../store/Favorite/actions";
import { FavoritesContext } from "../store/Favorite/context";
import Button from "react-bootstrap/Button";
import styles from "./css/NewsTemplate.module.css";
import Layout from "../components/Layout";
import Alert from "react-bootstrap/Alert";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function NewsDetailes() {
  const { favoritesDispatch, favoritesState } = useContext(FavoritesContext);

  let { newsId } = useParams();

  newsId = decodeURIComponent(newsId);

  const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);

  const newsDetails = useFetch(newsDetailsEndpoint);

  const adaptedNewsDetails = getNewsDetails(newsDetails);

  const [isAlertDisplayed, setIsAlertDisplayed] = useState(false);

  const [_, setLocalStorageState] = useLocalStorage(
    "favorites",
    favoritesState
  );

  useEffect(() => {
    setLocalStorageState(favoritesState);
  }, [favoritesState, setLocalStorageState]);

  const { title, description, image, date, author, content, thumbnail } =
    adaptedNewsDetails;

  const getFormattedDate = getDate(date);

  function handleAddToFavorites(product) {
    const actionResult = addToFavorites(product);

    favoritesDispatch(actionResult);

    setIsAlertDisplayed(true);
    setTimeout(() => {
      setIsAlertDisplayed(false);
    }, 2000);
  }

  return (
    <Layout>
      {isAlertDisplayed && (
        <Alert variant="success" id={styles.alert}>
          Succes! Poți vedea știrea accesând secțiunea Favorite.
        </Alert>
      )}
      <Container className={`${styles.newsDetails} my-5 `}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="pt-3 mb-5">{title}</h1>
            <p className="fw-bold">{description}</p>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: image }}
            ></div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="fw-bold">
                <p>{author}</p>
                <p className="mb-0">{getFormattedDate}</p>
              </div>
              <Button
                onClick={() => {
                  handleAddToFavorites({
                    id: newsId,
                    thumbnail,
                    title,
                    description,
                    hasCloseButton: true,
                  });
                }}
              >
                {" "}
                Adaugă la Favorite
              </Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetailes;

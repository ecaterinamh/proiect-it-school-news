import { Link } from "react-router-dom";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./css/CardTemplate.module.css";
import { removeFromFavorites } from "../store/Favorite/actions";
import { FavoritesContext } from "../store/Favorite/context";

export default function CardTemplate(props) {
  const { favoritesDispatch } = useContext(FavoritesContext);

  const { id, title, image, description, hasCloseButton } = props;

  function handleRemoveFromFavorites(id) {
    const actionResult = removeFromFavorites(id);
    favoritesDispatch(actionResult);
  }

  return (
    <Card
      className={`${styles.newsCard} h-100 d-flex flex-column justify-content-between align-items-center`}
    >
      <Link to={`/news/${encodeURIComponent(id)}`}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-dark">{title}</Card.Title>
          <Card.Text className="text-dark">{description}</Card.Text>
        </Card.Body>
      </Link>
      {hasCloseButton && (
        <Button
          variant="light"
          className={styles.newsCardButton}
          onClick={() => {
            handleRemoveFromFavorites(id);
          }}
        >
          <span className="material-icons text-dark">close</span>
        </Button>
      )}
    </Card>
  );
}

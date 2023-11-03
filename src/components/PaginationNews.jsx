import React from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import styles from "./css/PaginationNews.module.css";

function PaginationNews(props) {
  let { active, baseUrl } = props;

  let navigate = useNavigate();

  if (!active) {
    active = 1;
  }

  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(active)}
        id={active ? styles.paginationActive : null}
        onClick={() => {
          navigate(`${baseUrl}?page=${number}`);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination className={styles.pagination}>{items}</Pagination>
    </div>
  );
}

export default PaginationNews;

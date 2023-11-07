import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardTemplate from "./CardTemplate";

export default function CardsList(props) {
  const { newsListItems } = props;

  return (
    <Container>
      <Row>
        {newsListItems.map((newsItem) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-4" key={newsItem.id}>
              <CardTemplate
                id={newsItem.id}
                image={newsItem.thumbnail}
                title={newsItem.title}
                description={newsItem.description}
                hasCloseButton={newsItem.hasCloseButton}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

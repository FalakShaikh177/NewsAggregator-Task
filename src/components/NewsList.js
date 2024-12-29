import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsList = ({ articles }) => {
  return (
    <div className="row">
      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="col-md-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Published at: {new Date(article.publishedAt).toLocaleString()}
                  </small>
                </Card.Text>
                <Button variant="primary" href={article.url} target="_blank">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>No articles available.</p> // Display a message if no articles are found
      )}
    </div>
  );
};

export default NewsList;

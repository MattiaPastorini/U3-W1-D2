import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook ";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-4">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-3"
        />
      </Form.Group>

      <Row>
        {filteredBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;

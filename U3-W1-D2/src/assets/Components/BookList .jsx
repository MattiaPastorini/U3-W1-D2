import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook ";
import { useState } from "react";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Cerca un libro..."
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row className="g-4">
        {filteredBooks.map((book) => (
          <Col xs={6} sm={4} md={3} lg={2} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;

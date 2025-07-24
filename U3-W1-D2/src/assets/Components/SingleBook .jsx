import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { title, img, asin } = this.props.book;
    return (
      <>
        <Card
          onClick={this.toggleSelected}
          className={`h-100 shadow-sm ${
            this.state.selected ? "border border-danger" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "0.9rem",
                textAlign: "center",
                whiteSpace: "normal",
              }}
            >
              {title}
            </Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={asin} />}
      </>
    );
  }
}

export default SingleBook;

import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { title, img } = this.props.book;
    const cardStyle = this.state.selected
      ? { border: "2px solid red" }
      : { border: "1px solid lightgray" };

    return (
      <Card
        onClick={this.toggleSelected}
        style={{ ...cardStyle, cursor: "pointer" }}
      >
        <Card.Img variant="top" src={img} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

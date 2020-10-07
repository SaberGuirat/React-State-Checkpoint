import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import Profile from "./Assets/profilPhoto.jpg";

class App extends Component {
  state = {
    imgSrc: Profile,
    fullName: "Saber Guirat",
    profession: "Student",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis.",
    show: false,
    date: new Date(),
  };
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleClick = () =>
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  render() {
    if (this.state.show) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              width: "18rem",
              background: "rgba(0,0,0,0.5)",
              color: "white",
            }}
          >
            <Card.Img
              variant="top"
              src={this.state.imgSrc}
              style={{ height: 320 }}
            />
            <Card.Body>
              <Card.Title>{this.state.fullName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.state.profession}
              </Card.Subtitle>
              <Card.Text>{this.state.bio}</Card.Text>
              <Button variant="danger" onClick={this.handleClick}>
                Hide
              </Button>
            </Card.Body>
            <Card.Header style={{ background: "rgba(0,0,0,0.6)" }}>
              It is {this.state.date.toLocaleTimeString()}.
            </Card.Header>
          </Card>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="primary" size="lg" onClick={this.handleClick}>
            Show
          </Button>
        </div>
      );
    }
  }
}

export default App;

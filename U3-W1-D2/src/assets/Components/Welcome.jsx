import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="my-4">
      <Alert variant="info">
        <Alert.Heading>Benvenuto in EpiBooks!</Alert.Heading>
      </Alert>
    </Container>
  );
};

export default Welcome;

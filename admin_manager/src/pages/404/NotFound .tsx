
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} className="text-center">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/dang-nhap">
            Go to Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

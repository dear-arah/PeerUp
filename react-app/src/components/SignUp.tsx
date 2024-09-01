import { useState } from 'react';
{/*import { useHistory } from 'react-router-dom';*/}
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 {/* const history = useHistory();*/}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically check credentials against the backend
    console.log('Email:', email, 'Password:', password);

    // On successful login, navigate to profile setup or homepage
    {/*history.push('/profile-setup'); // This would usually be to the homepage*/}
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

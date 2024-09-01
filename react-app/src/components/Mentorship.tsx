
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import TopNavbar from './TopNavBar';
import Sidebar from '../components/Sidebar';

function Mentorship(){
    return(
        <Container fluid>
        <Row> 
            <TopNavbar />
        </Row>
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>

          <Col xs={10} className="p-0"> 
            <Card> 
                
            </Card>
          </Col>
        
        </Row>
        </Container>
    );
};

export default Mentorship;
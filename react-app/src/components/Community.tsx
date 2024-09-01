import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './TopNavBar';
import Sidebar from '../components/Sidebar';

function Community(){
    return(
        <Container fluid>
        <Row> 
            <TopNavbar />
        </Row>
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Row className="mt-3">
              <Col xs={4}>
                
              </Col>
              <Col xs={5}>
                

              </Col>
              <Col xs={3}>

                
              </Col>
            </Row>
            
            
          </Col>
        </Row>
      </Container>
    );
}

export default Community;
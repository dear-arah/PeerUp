
import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './TopNavBar';
import Sidebar from '../components/Sidebar';
import Calendar from './Calendar';
import { TrackInfo } from './TrackInfo';
import { MentorCard } from './MentorInfo';
import ProjectsTable from './ProjectsTable';
import Activities from './Activities';


function Homepage(){
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
                <Calendar />
              </Col>
              <Col xs={5}>
                <TrackInfo />

              </Col>
              <Col xs={3}>

                <MentorCard />
              </Col>
            </Row>
            <ProjectsTable />
            <Activities />
          </Col>
        </Row>
      </Container>
    );
}

export default Homepage;
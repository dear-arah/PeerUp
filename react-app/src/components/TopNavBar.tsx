import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Bell, Envelope, PersonCircle } from 'react-bootstrap-icons'; // Import Bootstrap icons


const TopNavbar: React.FC = () => {

  return (
    <Navbar bg="light" expand="lg" className="px-4 top-navbar">
      {/* Logo Section */}
      <Navbar.Brand href="#home" className="logo">
        <img
          src="/resources/peeruplogo.svg"
          height="30"
          alt="Logo"
        />

      </Navbar.Brand>

      {/* Right Icons Section */}
      <Nav className="ms-auto d-flex align-items-center">
        {/* Notification Icon */}
        <Nav.Link href="#notifications" className="icon-link">
          <Bell size={24} />
        </Nav.Link>

        {/* Messages Icon */}
        <Nav.Link href="#messages" className="icon-link">
          <Envelope size={24} />
        </Nav.Link>

        {/* User Profile Icon */}
        <Dropdown align="end">
          <Dropdown.Toggle as={Nav.Link} className="icon-link">
            <PersonCircle size={30} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#settings">Mentor Profile</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#logout">Log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
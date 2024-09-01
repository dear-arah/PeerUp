import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const homepage = () => {
        navigate('/homepage');
      };
    const community = () => {
      navigate('/community');
    };
    const mentorship = () => {
        navigate('/mentorship');
      };
      const resources = () => {
        navigate('/resources');
      };
      const settings = () => {
        navigate('/settings');
      };

  return (
    <div className="d-flex flex-column w-75 vh-100 p-3 sidebar">

      <Nav className="flex-column sidebar-content">
        <Nav.Link href="#" className="text-white pb-4" onClick={homepage}>
            <img src="./resources/Home_fill.svg" className="icon" />
            Home
        </Nav.Link>
        <Nav.Link href="#" className="text-white pb-4" onClick={mentorship}>
        <img src="./resources/group_add_fill.svg" className="icon" />
            Mentorship
        </Nav.Link>
        <Nav.Link href="#" className="text-white pb-4" onClick={community}>
        <img src="./resources/globe.svg" className="icon" />
            Community</Nav.Link>
        <Nav.Link href="#" className="text-white pb-4" onClick={resources}>
        <img src="./resources/Folder_open_fill.svg" className="icon" id="resources" />
            Resources</Nav.Link>
      </Nav>
      <Nav className="flex-column mt-auto sidebar-content">
        <Nav.Link href="#" className="text-white">
        <img src="./resources/Setting_fill.svg" className="icon" onClick={settings}/>
            Settings</Nav.Link>
        <Nav.Link href="#" className="text-white">
        <img src="./resources/Size_down.svg" className="icon" />
            Log out
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
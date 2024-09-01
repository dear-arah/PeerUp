import { Table } from 'react-bootstrap';

const ProjectsTable: React.FC = () => {
  return (
    <div className="mt-3">
      <h5>Projects</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Track</th>
            <th>Mentor</th>
            <th>Programming Language</th>
            <th>Date Uploaded</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6} className="text-center">No projects to display.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectsTable;
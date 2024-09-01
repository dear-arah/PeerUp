
import { Card } from 'react-bootstrap';

const TrackInfo: React.FC = () => {
  return (
    <Card className="p-3">
      <h5>Track: Web Development</h5>
      <Card className="mt-3 p-2">
        <div>
          <h6>E-Commerce Website using HTML, CSS, Javascript</h6>
          <small>September 8, 2024 | 7:00 PM (UTC+08)</small>
          <div>
          <span className="badge bg-success"> Free </span>
          <span className="badge bg-success"> Project</span>
          <span className="badge bg-success"> 1-on-1</span>
          </div>
          <div className="mt-2">
            <a href="#">Meeting link</a>
            <br />
            <a href="#">Open in Calendar</a>
          </div>
          <p className="text-muted">by Mentor Mentor's Name</p>
        </div>
      </Card>
    </Card>
  );
};


export {TrackInfo};
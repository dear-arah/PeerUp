import React from 'react';
import { Card } from 'react-bootstrap';

const MentorCard: React.FC = () => {
  return (
    <Card className="text-center p-3">
      <h5>Mentor</h5>
      <img
        src="mentor-image-url"
        alt="Mentor"
        className="rounded-circle img-fluid"
      />
      <p>Mentor Name</p>
    </Card>
  );
};

export {MentorCard};
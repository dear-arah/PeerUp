import { Card } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const Calendar: React.FC = () => {
  return (
    <Card className="p-3">

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={[
          { title: 'Meeting', start: '2024-09-03T10:30:00', end: '2024-09-03T12:30:00' },
          { title: 'Lunch', start: '2024-09-07T12:00:00' },
        ]}
      />
    </Card>
  );
};

export default Calendar;
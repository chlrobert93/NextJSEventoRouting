import { getAllEvents } from "../../dummy-data";
import EvenList from "../../components/events/EventList";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EvenList  items={events} />
    </div>
  );
}

export default AllEventsPage;

import { getAllEvents } from "../../dummy-data";
import EvenList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { Fragment } from "react";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EvenList  items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

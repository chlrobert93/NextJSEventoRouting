import { Fragment } from "react";
import router, { useRouter } from 'next/router';

import { getAllEvents } from "../../dummy-data";
import EvenList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";



function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function finEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
    
  }

  return (
    <Fragment>
      <EventsSearch  onSearch={finEventsHandler} />
      <EvenList  items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

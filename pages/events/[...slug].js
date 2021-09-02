import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlet from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading....</p>;
  }

  //Convertir a número
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numerYear = +filteredYear;
  const numMonth = +filteredMonth;

  //console.log(isNaN(numerYear));
  if (
    isNaN(numerYear) ||
    isNaN(numMonth) ||
    numerYear > 2030 ||
    numerYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlet>
          <p>Invalid filter. Plase adjust your values!</p>
        </ErrorAlet>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numerYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlet>
          <p>No events found for the chose filter!</p>
        </ErrorAlet>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numerYear, numMonth - 1);

  //console.log( filterEvents)
  //console.log( filterEvents.month)
  return (
    <div>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;

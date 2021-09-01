import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';


function EventDetailPage() {
    const router = useRouter();

    //Nos da acceso al valor concreto que se inserto
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if(!event) {
        return <p>No event found!</p>
    }

    return(
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics 
              date={event.date}
              addres={event.location}
              image={event.image}
              imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}


export default EventDetailPage;
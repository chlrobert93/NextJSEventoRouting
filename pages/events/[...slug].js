import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
    const router = useRouter();
 const filterData = router.query.slug;

 
 if(!filterData) {
     return <p className='center'>Loading....</p>
 }

 //Convertir a número
 const filteredYear = filterData[0];
 const filteredMonth = filterData[1];

 const numerYear = +filteredYear;
 const numMonth = +filteredMonth;

console.log(isNaN(numerYear) )
 if(
     isNaN(numerYear) ||
     isNaN(numMonth) ||
     numerYear > 2030 ||
     numerYear < 2021 ||
     numMonth < 1 ||
     numMonth > 12
 ){

    return <p>Invalid filter.Plase adjust your values!</p>
 }

 const filterEvents = getFilteredEvents({
     year: numerYear,
     month: numMonth,
 });

 if(!filterEvents || filteredMonth.length === 0){
     return <p>No events found for the chose filter!</p>
 }

    return(
        <div>
            <h1>FilterEvents</h1>
        </div>
    );
}


export default FilteredEventsPage;
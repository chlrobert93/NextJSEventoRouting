import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddresIcon from "../icons/address-icon";
import ArrowRighIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });



  const formattadAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddresIcon />
          <address>{formattadAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRighIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

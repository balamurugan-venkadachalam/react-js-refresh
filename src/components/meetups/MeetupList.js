import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
	console.log('data ---> '+ typeof props.meetups);
	return <ul className={classes.list}>
		{
			props.meetups && props.meetups? props.meetups.map(meetup =>
				<MeetupItem key={meetup.id}
										id={meetup.id}
										image={meetup.image}
										title={meetup.title}
										address={meetup.address}
				/>): null
		}
	</ul>
}

export default MeetupList

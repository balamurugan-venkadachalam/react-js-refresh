import MeetupList from "../components/meetups/MeetupList";
import {useCallback, useState, useEffect} from "react";

function AllMeetupPage() {

	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetUps, setLoadedMeetUps] = useState([]);

	useEffect(()=>{
		setIsLoading(true);
		fetch(
			'https://react-getting-started-bb28d-default-rtdb.firebaseio.com/meetups.json'
		).then(response =>{
			return response.json();
		}).then(data => {
			console.log(data);
			let meetups = [];
			for (const dataKey in data) {
				const meetup = {
					id: dataKey,
					...data[dataKey]
				};
				meetups.push(meetup);
			}
			setIsLoading(false);
			setLoadedMeetUps(meetups);
		});
	}, []);

	if(isLoading){
		return (
			<section>
				<p>Loading...</p>
			</section>
		)
	}

	return <section>
		<h1>All Meetup</h1>
		<MeetupList meetups={loadedMeetUps}/>
	</section>
}
export default AllMeetupPage;

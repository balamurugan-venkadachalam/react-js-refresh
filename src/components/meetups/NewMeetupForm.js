import React, {useRef, useState} from 'react';
import classes from './NewMeetupForm.module.css'
import Card from "../ui/Card";

function NewMeetupForm (props) {

	let meetupData = {
		title: "",
		image: "",
		address: "",
		description: ""
	};
	const [formData, setFormData] = useState(meetupData);
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(e) {
		e.preventDefault();
		console.log(formData);
		props.onAddMeetup(formData);
	}


	function clearFormData() {
		setFormData({...meetupData});
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text'
								 required
								 id='title'
								 value={formData.title}
								 onChange={event => setFormData({...formData, title: event.target.value})}
								 ref={titleInputRef}/>
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url'
								 required
								 id="image"
								 value={formData.image}
								 onChange={event => setFormData({...formData, image: event.target.value})}
								 ref={imageInputRef}/>
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='text'
								 required
								 id="address"
								 value={formData.address}
								 onChange={event => setFormData({...formData, address: event.target.value})}
								 ref={addressInputRef}/>
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea id="description"
										rows="5"
										required
										value={formData.description}
										onChange={event => setFormData({...formData, description: event.target.value})}
										ref={descriptionInputRef}/>
				</div>
				<div className={classes.actions}>
					<button onClick={clearFormData}>Clear</button>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	)
};

export default NewMeetupForm;

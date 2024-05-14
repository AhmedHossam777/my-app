import React, { useState } from 'react';

// const Form = () => {
// 	let [name, setName] = useState('');
// 	let [password, setPassword] = useState('');
// 	let [gender, setGender] = useState('');
//
// 	const nameHandler = (val) => {
// 		setName(val);
// 	};
//
// 	const passwordHandler = (val) => {
// 		setPassword(val);
// 	};
//
// 	const genderHanlder = (val) => {
// 		setGender(val);
// 	};
//
// 	return (
// 		<form onSubmit={
// 			(event) => {
// 				event.preventDefault();
// 				console.log('Form submitted');
// 				console.log({name, password, gender});
// 			}
// 		}>
// 			{/* the line above is To disable the reload of the page when making a submit of the form*/}
//
// 			<label>Name</label>
// 			<input type="text" placeholder="your name" onChange={(event) => {
// 				nameHandler(event.target.value);
// 			}}/>
// 			<br/>
// 			<label>password</label>
// 			<input type="password" placeholder="yout password" onChange={(event) => {
// 				passwordHandler(event.target.value);
// 			}}/>
// 			<br/>
//
// 			<select onChange={(event) => {
// 				genderHanlder(event.target.value);
// 			}}>
// 				<label>Gender</label>
// 				<option value="male">Male</option>
// 				<option value="female">Female</option>
// 			</select>
//
// 			<button type="submit">Submit</button>
// 		</form>
// 	);
//
// };

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: '',
			gender: 'male',
		};
	}
	
	nameHandler = (val) => {
		this.setState({name: val});
	};
	passwordHandler = (val) => {
		this.setState({password: val});
	};
	genderHandler = (val) => {
		this.setState({gander: val});
	};
	
	render() {
		return (
			<form onSubmit={(event) => {
				event.preventDefault();
				console.log(this.state);
			}
			}>
				<label>Name</label>
				<input type="text" placeholder="Your name" onChange={(event) => this.nameHandler(event.target.value)}/>
				<br/>
				<label>Password</label>
				<input type="password" placeholder="Your password"
				       onChange={(event) => this.passwordHandler(event.target.value)}/>
				<br/>
				
				<label>Gender</label>
				<select onChange={(event) => this.genderHandler(event.target.value)}>
					<option>Male</option>
					<option>Female</option>
				</select>
				<br/>
				
				<button type="submit">Submit</button>
			</form>
		);
	}
	
}

export default Form;
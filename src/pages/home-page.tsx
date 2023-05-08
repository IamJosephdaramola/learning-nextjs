import { useState } from 'react';
import { Header } from '../components';

const HomePage = () => {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	const [likes, setLikes] = useState(0);

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title='Develop. Preview. Ship. 🚀' />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button type='button' onClick={handleClick}>
				Like ({likes})
			</button>
		</div>
	);
};

export default HomePage;

import React from 'react';
import Card from './Card';
//props -> robots as input

const CardList = ({ robots }) =>{ //pure function, deterministic
	return (
		<div>
			{
				robots.map((user, i) =>{
					return (
						<Card
							 key={robots[i].id}
							 id={robots[i].id}
							 name={robots[i].name}
							 email={robots[i].email}
				 		/>
					);
				})
			}
		</div>
	);
}

export default CardList;
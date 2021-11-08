import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

function About() {
	return (
		<>
			<div className="row align-items-center">
				<div className="col">
					<Card className="border-dark rounded-0">
						<CardImg className="rounded-0" src="/assets/teamix.jpg"></CardImg>
						<CardTitle>What is Boba?</CardTitle>
						<CardText className="text-left"></CardText>
					</Card>
				</div>
			</div>
		</>
	);
}

export default About;

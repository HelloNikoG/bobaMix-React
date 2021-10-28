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
						<CardText className="text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros
							in cursus turpis massa tincidunt dui ut. Scelerisque eu ultrices
							vitae auctor eu. Arcu cursus vitae congue mauris rhoncus aenean
							vel elit. Eget duis at tellus at urna condimentum mattis
							pellentesque id. A arcu cursus vitae congue mauris rhoncus aenean
							vel elit. Gravida dictum fusce ut placerat orci nulla pellentesque
							dignissim. Sagittis nisl rhoncus mattis rhoncus urna neque. Libero
							enim sed faucibus turpis in. Cras tincidunt lobortis feugiat
							vivamus at augue eget. Mauris augue neque gravida in fermentum et.
							Blandit libero volutpat sed cras ornare arcu. Tempor commodo
							ullamcorper a lacus vestibulum sed arcu. Dui vivamus arcu felis
							bibendum ut tristique et.
						</CardText>
					</Card>
				</div>
			</div>
		</>
	);
}

export default About;

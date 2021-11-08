import React from 'react';
import { Col, Row, Card } from 'reactstrap';

function AboutCard() {
	return (
		<>
			<Row className="row align-items-center">
				<Col>
					<Card className="border-dark rounded-0">
						<CardImg className="rounded-0" src="/assets/teamix.jpg"></CardImg>
						<CardTitle>What is Boba?</CardTitle>
						<CardText className="text-left"></CardText>
					</Card>
				</Col>
			</Row>
		</>
	);
}

export default AboutCard;

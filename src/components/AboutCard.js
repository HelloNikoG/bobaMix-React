import React from 'react';
import {
	Container,
	Col,
	Row,
	Card,
	CardImg,
	CardTitle,
	CardText,
} from 'reactstrap';

function AboutCard() {
	return (
		<Container fluid>
			<Row className="mt-3 row align-items-center">
				<Col>
					<Card className="border-dark rounded-0">
						<CardImg
							className="rounded-0 img-fluid"
							src="/assets/teamix.jpg"
						></CardImg>
						<CardTitle>What is Boba?</CardTitle>
						<CardText className="text-left"></CardText>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default AboutCard;

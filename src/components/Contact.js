import React from 'react';
import { Row, Col, Card, CardImg, CardText, Container } from 'reactstrap';

function Contact() {
	return (
		<Container fluid>
			<Row>
				<Col md="6">
					<Card className="border-dark rounded-0">
						<CardImg className="mt-3 img-fluid" src="/assets/teapeople.jpg" />
					</Card>
				</Col>

				<Col md="6">
					<Card>
						<CardText className="mt-3">
							<h3>Get in touch </h3>
							<p>
								Boba is made from tapioca starch, also known as cassava starch,
								which is why they're often also labeled as "tapioca pearls."
								They're small spheres that are often simmered in a brown sugar
								syrup to give them a sweet taste and dark black color. Boba is
								practically tasteless, making it easy to pair with a variety of
								drinks. There are also popping boba varieties, which are often
								colorful and filled with fruit-flavored syrups like strawberry
								or lychee.
							</p>
						</CardText>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Contact;

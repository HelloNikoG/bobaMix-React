import React from 'react';
import OrderForm from './OrderForm';
import OrderCard from './OrderCard';

import ImageCard from './ImageCard';
import AboutCard from './AboutCard';
import { Container, Row, Col, Card } from 'reactstrap';

function Main() {
	return (
		<Container className="mt-5">
			<Row>
				<Col className=" border border-dark">
					{/* <img className="img-fluid" src="assets/teamix.jpg" height="100 px" /> */}
					<ImageCard />
				</Col>
				<Col>
					<OrderCard />
				</Col>
			</Row>
		</Container>
	);
}

export default Main;

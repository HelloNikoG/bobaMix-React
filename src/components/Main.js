import React from 'react';
import OrderForm from './OrderForm';
import OrderCard from './OrderCard';

import ImageCard from './ImageCard';

import { Container, Row, Col } from 'reactstrap';

function Main() {
	return (
		<Container className="mt-5 container-fluid">
			<Row>
				<Col>
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

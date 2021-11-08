import React from 'react';

import OrderCard from './OrderCard';

import ImageCard from './ImageCard';

import { Container, Row, Col } from 'reactstrap';
import OrderCard2 from './OrderCard2';

function Main() {
	return (
		<Container className="mt-3">
			<Row>
				<Col md="12" xs="3">
					order
				</Col>
			</Row>
			<Row>
				<Col>
					<ImageCard />
				</Col>
			</Row>
			<Row>
				<Col md="8">
					<OrderCard2 />
				</Col>
			</Row>
			<Row>
				<OrderCard />
			</Row>
			<div className="col-md-2">hello</div>
		</Container>
	);
}

export default Main;

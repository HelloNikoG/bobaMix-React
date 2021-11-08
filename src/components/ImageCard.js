import React from 'react';
import {
	Alert,
	Col,
	Row,
	Card,
	CardTitle,
	CardSubtitle,
	CardImg,
	CardImgOverlay,
} from 'reactstrap';
import OrderCard from './OrderCard';

function ImageCard() {
	const textColor = { color: 'white' };
	const align = {
		textAlign: 'left',
	};

	return (
		<Card>
			<CardImg height="auto" width="200 px" src="/assets/teamix.jpg"></CardImg>
			<CardImgOverlay>
				<CardTitle style={textColor}>
					<h2 style={align}>Start Your Order 🧋​</h2>
				</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

export default ImageCard;

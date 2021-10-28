import React from 'react';
import { Card, CardImg } from 'reactstrap';

function Image() {
	return (
		<div className="col">
			<Card className="border border-dark border-top-0 rounded-0 m-0 pl-0">
				<CardImg
					className="rounded-0"
					src="/assets/streetboba.jpg"
					width="500"
				/>
			</Card>
		</div>
	);
}

export default Image;

import React, { useState } from 'react';
import { Col, Row, Button, ButtonGroup } from 'reactstrap';
const toppings = [
	{ name: 'BOBA', price: 0.5 },
	{ name: 'TEA JELLY', price: 0.5 },
	{ name: 'PUDDING', price: 0.5 },
	{ name: 'RED BEAN', price: 0.5 },
	{ name: 'FRUIT', price: 0.5 },
];
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function Toppings() {
	const [checkedState, setCheckedState] = useState(
		new Array(toppings.length).fill(false)
	);

	const [total, setTotal] = useState(0);

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);

		const totalPrice = updatedCheckedState.reduce(
			(sum, currentState, index) => {
				if (currentState === true) {
					return sum + toppings[index].price;
				}
				return sum;
			},
			0
		);

		setTotal(totalPrice);
	};
	return (
		<>
			<Row>
				<Col>
					<h4>Select your Toppings:</h4>
				</Col>
			</Row>
			<Row>
				<ul className="toppings-list">
					{toppings.map(({ name, price }, index) => {
						return (
							<li key={index}>
								<div className="toppings-list-item">
									<div className="left-section">
										<Col>
											<input
												type="checkbox"
												id={`custom-checkbox-${index}`}
												name={name}
												value={name}
												checked={checkedState[index]}
												onChange={() => handleOnChange(index)}
											/>
											<label htmlFor={`custom-checkbox-${index}`}>{name}</label>
										</Col>
									</div>
									<div className="right-section">
										{getFormattedPrice(price)}
									</div>
								</div>
							</li>
						);
					})}
					<li>
						<div className="toppings-list-item">
							<div className="left-section">Total:</div>
							<div className="right-section">{getFormattedPrice(total)}</div>
						</div>
					</li>
				</ul>
			</Row>
		</>
	);
}

export default Toppings;

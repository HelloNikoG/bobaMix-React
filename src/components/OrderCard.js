import React, { Component } from 'react';
import {
	Alert,
	Button,
	ButtonGroup,
	ButtonToggle,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	Row,
	Container,
	FormFeedback,
	Card,
	FormText,
} from 'reactstrap';

class OrderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ' choose a size',
			sugarLevel: ' choose a sugar level',
			temp: ' hot or iced?',
			drinkBase: '',
			milk: '',
			toppings: '',
			name: '',
			phoneNum: '',
			alert: false,
			cost: '',
		};
	}

	handleName = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handlePhoneNum = (event) => {
		this.setState({
			phoneNum: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(
			`Thanks ${this.state.name}! \n we will text you when your order is
			ready!\n ${this.state.drinkBase}`
		);
		event.preventDefault();
	};

	handleTemp = (e) => {
		this.setState({
			temp: e.target.value,
		});
	};
	handleSize = (e) => {
		this.setState({
			size: e.target.value,
			color: !this.state.color,
		});
		e.preventDefault();
	};

	handleSugarLevel = (event) => {
		this.setState({
			sugarLevel: event.target.value,
		});
	};

	colorChange = (e) => {
		if (e.target.value) {
		}
	};

	render() {
		let buttonColor = this.state.color ? 'dark' : 'primary';
		return (
			<Col>
				<Alert color="info" isOpen={true}>
					Building your order:
					<Row>
						<Col>
							<p>size:{this.state.size}</p>
						</Col>
						<Col>
							<p>sugar:{this.state.sugarLevel}</p>
						</Col>
						<Col>Toppings:</Col>
					</Row>
				</Alert>

				<Card className="border-dark">
					<Form onSubmit={this.handleSubmit}>
						<Col>
							<h3>Your Order</h3>
							<h4 style={{ textAlign: 'right' }}>${this.state.cost}</h4>

							<FormText color="muted">
								Input your name and number and we will text you when your order
								is ready!
							</FormText>
							<FormGroup>
								<Label htmlFor="customer name">
									<Input
										type="text"
										id="customer name"
										name="name"
										value={this.state.name}
										placeholder="name"
										onChange={this.handleName}
									/>
								</Label>
								<Label htmlFor="phone number">
									<Input
										type="text"
										id="phone number"
										name="phone number"
										value={this.state.phoneNum}
										placeholder="phone number"
										onChange={this.handlePhoneNum}
									/>
								</Label>
							</FormGroup>
						</Col>

						<Row>
							<Col>
								<h4>drink size</h4>
								<ButtonGroup className="btn-block ml-2">
									<Button
										onClick={this.handleSize}
										value="small"
										active={this.state.size === 'small'}
										color={this.state.size === 'small' ? 'info' : 'dark'}
									>
										SMALL
									</Button>
									<Button
										onClick={this.handleSize}
										value="medium"
										active={this.state.size === 'medium'}
										color={this.state.size === 'medium' ? 'info' : 'dark'}
									>
										MEDIUM
									</Button>
									<Button
										onClick={this.handleSize}
										value="large"
										active={this.state.size === 'large'}
										color={this.state.size === 'large' ? 'info' : 'dark'}
									>
										LARGE
									</Button>
								</ButtonGroup>
							</Col>
							<Col>
								<h4>temperature</h4>
								<ButtonGroup className="btn-block mr-5">
									<Button
										onClick={this.handleTemp}
										value="hot"
										active={this.state.size === 'hot' ? true : false}
										color={this.state.temp === 'hot' ? 'danger' : 'dark'}
									>
										HOT
									</Button>
									<Button
										onClick={this.handleTemp}
										value="iced"
										active={this.state.size === 'iced' ? true : false}
										color={this.state.temp === 'iced' ? 'primary' : 'dark'}
									>
										ICED
									</Button>
								</ButtonGroup>
							</Col>
							<Col>
								<h4>sugar level</h4>
								<ButtonGroup className="btn-block ml-2">
									<Button
										onClick={this.handleSugarLevel}
										value="25%"
										active={this.state.sugarLevel === '25%' ? true : false}
										color={this.state.sugarLevel === '25%' ? 'info' : 'dark'}
									>
										25%
									</Button>
									<Button
										onClick={this.handleSugarLevel}
										value="50%"
										active={this.state.sugarLevel === '50%'}
										color={this.state.sugarLevel === '50%' ? 'info' : 'dark'}
									>
										50%
									</Button>
									<Button
										onClick={this.handleSugarLevel}
										value="75%"
										active={this.state.sugarLevel === '75%'}
										color={this.state.sugarLevel === '75%' ? 'info' : 'dark'}
									>
										100%
									</Button>
								</ButtonGroup>
							</Col>
						</Row>

						<Col>
							<h4>toppings</h4>
							<FormGroup>
								<input type="checkbox" value="boba|0.50" />
								boba
								<input type="checkbox" />
								pudding
								<input type="checkbox" />
								<span>herbal jelly</span>
								<input type="checkbox" />
								red bean
								<input type="checkbox" />
								fresh fruit{' '}
							</FormGroup>
						</Col>
						<Button onClick={this.handleSubmit}></Button>
					</Form>
				</Card>
			</Col>
		);
	}
}

export default OrderCard;

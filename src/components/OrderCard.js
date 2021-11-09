import React, { Component } from 'react';
import {
	Alert,
	Button,
	ButtonGroup,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	Row,
	Card,
	FormText,
} from 'reactstrap';
import Toppings from './Toppings';

// const toppings = [
// 	{ name: 'BOBA', price: 0.5 },
// 	{ name: 'TEA JELLY', price: 0.5 },
// 	{ name: 'PUDDING', price: 0.5 },
// 	{ name: 'RED BEAN', price: 0.5 },
// 	{ name: 'FRUIT', price: 0.5 },
// ];

class OrderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ' ❓',
			sugarLevel: ' ❓',
			temp: ' ❓',
			teaBase: '',
			name: '',
			phoneNum: '',
			alert: false,
			toppings: {
				boba: false,
				teaJelly: false,
				pudding: false,
				redBean: false,
				freshFruit: false,
				lycheeJelly: false,
			},
		};
	}

	handleName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};

	handlePhoneNum = (e) => {
		this.setState({
			phoneNum: e.target.value,
		});
	};

	handleSubmit = (e) => {
		alert(
			`Thanks ${this.state.name}! \n we will text you when your order is
			ready!`
		);
		e.preventDefault();
	};

	handleTemp = (e) => {
		this.setState({
			temp: e.target.value,
		});
	};
	handleSize = (e) => {
		this.setState({
			size: e.target.value,
		});
	};

	handleSugarLevel = (e) => {
		this.setState({
			sugarLevel: e.target.value,
		});
	};

	handleTeabase = (e) => {
		this.setState({
			teaBase: e.target.value,
		});
	};

	handleToppings = (e) => {
		let { name, active } = e.target;
		this.setState((e) => {
			let selected = e.toppings;
			return (selected[name] = active);
		});
	};

	render() {
		const displayToppings = Object.keys(this.state.toppings);
		return (
			<Col className="mt-3">
				<Alert color="info" isOpen={true} className="sticky-top ">
					<Row>
						<Col md="6">
							<h4>Building your order:</h4>
						</Col>
						<Col md="6">
							<h4 style={{ textAlign: 'right' }}>$</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>
								temp: <strong>{this.state.temp}</strong>
							</p>
						</Col>
						<Col>
							<p>
								size: <strong>{this.state.size}</strong>
							</p>
						</Col>
						<Col>
							<p>
								sugar: <strong>{this.state.sugarLevel}</strong>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>Toppings:{displayToppings}</Col>
					</Row>
				</Alert>

				<Card className="border-dark">
					<Form onSubmit={this.handleSubmit}>
						<h4 style={{ textAlign: 'right' }}>${this.state.cost}</h4>

						<FormText color="muted">
							Input your name and number and we will text you when your order is
							ready!
						</FormText>
						<FormGroup>
							<Row>
								<Col>
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
								</Col>
								<Col>
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
								</Col>
							</Row>
						</FormGroup>

						<Row>
							<Col className="mx-auto">
								<h4>temperature</h4>
								<ButtonGroup className="btn-block ">
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
										75%
									</Button>
								</ButtonGroup>
							</Col>
						</Row>
						<Row>
							<Col className="col-md-6 mt-2">
								<h4>drink size 🧋</h4>
								<ButtonGroup>
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
							<Col className="col-md-6 mt-2">
								<h4>tea base🧋</h4>
								<ButtonGroup>
									<Button
										onClick={this.handleTeabase}
										value="black"
										active={this.state.teaBase === 'black'}
										color={this.state.teaBase === 'black' ? 'info' : 'dark'}
									>
										BLACK
									</Button>
									<Button
										onClick={this.handleTeabase}
										value="green"
										active={this.state.teaBase === 'green'}
										color={this.state.teaBase === 'green' ? 'info' : 'dark'}
									>
										GREEN
									</Button>
									<Button
										onClick={this.handleTeabase}
										value="oolong"
										active={this.state.teaBase === 'oolong'}
										color={this.state.teaBase === 'oolong' ? 'info' : 'dark'}
									>
										OOLONG
									</Button>
								</ButtonGroup>
							</Col>
						</Row>
						<Row>
							<Col className="mt-3">
								<h4>toppings</h4>
								<ButtonGroup>
									<Button
										onClick={this.handleToppings}
										value="boba"
										name="boba"
										active={this.state.toppings === 'boba'}
										color={this.state.toppings === 'boba' ? 'info' : 'dark'}
									>
										BOBA
									</Button>
									<Button
										value="tea jelly"
										name="teaJelly"
										active={this.state.toppings === 'teaJelly'}
										color={this.state.toppings === 'teaJelly' ? 'info' : 'dark'}
									>
										TEA JELLY
									</Button>
									<Button
										value="pudding"
										name="pudding"
										active={this.state.toppings === 'pudding'}
										color={this.state.toppings === 'pudding' ? 'info' : 'dark'}
									>
										PUDDING
									</Button>

									<Button
										value="red bean"
										name="redBean"
										active={this.state.toppings === 'redBean'}
										color={this.state.toppings === 'redBean' ? 'info' : 'dark'}
									>
										RED BEAN
									</Button>
									<Button
										value="fresh fruit"
										name="freshFruit"
										active={this.state.toppings === 'freshFruit'}
										color={
											this.state.toppings === 'freshFruit' ? 'info' : 'dark'
										}
									>
										FRESH FRUIT
									</Button>
									<Button
										value="lychee  jelly"
										name="lycheeJelly"
										active={this.state.toppings === 'lycheeJelly'}
										color={
											this.state.toppings === 'lycheeJelly' ? 'info' : 'dark'
										}
									>
										LYCHEE JELLY
									</Button>
								</ButtonGroup>
							</Col>
						</Row>
					</Form>
					<Button onClick={this.handleSubmit}>SUBMIT</Button>
				</Card>
			</Col>
		);
	}
}

export default OrderCard;

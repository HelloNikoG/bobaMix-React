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

class OrderCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: ' ❓',
			sugarLevel: ' ❓',
			temp: ' ❓',
			teaBase: ' ❓',
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

	handleSelection = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		alert(
			`Thanks ${this.state.name}! \n We will text you when your order is ready!`
		);
		e.preventDefault();
	};

	handleToppings = (e) => {
		let { value, active } = e.target;
		this.setState((e) => {
			let selected = e.toppings;
			return (selected[value] = active);
		});
	};

	render() {
		return (
			<Col className="mt-3">
				<Alert color="info" isOpen={true} className="sticky-top ">
					<Row>
						<Col md="6">
							<h4>Building your order:</h4>
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
								sugar: <strong>{this.state.sugarLevel}</strong>
							</p>
						</Col>
						<Col>
							<p>
								size: <strong>{this.state.size}</strong>
							</p>
						</Col>
						<Col>
							<p>
								tea base: <strong>{this.state.teaBase}</strong>
							</p>
						</Col>
					</Row>
					<Row>
						<Col>Toppings:</Col>
					</Row>
				</Alert>

				<Form onSubmit={this.handleSubmit}>
					<Card>
						<FormText color="muted">
							Input your name and number and we will text you when your order is
							ready!
						</FormText>

						<Row>
							<Col>
								<Label htmlFor="customer name">
									<Input
										type="text"
										id="customer name"
										name="name"
										value={this.state.name}
										placeholder="name"
										onChange={this.handleSelection}
									/>
								</Label>
							</Col>
							<Col>
								<Label htmlFor="phone number">
									<Input
										type="text"
										id="phone number"
										name="phoneNum"
										value={this.state.phoneNum}
										placeholder="phone number"
										onChange={this.handleSelection}
									/>
								</Label>
							</Col>
						</Row>
					</Card>

					<Row>
						<Col className="mx-2">
							<Card className="mt-3">
								<Row>
									<Col>
										<h4>temperature</h4>
									</Col>
								</Row>

								<Row>
									<Col>
										<Button
											className="px-3 mr-1 "
											onClick={this.handleSelection}
											name="temp"
											value="hot"
											active={this.state.size === 'hot' ? true : false}
											color={this.state.temp === 'hot' ? 'danger' : 'dark'}
										>
											HOT
										</Button>
										<Button
											className="px-3 ml-1"
											onClick={this.handleSelection}
											name="temp"
											value="iced"
											active={this.state.size === 'iced' ? true : false}
											color={this.state.temp === 'iced' ? 'primary' : 'dark'}
										>
											ICED
										</Button>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col>
							<Card className="mt-3">
								<Row>
									<Col>
										<h4>sweetness</h4>
									</Col>
								</Row>

								<Row>
									<Col>
										<Button
											onClick={this.handleSelection}
											name="sugarLevel"
											value="25%"
											active={this.state.sugarLevel === '25%' ? true : false}
											color={this.state.sugarLevel === '25%' ? 'info' : 'dark'}
										>
											25%
										</Button>
										<Button
											onClick={this.handleSelection}
											name="sugarLevel"
											value="50%"
											active={this.state.sugarLevel === '50%'}
											color={this.state.sugarLevel === '50%' ? 'info' : 'dark'}
										>
											50%
										</Button>
										<Button
											onClick={this.handleSelection}
											name="sugarLevel"
											value="75%"
											active={this.state.sugarLevel === '75%'}
											color={this.state.sugarLevel === '75%' ? 'info' : 'dark'}
										>
											75%
										</Button>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className="col-md-6 mt-2">
							<Card className="mt-3">
								<h4>drink size</h4>
								<Row>
									<Button
										className="mx-5"
										onClick={this.handleSelection}
										name="size"
										value="small"
										active={this.state.size === 'small'}
										color={this.state.size === 'small' ? 'info' : 'dark'}
									>
										SMALL
									</Button>
									<Button
										className="mx-5"
										onClick={this.handleSelection}
										name="size"
										value="medium"
										active={this.state.size === 'medium'}
										color={this.state.size === 'medium' ? 'info' : 'dark'}
									>
										MEDIUM
									</Button>
									<Button
										className="mx-5"
										onClick={this.handleSelection}
										name="size"
										value="large"
										active={this.state.size === 'large'}
										color={this.state.size === 'large' ? 'info' : 'dark'}
									>
										LARGE
									</Button>
								</Row>
							</Card>
						</Col>
						<Col className="col-md-6 mt-2">
							<Card>
								<h4>tea base🧋</h4>

								<Button
									className="px-auto mx-1"
									onClick={this.handleSelection}
									name="teaBase"
									value="milk tea"
									active={this.state.teaBase === 'milk tea'}
									color={this.state.teaBase === 'milk tea' ? 'info' : 'dark'}
								>
									MILK TEA
								</Button>
								<Button
									className="px-1 mx-1"
									onClick={this.handleSelection}
									name="teaBase"
									value="black"
									active={this.state.teaBase === 'black'}
									color={this.state.teaBase === 'black' ? 'info' : 'dark'}
								>
									BLACK
								</Button>
								<Button
									className="px-1 mx-1"
									onClick={this.handleSelection}
									name="teaBase"
									value="green"
									active={this.state.teaBase === 'green'}
									color={this.state.teaBase === 'green' ? 'info' : 'dark'}
								>
									GREEN
								</Button>
								<Button
									onClick={this.handleSelection}
									name="teaBase"
									value="oolong"
									active={this.state.teaBase === 'oolong'}
									color={this.state.teaBase === 'oolong' ? 'info' : 'dark'}
								>
									OOLONG
								</Button>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className="mt-3">
							<h4>toppings</h4>
							<Button>t1</Button>
							<Button>t2</Button>
							<Button>t3</Button>
							{/* <ButtonGroup>
									<Button
										onClick={this.handleToppings}
										value="boba"
										name="boba"
										active={this.state.toppings === 'boba'}
										color={
											this.state.toppings.boba === 'boba' ? 'info' : 'dark'
										}
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
								</ButtonGroup> */}
						</Col>
					</Row>
				</Form>
				<Button onClick={this.handleSubmit}>SUBMIT</Button>
			</Col>
		);
	}
}

export default OrderCard;

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

const toppings = [
	{
		name: 'BOBA',
		price: 0.5,
	},
	{
		name: 'HERBAL JELLY',
		price: 0.5,
	},
	{
		name: 'PUDDING',
		price: 0.5,
	},
	{
		name: 'RED BEAN',
		price: 0.5,
	},
];
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
			ready!\n ${this.state.drinkBase}`
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

	render() {
		return (
			<Col>
				<Alert color="info" isOpen={true} className="sticky-top">
					Building your order ​🧋​👌​:
					<Row>
						<Col>
							<p>temp:{this.state.temp}</p>
						</Col>
						<Col>
							<p>size:{this.state.size}</p>
						</Col>
						<Col>
							<p>sugar:{this.state.sugarLevel}</p>
						</Col>
					</Row>
					<Row>
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
								<h4>tea drinkBase 🧋</h4>
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
										active={this.state.size === 'boba'}
										color={this.state.size === 'boba' ? 'info' : 'dark'}
									>
										BOBA
									</Button>
									<Button>HERB JELLY</Button>
									<Button>PUDDING</Button>
								</ButtonGroup>
								<ButtonGroup className="mb-5">
									<Button>RED BEAN</Button>
									<Button>FRESH FRUIT</Button>
									<Button className="pt-1 pb-1 ">LYCHEE JELLY</Button>
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

import React, { Component } from 'react';
import {
	Alert,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	Row,
	Card,
	FormText,
	CardImg,
	CardText,
	CardBody,
	CardImgOverlay,
	CardTitle,
	CardGroup,
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
		let { value, checked } = e.target;
		this.setState((e) => {
			let selected = e.toppings;
			return (selected[value] = checked);
		});
	};

	render() {
		const displayToppings = Object.keys(this.state.toppings).filter(
			(x) => this.state.toppings[x]
		);
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
						<Col>
							Toppings:
							<br />
							{`${displayToppings}`}
						</Col>
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
										type="tel"
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
										<h4>Size & Temperature</h4>
									</Col>
								</Row>

								<Row>
									<Col>
										<Card className="border-0">
											<CardBody>
												<Button
													className="px-3 mr-1 border-danger btn-block "
													onClick={this.handleSelection}
													name="temp"
													value="hot"
													active={this.state.size === 'hot' ? true : false}
													color={
														this.state.temp === 'hot' ? 'danger' : 'transparent'
													}
												>
													Hot
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card className="border-0">
											<CardBody>
												<Button
													className="px-3 ml-1 border-primary btn-block"
													onClick={this.handleSelection}
													name="temp"
													value="iced"
													active={this.state.size === 'iced' ? true : false}
													color={
														this.state.temp === 'iced'
															? 'primary'
															: 'transparent'
													}
												>
													Iced
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
								<Row>
									<Col lg="4">
										<Card className="p-0">
											<CardBody className="p-1">
												<Button
													className="p-2 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="small"
													active={this.state.size === 'small'}
													color={
														this.state.size === 'small' ? 'info' : 'transparent'
													}
												>
													Small (8oz)
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card className="p-0">
											<CardBody className="p-0">
												<Button
													className="m-3 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="medium"
													active={this.state.size === 'medium'}
													color={
														this.state.size === 'medium'
															? 'info'
															: 'transparent'
													}
												>
													Medium (12oz)
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="12">
										<Card className="p-0">
											<CardBody className="p-0">
												<Button
													className="m-3 btn-block border-dark"
													onClick={this.handleSelection}
													name="size"
													value="large"
													active={this.state.size === 'large'}
													color={
														this.state.size === 'large' ? 'info' : 'transparent'
													}
												>
													Large (16oz)
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<Card className="mt-3">
								<CardImg src="assets/percent.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>Sweetness</h4>
										</Col>
									</Row>
								</CardImgOverlay>

								<Row>
									<Col lg="4">
										<Card>
											<CardBody className="p-0">
												<Button
													className="m-5 border-dark btn-block "
													onClick={this.handleSelection}
													name="sugarLevel"
													value="25%"
													active={
														this.state.sugarLevel === '25%' ? true : false
													}
													color={
														this.state.sugarLevel === '25%'
															? 'info'
															: 'transparent'
													}
												>
													25%
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody>
												<Button
													className="m-5 btn-block border-dark"
													onClick={this.handleSelection}
													name="sugarLevel"
													value="50%"
													active={this.state.sugarLevel === '50%'}
													color={
														this.state.sugarLevel === '50%'
															? 'info'
															: 'transparent'
													}
												>
													50%
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col lg="4">
										<Card>
											<CardBody>
												<Button
													className="m-5 btn-block border-dark"
													onClick={this.handleSelection}
													name="sugarLevel"
													value="75%"
													active={this.state.sugarLevel === '75%'}
													color={
														this.state.sugarLevel === '75%'
															? 'info'
															: 'transparent'
													}
												>
													75%
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Card>
						</Col>

						<Col md="6" className="mt-2">
							<Card>
								<CardImg src="assets/bottles.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>Tea base</h4>
										</Col>
									</Row>
								</CardImgOverlay>
								<Row>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="p-1 mx-1"
													onClick={this.handleSelection}
													name="teaBase"
													value="milk tea"
													active={this.state.teaBase === 'milk tea'}
													color={
														this.state.teaBase === 'milk tea'
															? 'info'
															: 'transparent'
													}
												>
													Milk Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="px-1 mx-1"
													onClick={this.handleSelection}
													name="teaBase"
													value="black"
													active={this.state.teaBase === 'black'}
													color={
														this.state.teaBase === 'black'
															? 'info'
															: 'transparent'
													}
												>
													Black Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													className="btn-block"
													onClick={this.handleSelection}
													name="teaBase"
													value="green"
													active={this.state.teaBase === 'green'}
													color={
														this.state.teaBase === 'green'
															? 'info'
															: 'transparent'
													}
												>
													Green Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<Button
													onClick={this.handleSelection}
													name="teaBase"
													value="oolong"
													active={this.state.teaBase === 'oolong'}
													color={
														this.state.teaBase === 'oolong'
															? 'info'
															: 'transparent'
													}
												>
													Oolong Tea
												</Button>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className="mt-3">
							<Card>
								<CardImg src="assets/bobaCup.jpg" />
								<CardImgOverlay>
									<Row>
										<Col>
											<h4>toppings</h4>
										</Col>
									</Row>
								</CardImgOverlay>

								<Row className="m-2 p-1">
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Boba Pearls
												<br />
												<Input
													type="checkbox"
													value="Boba Pearls"
													onChange={this.handleToppings}
												>
													Boba Pearls
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Red Bean
												<br />
												<Input
													type="checkbox"
													value="Red Bean"
													onChange={this.handleToppings}
												>
													Red Bean
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Tea Jelly
												<br />
												<Input
													type="checkbox"
													value="Tea Jelly"
													onChange={this.handleToppings}
												>
													Tea Jelly
												</Input>
											</CardBody>
										</Card>
									</Col>
								</Row>

								<Row className="m-2 p-1">
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Pudding
												<br />
												<Input
													type="checkbox"
													value="Pudding"
													onChange={this.handleToppings}
												>
													Pudding
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Mixed Fruit
												<br />
												<Input
													type="checkbox"
													value="Mixed Fruit"
													onChange={this.handleToppings}
												>
													Miced Fruit
												</Input>
											</CardBody>
										</Card>
									</Col>
									<Col>
										<Card>
											<CardBody>
												<CardTitle />
												Lychee Jelly
												<br />
												<Input
													type="checkbox"
													value="Lychee Jelly"
													onChange={this.handleToppings}
												>
													Lychee Jelly
												</Input>
											</CardBody>
										</Card>
									</Col>
								</Row>
							</Card>

							{/* <ButtonGroup>
									<Button
										onClick={this.handleToppings}
										value="boba"
										name="boba"
										active={this.state.toppings === 'boba'}
										color={
											this.state.toppings.boba === 'boba' ? 'info' : 'transparent'
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

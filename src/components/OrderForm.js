import React, { Component } from 'react';
import Image from './Image';
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	ButtonGroup,
	ButtonToggle,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
	FormFeedback,
	Card,
	CardTitle,
	CardText,
	CardImg,
	FormText,
	CardHeader,
	CardSubtitle,
} from 'reactstrap';

class OrderForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			size: '',
			sugarLevel: '',
			drinkBase: '',
			milk: '',
			toppings: '',
			name: '',
			phoneNum: '',
			szActive1: null,
			szActive2: null,
			szActive3: null,
			suActive1: null,
			suActiv2: null,
			suActive3: null,
			teaActive1: null,
			teaActive2: null,
			teaActive3: null,
			teaActive4: null,
		};
	}

	handleSubmit = (event) => {
		alert(
			`Thanks ${this.state.name}! \n we will text you when your order is ready!\n ${this.state.drinkBase}`
		);
		event.preventDefault();
	};

	handleSize = (event) => {
		this.setState({
			size: event.target.value,
			szActive1: event.target.value,
		});
		console.log(this.state.size);
	};
	handleSugarLevel = (event) => {
		this.setState({
			sugarLevel: event.target.value,
		});
	};

	handleDrinkBase = (event) => {
		this.setState({
			drinkBase: event.target.value,
		});
	};

	handleToppings = (event) => {
		this.setState({
			toppings: event.target.value,
		});
	};

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

	render() {
		const divStyle = {
			backgroundColor: '#cccc',
		};

		return (
			<div className="col">
				cont
				<div className="row" style={divStyle}>
					row
					<div className="col" style={divStyle}>
						you selected: {this.state.size}
					</div>
				</div>
				<Card>
					<Card className="col border-dark border-left-0 rounded-0">
						<CardTitle>Start your order</CardTitle>
						<FormText color="muted">
							Input your name and number and we will text you when your order is
							ready!
						</FormText>
						<Form onSubmit={this.handleSubmit}>
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
							<hr />
							<div className="row">
								size
								<br />
								<div className="col">
									<ButtonGroup className="btn-block">
										<Button
											onClick={this.handleSize}
											value="Small"
											outline
											color="dark"
											active={this.state.szActive1}
										>
											Small
										</Button>
										<Button
											onClick={this.handleSize}
											value="Medium"
											outline
											color="dark"
											active={this.state.szActive1}
										>
											Medium
										</Button>
										<Button
											onClick={this.handleSize}
											value="Large"
											outline
											color="dark"
											active={this.state.szActive1}
										>
											Large
										</Button>
									</ButtonGroup>
									<p>{this.state.size}</p>
								</div>
								<div className="col">
									<ButtonGroup className="btn-block ">
										<Button
											onClick={this.handleSugarLevel}
											value="25%"
											outline
											color="dark"
										>
											25%
										</Button>
										<Button
											onClick={this.handleSugarLevel}
											value="50%"
											outline
											color="dark"
										>
											50%
										</Button>
										<Button
											onClick={this.handleSugarLevel}
											value="75%"
											outline
											color="dark"
										>
											75%
										</Button>
									</ButtonGroup>
								</div>
							</div>
							<div className="row">
								<ButtonGroup className="btn-block ">
									<Button
										onClick={this.handleDrinkBase}
										value="Black Tea"
										outline
										color="dark"
										active
									>
										Black Tea
									</Button>
									<Button
										onClick={this.handleDrinkBase}
										value="Green Tea"
										outline
										color="dark"
									>
										Green Tea
									</Button>
									<Button
										onClick={this.handleDrinkBase}
										value="Oolong Tea"
										outline
										color="dark"
									>
										Oolong Tea
									</Button>
									<Button
										onClick={this.handleDrinkBase}
										value="Milk Tea"
										outline
										color="dark"
									>
										Milk Tea
									</Button>
								</ButtonGroup>
							</div>

							<div className="row">
								<select>
									<option>topping 1</option>
									<option>topping 2</option>
									<option>topping 3</option>
								</select>
							</div>

							<div className="row">
								you selected: <strong>{this.state.sugarLevel}</strong>
							</div>
							{/* <div className="col">
								<Button
									className="btn-block rounded-0 m-0 p-2 "
									type="submit"
									outline
									dark
								>
									submit order
								</Button>
							</div> */}
							{/* <FormGroup row>
								<Label for="customerName" sm={2}>
									Name
								</Label>
								<div className="col-sm-10">
									<Input
										type="name"
										name="name"
										id="customerName"
										placeholder="Niko G"
									/>
								</div>
							</FormGroup>
							<FormGroup row>
								<Label for="customerPhoneNum" sm={2}>
									Phone number
								</Label>
								<div className="col-sm-10">
									<Input
										type="tel"
										name="phone num"
										id="customerPhoneNum"
										placeholder="123-456-7890"
									/>
								</div>
							</FormGroup> */}
							<hr />
							{/* Buttons */}
							{/* 
							<FormGroup tag="fieldset">
								<legend>Radio Buttons</legend>
								<FormGroup check inline>
									<div className="btn btn-group btn-group-toggle">
										<Label
											className="btn btn-outline-dark rounded-0"
											data-toggle="btn"
											check
										>
											<Input type="radio" name="radio1" checked /> Option one
										</Label>
									</div>
								</FormGroup>
								<FormGroup check inline>
									<div className="btn btn-group btn-group-toggle">
										<Label
											className="btn btn-outline-dark rounded-0"
											data-toggle="btn"
											active
										>
											<Input type="radio" name="radio1" /> Option two
										</Label>
									</div>
								</FormGroup>
								<FormGroup check disabled inline>
									<Label check>
										<Input type="radio" name="radio1" /> Option three
									</Label>
								</FormGroup>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> Check me out
								</Label>
							</FormGroup> */}
							<Button
								onclick={this.rSelected}
								className="btn-block rounded-0 m-0 p-2 "
								type="submit"
								outline
								dark
							>
								submit order
							</Button>
						</Form>
					</Card>
				</Card>
			</div>
		);
	}
}

export default OrderForm;
// btn-block rounded-0

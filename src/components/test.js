// import React, { useState } from 'react';
// import { ButtonGroup, Button } from 'reactstrap';

// const types = ['Cash', 'Credit Card', 'Bitcoin'];

// const ButtonToggle = styled(Button)`
// 	opacity: 0.6;
// 	${({ active }) =>
// 		active &&
// 		`
//     opacity: 1;
//   `}
// `;
// function ToggleGroup() {
// 	const [active, setActive] = useState(types[0]);
// 	return (
// 		<ButtonGroup>
// 			{types.map((type) => (
// 				<ButtonToggle
// 					key={type}
// 					active={active === type}
// 					onClick={() => setActive(type)}
// 				>
// 					{type}
// 				</ButtonToggle>
// 			))}
// 		</ButtonGroup>
// 	);
// }

// function Test() {
// 	return <div>hello there</div>;
// }

// export default Test;

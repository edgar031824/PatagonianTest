import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction: column;
	background-color: #FFFFFF;
	width:100vw;
	height:30vh;
	`;

const Img = styled.img`
	width: 200px;
	height: 40px;
	`;

const Header = () => {
	return (
		<Wrapper data-testid='wrapper'>
			<Img src="https://patagonian.it/assets/img/logo-nbar.png" alt="" />
		</Wrapper>
	);
};

export default Header;
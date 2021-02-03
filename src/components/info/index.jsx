import React from 'react';
import { Avatar } from 'antd';
import { Descriptions } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
	display:flex;
	justify-content:center;
	flex-wrap: wrap;
`
const Info = () => {
	const descriptionStyle = {
		maxWidth: '30rem',
		maxHeight: '5rem',
		marginLeft: '2rem'
	}
	return (
		<Wrapper data-testid='wrapper'>
			<Avatar
				size={150}
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxFpTe7cagDqaHfvNXlMJaKj8wVhFI77ITbw&usqp=CAU"
				style={{ boxShadow: "1.5px 1.5px 8px #1890ff" }}
			/>
			<Descriptions title="User Info" layout="vertical" style={descriptionStyle}>
				<Descriptions.Item label="UserName">Nicolas Batalla</Descriptions.Item>
				<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
				<Descriptions.Item label="Live">Montevideo, Uruguay</Descriptions.Item>
				<Descriptions.Item label="Address">
					av 3N # 3 an 80
    		</Descriptions.Item>
			</Descriptions>,
		</Wrapper >
	);
};

export default Info;
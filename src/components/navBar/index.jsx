import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Styles from './navBar.module.scss';
import { withRouter } from "react-router-dom";

const NavBar = ({ location }) => {
	const currentPage = location.pathname.length > 1 ? location.pathname.substr(1) : 'info'
	const [current, setCurrent] = useState(currentPage);
	const onMenuClick = (event) => {
		setCurrent(event.key);
	}

	return (
		<div className={Styles.container}>
			<Menu onClick={(e) => onMenuClick(e)} selectedKeys={[current]} mode="horizontal" className={Styles.centerNav}>
				<Menu.Item key="info" >
					<Link to={"/"}>Personal information</Link>
				</Menu.Item>
				<Menu.Item key="images">
					<Link to={"/images"}>Images gallery</Link>
				</Menu.Item>
				<Menu.Item key="table">
					<Link to={"table"}>Purchases</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default withRouter(NavBar);
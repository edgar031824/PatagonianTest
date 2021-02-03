import renderer from 'react-test-renderer';
import React from 'react';
import NavBar from '../components/navBar';
import { createMemoryHistory } from "history";
import { Router } from "react-router";;
describe('NavBar component', () => {

	it.skip('should match snapshot', () => {
		const history = createMemoryHistory();
		const tree = renderer.create(<Router history={history}> <NavBar /></ Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../components/header';
import { cleanup, render } from '@testing-library/react';
describe('Header component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should match snapshot', () => {
		const tree = renderer.create(<Header />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

it('should render a wrapper component', () => {

	const { getByTestId } = render(<Header />);
	expect(getByTestId('wrapper')).toBeDefined();
});
import renderer from 'react-test-renderer';
import React from 'react';
import Info from '../components/info';
import { cleanup, render } from '@testing-library/react';
describe('Info component', () => {
	afterEach(() => {
		cleanup();
	});

	beforeEach(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // deprecated
				removeListener: jest.fn(), // deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});
	it('should match snapshot', () => {
		const tree = renderer.create(<Info />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render a wrapper component', () => {
		const { getByTestId } = render(<Info />);
		expect(getByTestId('wrapper')).toBeDefined();
	});
});
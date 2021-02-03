import renderer from 'react-test-renderer';
import React from 'react';
import Table from '../components/table';
import { cleanup, render } from '@testing-library/react';
describe('Table component', () => {

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
		const tree = renderer.create(<Table />).toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render a table component', () => {
		const { getByTestId } = render(<Table />);
		expect(getByTestId('table')).toBeDefined();
	});
});

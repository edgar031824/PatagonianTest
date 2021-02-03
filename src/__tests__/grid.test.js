import renderer from 'react-test-renderer';
import React from 'react';
import Grid from '../components/grid';
import { imageContext } from '../context/imagesContext';
import { cleanup, render } from '@testing-library/react';
describe('Grid component', () => {

	afterEach(() => {
		cleanup();
	});
	it('should match snapshot', () => {
		const tree = renderer.create(
			<imageContext.Provider
				value={{
					imagesData: [],
					addImage: jest.fn(),
					deleteImage: jest.fn(),
					getImages: jest.fn(),
					loading: false,
					setLoading: jest.fn(),
					copyData: []
				}}
			><Grid /></imageContext.Provider>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render the empty component if there are not images added', () => {

		const { getByTestId } = render(
			<imageContext.Provider
				value={{
					imagesData: [],
					addImage: jest.fn(),
					deleteImage: jest.fn(),
					getImages: jest.fn(),
					loading: false,
					setLoading: jest.fn(),
					copyData: []
				}}
			><Grid /></imageContext.Provider>
		);
		expect(getByTestId('empty')).toBeDefined();
	});
});
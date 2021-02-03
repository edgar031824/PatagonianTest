import React, { useState, createContext, useEffect } from 'react';
import { IMAGES } from '../data/purchaseInfo';
import baseRequest from '../axios';

export const imageContext = createContext();

const ImagesProvider = ({ children }) => {
	const [imagesData, setImagesData] = useState([]);
	const [copyData, setCopyData] = useState(IMAGES);
	const [loading, setLoading] = useState(false);
	const [deletedRecord, setDeletedRecord] = useState({});
	const addImage = async () => {
		const imageToAdd = copyData[0];

		try {
			const added = await baseRequest.post('/images', imageToAdd);
			setImagesData([...imagesData, added.data]);
			setLoading(false)
		} catch (error) {
			console.warn(error);
		}
	};
	const deleteImage = async (id) => {
		const deleted = IMAGES.filter(item => item.id === id)[0];

		try {
			await baseRequest.delete(`/images/${id}`);
			setDeletedRecord(deleted);
			setLoading(false)
		} catch (error) {
			console.warn(error);
		}
	}
	const getImages = async () => {
		try {
			const results = await baseRequest.get('/images');
			setImagesData(results.data);
			setLoading(false)
		} catch (error) {
			console.warn(error);
		}
	}

	useEffect(() => {
		let updatedCopyData = null;
		if (!(Object.keys(deletedRecord).length)) {
			updatedCopyData = copyData.filter(item => {
				const record = imagesData.find(item2 => item2.id === item.id)
				return record ? record.id !== item.id : true
			});
		}

		if (updatedCopyData) setCopyData(updatedCopyData);
	}, [imagesData]);

	useEffect(() => {
		if (Object.keys(deletedRecord).length) {
			const updatedData = imagesData.filter(item => item.id !== deletedRecord.id);
			setImagesData(updatedData);
			setDeletedRecord({});
			setCopyData([...copyData, deletedRecord]);
		}
	}, [deletedRecord]);

	return (
		<imageContext.Provider
			value={{
				imagesData,
				addImage,
				deleteImage,
				getImages,
				loading,
				setLoading,
				copyData
			}}
		>
			{children}
		</imageContext.Provider>
	);
}

export default ImagesProvider;
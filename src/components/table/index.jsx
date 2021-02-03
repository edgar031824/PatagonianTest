import React from 'react';
import { PURCHASE_INFO, COLUMNS } from '../../data/purchaseInfo';
import { Table as AntTable } from 'antd';

const Table = () => {
	return (
		<AntTable
			columns={COLUMNS}
			dataSource={PURCHASE_INFO}
			style={{ margin: "0 3rem 3rem" }}
			pagination={false}
			data-testid="table"
		/>
	);
};

export default Table;
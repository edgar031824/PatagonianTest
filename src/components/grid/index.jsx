import React, { useContext, useEffect } from 'react';
import { Row, Col, Button, Card, Spin, Empty } from 'antd';
import Styles from './grid.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
import { imageContext } from '../../context/imagesContext';

const Wrapper = styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
`
const Grid = () => {
  const {
    imagesData,
    addImage,
    deleteImage,
    getImages,
    loading,
    setLoading,
    copyData
  } = useContext(imageContext);
  const onAddImage = () => {
    setLoading(true);
    addImage();
  }
  const onDeleteImage = (id) => {
    setLoading(true);
    deleteImage(id);
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  let content = <Spin indicator={antIcon} />;

  if (!loading && imagesData.length) {
    content = (
      <>
        <Row style={{ margin: "0 10rem 10rem" }}>
          {imagesData.map(item => (
            <Col className={Styles.column} key={item.id} span={8} xs={24} sm={12} md={8} lg={8} xl={6}>
              <Card
                hoverable
                cover={<img alt="example" src={item.img} loading="lazy" />}
                className={Styles.card}
                loading={!imagesData.length ? true : false}
              >
                <Button type="primary" onClick={() => onDeleteImage(item.id)}>
                  Delete
								</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  } else if (!(imagesData.length)) {
    content = (
      <Empty description={"No images"} data-testid="empty" />
    )
  }

  useEffect(() => {
    setLoading(true);
    getImages();
  }, []);

  return (
    <Wrapper>
      <Button
        type="primary"
        onClick={() => onAddImage()}
        icon={<PlusOutlined />}
        style={{ marginBottom: "5rem" }}
        disabled={!(copyData.length)}
        data-testid="add-btn"
      >
        Add image
			</Button>
      {content}
    </Wrapper>
  );
};

export default Grid;
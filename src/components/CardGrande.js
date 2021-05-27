import React, { useState } from "react";
import { Card, Row, Col, Rate, Typography, Image, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
export default function CardGrande() {
  const [size, setSize] = useState("small");
  const { Text } = Typography;
  const handleSizeChange = (e) => {
    setSize({ size: e.target.value });
  };
  return (
    <div>
      <Row className="row">
        <Col className="cardStyle" span={8}>
          <Card title="Benyi" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/g1.jpg?alt=media&token=6e0231be-76a5-4c25-8854-1073a0da7074"
              />
              <Rate disabled defaultValue={4} />
            </div>
            <Button
              className="ButtonStyle"
              shape="circle"
              icon={<DownloadOutlined />}
              size={size}
              onClick={() => alert("Download information the dog")}
            />
            <h2></h2>
            <Text type="secondary"> Download information</Text>
          </Card>
        </Col>
        <Col className="cardStyle" span={8}>
          <Card title="Lola" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/g2.jpg?alt=media&token=59984425-f4ba-4b34-98df-2d383f7f6791"
              />
              <Rate disabled defaultValue={4} />
            </div>
            <Button
              className="ButtonStyle"
              shape="circle"
              icon={<DownloadOutlined />}
              size={size}
              onClick={() => alert("Download information the dog")}
            />
            <h2></h2>
            <Text type="secondary"> Download information</Text>
          </Card>
        </Col>
        <Col className="cardStyle" span={8}>
          <Card title="Milca">
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/g3.jpg?alt=media&token=a919fd64-bdbf-40bd-9d48-1bb073e3077b"
              />
              <Rate disabled defaultValue={5} />
            </div>
            <Button
              className="ButtonStyle"
              shape="circle"
              icon={<DownloadOutlined />}
              size={size}
              onClick={() => alert("Download information the dog")}
            />
            <h2></h2>
            <Text type="secondary"> Download information</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

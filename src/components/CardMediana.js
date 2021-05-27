import React, { useState } from "react";
import { Card, Row, Col, Rate, Typography, Image, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
export default function CardMediana() {
  const [size, setSize] = useState("small");
  const { Text } = Typography;
  const handleSizeChange = (e) => {
    setSize({ size: e.target.value });
  };
  return (
    <div>
      <Row className="row">
        <Col className="cardStyle" span={8}>
          <Card title="Chiqui" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/m1.jpg?alt=media&token=1b51db5c-1698-4ba1-a883-7dd4097de9c4"
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
          <Card title="Sola" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/m5.jpg?alt=media&token=8714b080-0f3d-4865-bf63-1df502cc4ae8"
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
          <Card title="Leyla">
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/m3.jpg?alt=media&token=03d85917-9c8a-4989-914f-eb857393d885"
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

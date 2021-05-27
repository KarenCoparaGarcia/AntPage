import React, { useState } from "react";
import { Card, Row, Col, Rate, Typography, Image, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Modals from "./Modals";
export default function CardsModel() {
  const [size, setSize] = useState("small");
  const { Text } = Typography;
  const handleSizeChange = (e) => {
    setSize({ size: e.target.value });
  };
  return (
    <div>
      <Row className="row">
        <Col className="cardStyle" span={8}>
          <Card title="Lili" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/Lili.jpg?alt=media&token=b1b7f273-f71e-47ca-8f0e-17c7e7bcaa30"
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
            <Modals />
          </Card>
        </Col>
        <Col className="cardStyle" span={8}>
          <Card title="Bongo" bordered={false}>
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/Tomas.jpg?alt=media&token=4ebad52b-74a5-413f-a662-826215fe3a2c"
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
            <Modals />
          </Card>
        </Col>
        <Col className="cardStyle" span={8}>
          <Card title="Mia">
            <div className="centrar">
              <Image
                className="imagenStyle"
                src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/perritoguapo.jpg?alt=media&token=12907527-1eb6-47bd-9c78-e8e39ed67349"
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
            <Modals />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

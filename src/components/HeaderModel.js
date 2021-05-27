import React from "react";
import { Row, Col, Badge, Input } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;

export default function HeaderModel() {
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <Row className="Row">
        <Col span={16}>
          <Link to="/">
            <img
              className="logoStyle"
              src="https://firebasestorage.googleapis.com/v0/b/mascotas-81f7b.appspot.com/o/LogoDog.png?alt=media&token=01b039d4-53a0-427f-ab94-49d1b24e0ca8"
            />
          </Link>
        </Col>
        <Col span={4} style={{ paddingTop: "25px" }}>
          <Search
            placeholder="search"
            enterButton="Search"
            size="small"
            onSearch={onSearch}
          />
        </Col>
        <Col span={2} style={{ paddingLeft: "25px" }}>
          <Badge count={0} showZero>
            <a href="#" className="head-example" />
          </Badge>
        </Col>
        <Col span={2} style={{ paddingLeft: "10px" }}>
          <Link to="/Login">Login</Link>
        </Col>
      </Row>
    </div>
  );
}

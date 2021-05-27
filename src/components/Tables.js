import React from "react";
import { Table, Row, Col, Progress, Divider} from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
];

const data = [
  {
    key: "1",
    name: "Bily",
    age: 2,
  },
  {
    key: "2",
    name: "Lili",
    age: 4,
  },
  {
    key: "3",
    name: "Jack",
    age: 1,
  },
];
export default function Tables() {
  return (
    <div>
      <Row justify="space-between" className="FormatRow">
        <Col span={12} className="FormatCol">
          <Table columns={columns} dataSource={data} />
        </Col>
        <Col span={10} className="FormatCol">
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row justify="space-between" className="FormatRow">
        <Col span={12} className="FormatCol">
          <Table columns={columns} dataSource={data} />
        </Col>
        <Col span={10} className="FormatCol">
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={70} status="exception" />
          <Progress type="circle" percent={100} />
        </Col>
      </Row>
    </div>
  );
}

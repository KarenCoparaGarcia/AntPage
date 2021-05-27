import React from "react";
import { List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Maria",
  },
  {
    title: "Juan",
  },
  {
    title: "Pedro",
  },
  {
    title: "Solange",
  },
];
export default function Opiniones() {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="El proceso de adopción es super facil, deben proporcionar su información correcta y dar mucho amor a los animalitos"
            />
          </List.Item>
        )}
      />
    </div>
  );
}

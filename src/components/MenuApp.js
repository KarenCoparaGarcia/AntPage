import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  FileDoneOutlined,
  SmileOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
export default function MenuApp() {
  return (
    <div style={{ width: 200 }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileDoneOutlined />}>
          <Link to="/Guia">Guia de Adopción</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<SmileOutlined />} title="Razas">
          <Menu.Item key="5">
            <Link to="/RazasPequeñas">Razas pequeñas</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/RazasMedianas">Razas Medianas</Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/RazasGrandes">Razas Grandes</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<CommentOutlined />}>
          <Link to="/Comentarios">Comentarios</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

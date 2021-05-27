import React from "react";
import { Breadcrumb } from "antd";
export default function MenuSelecction() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="http://localhost:3000/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="http://localhost:3000/">Guia de Adopción</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

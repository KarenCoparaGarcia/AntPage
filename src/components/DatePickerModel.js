import React from "react";
import { DatePicker, Space } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function DatePickerModel() {
  return (
    <div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </div>
  );
}

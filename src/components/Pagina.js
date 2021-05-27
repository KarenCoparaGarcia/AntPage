import React, {useState} from "react";
import { Pagination } from "antd";

export default function Pagina() {
  const [current, setcurrent] = useState(5)
  const onChange = (page) => {
      console.log(page);
      setcurrent(current, page);
  };
  return (
    <div>
      <Pagination
        current={current}
        onChange={onChange}
        total={50}
      />
    </div>
  );
}

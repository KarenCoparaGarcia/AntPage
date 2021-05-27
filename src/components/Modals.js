import React, { useState } from "react";
import { Modal, Button, Steps } from "antd";

const { Step } = Steps;

export default function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Proceso de Adopcion
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Steps current={1}>
          <Step title="Start" description="Inicio de Adopción" />
          <Step title="In Progress" description="en Proceso de Adopción" />
          <Step title="Finished" description="Esta Adoptado" />
        </Steps>
      </Modal>
    </div>
  );
}

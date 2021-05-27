import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  TimePicker,
  Row,
  Col,
  Upload,
  Typography,
} from "antd";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function Guia() {
  const [componentSize, setComponentSize] = useState();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
    },
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <Title level={5}>Datos del Solicitante</Title>
          <hr></hr>
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Nombres Completos">
              <Input />
            </Form.Item>
            <Form.Item label="Sexo">
              <Radio.Group>
                <Radio value="Femenino">Femenino</Radio>
                <Radio value="Masulino">Masculino</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Ocupación">
              <Select>
                <Select.Option value="Estudiante">Estudiante</Select.Option>
                <Select.Option value="Profesional">Profesional</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Razas Tree Select">
              <TreeSelect
                treeData={[
                  {
                    title: "Razas Pequeñas",
                    value: "Razas Pequeñas",
                    children: [
                      {
                        title: "Chihuahua",
                        value: "Chihuahua",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Razas Cascader">
              <Cascader
                options={[
                  {
                    value: "Razas Pequeñas",
                    label: "Razas Pequeñas",
                    children: [
                      {
                        value: "Chihuahua",
                        label: "FrenchPoddle",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Fecha de Solicitud">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Cantidad">
              <InputNumber />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Title level={5}>Datos de Vivienda</Title>
          <hr></hr>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Tipo de vivienda">
              <Radio.Group>
                <Radio value="Arrendada">Arrendada</Radio>
                <Radio value="Propia">Propia</Radio>
                <Radio value="Edificio">Edificio</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Tiempo">
              <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
            </Form.Item>
            <Form.Item label="Foto de perfil">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="centrar">
        <Button className="ButtonStyle">Enviar</Button>
      </div>
    </div>
  );
}

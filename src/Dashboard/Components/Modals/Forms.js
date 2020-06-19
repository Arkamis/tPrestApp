import React from 'react';
import { Form, Input, InputNumber, Row, Col, Button, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

function ModalClient() {
    return (
        <Form
            name="addClient"
            scrollToFirstError
        >
            <Form.Item
                name="firstName"
                label="Nombre"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingrsar un nombre válido',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Apellido"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingrsar un nombre válido',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Correo Electrónico"
                rules={[
                    {
                        type: 'email',
                        message: 'El correo es inválido',
                    },
                    {
                        required: true,
                        message: 'Favor de ingresar un correo electrónico',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Contraseña"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingresar una contraseña válida',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirmar contraseña"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Favor de confirmar su contraseña',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('Las contraseñas no coinciden');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Teléfono"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingresar un número de teléfono válido',
                    },
                ]}
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>

            <Form.Item label="Captcha" extra="¿No eres un robot? Ingresa la cadena de texto del captcha">
                <Row gutter={8}>
                    <Col span={12}>
                        <Form.Item
                            name="captcha"
                            noStyle
                            rules={[
                                {
                                    required: true,
                                    message: 'Favor de ingrsar las 6 letrs del Captcha',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Button>Get captcha</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}

function ModalPago() {
    const normFile = e => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
      };

    return (
        <Form
            name="addPayment"
            scrollToFirstError
        >
            <Form.Item
                name="client"
                label="Cliente"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese nombre del Cliente',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="deuda"
                label="Deuda"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese el título de la deuda',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="cantidad"
                label="Cantidad"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese una cantidad valida',
                        whitespace: true,
                    },
                ]}>
                <InputNumber />
            </Form.Item>
            
            <Form.Item label="Subir archivo">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargar</p>
                        <p className="ant-upload-hint">Soporte para una carga simple o masiva.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
        </Form>
    )
}

function ModalDeuda() {
    return (
        <Form
            name="addDebt"
            scrollToFirstError
        >
            <Form.Item
                name="owner"
                label="Dueño de la deuda"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingrsar un nombre válido',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="title"
                label="Título de la deuda"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingresar un titulo',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="description"
                label="Descripción"
                rules={[
                    {
                        required: true,
                        message: 'Favor de ingresar un titulo',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="cantidad"
                label="Cantidad"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese una cantidad valida',
                        whitespace: true,
                    },
                ]}>
                <InputNumber />
            </Form.Item>

            <Form.Item
                name="noPayments"
                label="Número de pagos"
                rules={[
                    {
                        required: true,
                        message: 'Ingrese una cantidad valida',
                        whitespace: true,
                    },
                ]}>
                <InputNumber />
            </Form.Item>

            <Form.Item 
                name="freq"
                label="Frecuencia de pago">
                <Select>
                    <Select.Option value="Semanal">Semanal</Select.Option>
                    <Select.Option value="Quincenal">Quincenal</Select.Option>
                    <Select.Option value="Mensual">Mensual</Select.Option>
                </Select>
            </Form.Item>
        </Form>
    )
}

export { ModalClient, ModalPago, ModalDeuda };
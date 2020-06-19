import React from 'react';
import {Form,Input,Tooltip,Row,Col,Button} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function ModalClient(){
    return(
        <Form
            name="register"
            scrollToFirstError
                >
                <Form.Item
                    name="nickname"
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
                    name="nickname"
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

function ModalPago(){
    return(
        <Form
                name="register"
                scrollToFirstError
                >
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
                    name="nickname"
                    label={
                    <span>
                        Nombre Completo&nbsp;
                        <Tooltip title="Ingrese el nombre del usuario a registrar">
                        <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                    }
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

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                    ]}
                >
                </Form.Item>
            </Form>
    )
}

function ModalDeuda(){
    return(
        <Form
        name="register"
        scrollToFirstError
        >
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
            name="nickname"
            label={
            <span>
                Nombre Completo&nbsp;
                <Tooltip title="Ingrese el nombre del usuario a registrar">
                <QuestionCircleOutlined />
                </Tooltip>
            </span>
            }
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

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
            ]}
        >
        </Form.Item>
    </Form>
    )
}

export {ModalClient, ModalPago, ModalDeuda};
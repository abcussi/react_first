import React, { useState, useEffect, useReducer } from 'react';
import { Wrapper } from '../Wrapper/index';
import { MailOutlined, LockOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker, message } from 'antd';

const initialState = {
  email: '',
  password: '',
  age: '',
  name: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case "GREET":
      return { ...state, ...action }
    default:
      return { ...state, ...action }
  }
}


export function Register() {
  const [showPassword, setShowPassport] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);

  const [formule] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value);
    alert('datos ok');


    setState(value);

    formule.resetFields();
  }

  useEffect(() => {
    setState({ type: 'GREET' });
  }, []);

  return (
    <Wrapper>
      <div className="register">
        <div className="register__card" >
          <h1 className="register__title">Let's go!</h1>
          <Form layout="vertical" onFinish={handleSubmit} form={formule} name="control-hooks">
          <Form.Item label="nombre" name="name">
              <Input
                type="name"
                placeholder="ingresa tu nombre"
                
                size="large"
              />
            </Form.Item>
            <Form.Item label="apellido" name="lastName">
              <Input
                type="lastName"
                placeholder="ingresa tu apellido"
                
                size="large"
              />
            </Form.Item>
            <Form.Item label="edad:" name="age">
              <DatePicker
                format="DD/MM/YYYY"
                prefix={<ClockCircleOutlined />}
                size="large"
                on
              />
            </Form.Item>
            <Form.Item label="email:" name="email">
            <Input
                type="email"
                placeholder="ingresa tu email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
           
            <Form.Item>
              <Button style={{ height: 40 }} htmlType="submit" type="primary" >
                registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

    </Wrapper>
  )
}
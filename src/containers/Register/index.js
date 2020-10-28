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
    alert('se presiono el boton y se pasaron los datos');


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

      <style jsx>{`
        .register {
          background-position: bottom;
          background-size: cover;
          height: calc(100vh - 137px);
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .register__card {
          width: 460px;
          background:#fff;
          border-radius: 8px;
          box-shadow: 0 0 100px -52px rgba(0,0,0, 0.75);
          padding: 0 35px;
        }
        .register__title {
          text-align: center;
          color: #333;
          margin-top: 45px;
          font-weight: 700;
        }
        .register__input .login__showPassword {
          position: absolute;
          font-size: 13px;
          cursor: pointer;
          text-decoration: none;
          right: 8px;
          bottom: 10px;
          color: #5f48ea;
          font-style: oblique;
        }
        @media (max-width: 500px) {
          .login__card {
            width: 400px;
          }
        }
      `}</style>
    </Wrapper>
  )
}
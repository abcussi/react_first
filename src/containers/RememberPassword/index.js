import React, { useState, useEffect } from 'react';

import { Wrapper } from '../Wrapper/index';

import { MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';

export function RememberPassword() {
  const [form, setForm] = useState({ email: '', password: '' })

  const [formule] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value)
    message.success('datos ok');
    formule.resetFields();
  }

  useEffect(() => {
    message.success('la pagina fue cargada')
  }, []);

  return (
    <Wrapper inLogin>
      <div className="remember">
        <div className="login__card" >
          <h1 className="login__title">bienvenido otra vez</h1>
          <Form layout="vertical" onFinish={handleSubmit} form={formule} name="control-hooks">
            <Form.Item label="Email:" name="email">
              <Input
                type="email"
                placeholder="ingresa tu email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{ height: 40 }}
                type="primary"
                htmlType="submit"
                block
              >enviame el link</Button>
            </Form.Item>
          </Form>
        </div>
       </div>

      <style jsx>{`
        .remember {
          background: url('https://app-cdn.clickup.com/login-bg.5ff304517621ee7b0287.svg') no-repeat;
          background-position: bottom;
          background-size: cover;
          height: calc(100vh - 137px);
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .login__card {
          width: 460px;
          background:#fff;
          border-radius: 8px;
          box-shadow: 0 0 100px -52px rgba(0,0,0, 0.75);
          padding: 0 35px;
        }
        .login__title {
          text-align: center;
          color: #333;
          margin-top: 45px;
          font-weight: 700;
        }
        .login__input a {
          position: absolute;
          font-size: 13px;
          text-decoration: none;
          right: 8px;
          bottom: 10px;
          color: #5f48ea;
          font-style: oblique;
        }
        .login__motto {
          color: #fff;
          letter-spacing: 2px;
          font-size: 11px;
          mergin-top: 25px;
          font-weight: 600;
          margin-top: 25px;
          text-transform: uppercase;
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
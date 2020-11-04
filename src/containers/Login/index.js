import React, { useState, useEffect } from 'react';

import { Wrapper } from '../Wrapper/index';
import Link from 'next/link'

import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, Button, message } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

import {
  USER_SINGIN_SUCCESS
} from '../../constants/ActionTypes'

export function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const dispach = useDispatch();
  const auth = useSelector(store => store.auth);

  const [formule] = Form.useForm();

  const handleSubmit = async (value) => {
    value.societyId = 'fafc7359-0139-43d7-9d00-1828d90cc407'

    try {
      const response = await fetch('https://dbcolegios.blockchainconsultora.com/users/login', { method: 'post', body: JSON.stringify(value), headers: { Accept: 'application/json', 'Content-Type': 'application/json' } });
      const data = await response.json();
      alert(`this is you Token: ${data.token}`)

      dispach({
        type: USER_SINGIN_SUCCESS,
        payload: {
          tokenUser: data.token,
          dataUser: value
        }
      })

      message.success('OK')
      formule.resetFields();

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    message.success('OK')
  }, []);

  return (
    <Wrapper inLogin>
      <div className="login">
        <div className="login__card" >
          <h1 className="login__title">Welcome back!</h1>
          <Form layout="vertical" onFinish={handleSubmit} form={formule} name="control-hooks">
            <Form.Item label="Email:" name="email">
              <Input
                type="email"
                placeholder="Enter your email"
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item
              label="Password:"
              name="password"
            >
              <div className="login__input">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  prefix={<LockOutlined />}
                  size="large"
                />
                <Link as="/remember-password" href="/remember-password">
                  <a>Forgot Password?</a>
                </Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                style={{ height: 40, marginBottom: 10 }}
                type="primary"
                htmlType="submit"
                block
              >Login</Button>
              <Button
                type="primary"
                onClick={() => {
                  console.log(auth);
                }}
              >Show is console the store</Button>
            </Form.Item>
          </Form>
        </div>
        <p className="login__motto">Let's make the work more productive, together.</p>
      </div>

    </Wrapper >
  )
}
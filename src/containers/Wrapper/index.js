import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Col, Layout } from 'antd';

export const Wrapper = ({ children, inLogin }) => {
  const router = useRouter();
  const { Header, Footer, Content } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", background: '#f0f2f5' }}>
          
          <Col span={6} offset={12} style={{ textAlign: 'right' }}>
            <span style={{ marginRight: 10 }}>
              {inLogin ? 'no tienes una cuenta?' : 'ya estas en la pagina'}
            </span>
            <Button
              shape="round"
              type="primary"
              onClick={() => router.push(`/${inLogin ? 'register' : 'login'}`)}
            >
              {inLogin ? 'registrate' : 'ingresa'}
            </Button>
          </Col>
        </Header>
        <Content>
          {children}
        </Content>
        
      </Layout>
    </>
  )
}

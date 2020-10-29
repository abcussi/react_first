import Link from 'next/link';
import { Button, Layout } from 'antd';
export default function Home() {
  const { Header, Footer, Content } = Layout;

  return (
      <Layout>
       
        <Content style={
          {
            display: 'flex',
            height: 800,
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center'
          }
        }>
          <h1>ingresa para continuar </h1>
          <div style={{ display: 'flex' }}>
            <Link as='/login' href="/login">
              <Button type="primary">ingresar</Button>
            </Link>
            <Link as='/register' href="/register">
              <Button style={{ marginLeft: 20 }} type="primary">registrarse</Button>
            </Link>
            <Link as='/termsConditions' href="/termsConditions">
              <Button style={{ marginLeft: 20 }} type="primary">terminos y condiciones</Button>
            </Link>
          </div>
        </Content>
        
      </Layout>
  )
}

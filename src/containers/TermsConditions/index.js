import { Button } from 'antd';
import { useRouter } from 'next/router';

export function TermsConditions() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', padding: 15 }}>
      <h1>Lee atentamente los terminos y condiciones</h1>
      <img src="terms.jpg" alt="pic" width="800" />
      <br />
      <br />
      <p>los datos son expresamente empresariales, la mayoria de las busquedas seran guardadas como datos para una investigacion de mercado se requerira los permisos de microfono y video de ser necesarios toda la informacion sera proporcionada por google y sus aplicaciones asociadas</p>
     
      <Button type="primary" onClick={() => router.push('/')}> volver</Button>

      <style jsx>{`
      p {
        text-align: center;
      } 
    `}</style>
    </div>
  )
}
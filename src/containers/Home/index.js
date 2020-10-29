import React from 'react';
import { Wrapper } from '../Wrapper/index';
import { Button } from 'antd';
import { useRouter } from 'next/router';


export function Home() {
  
    const router = useRouter();
    return (
        <Wrapper>
      <div style={{ textAlign: 'center', padding: 250 , height:'84vh'}}>
       <h1>
           
           THIS IS HOME
       </h1>
      
         <Button type="primary" onClick={() => router.push('/')}>Back to index</Button>
  
        <style jsx>{`
        p {
          text-align: left;
        } 
      `}</style>
      </div>
      </Wrapper>
    )
  }
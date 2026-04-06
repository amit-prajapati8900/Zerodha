import React from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';
export default function SupportPage() {
    return(
        <>
        <div style={{padding:"60px", backgroundColor:"#387ed1"}}>
        <Hero />
        </div>
        <CreateTicket />
        </>
      )
}
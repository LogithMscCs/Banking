import './home.css'
import React from "react";
import Card from 'react-bootstrap/Card';
import bank from '../src/images/bank.webp';
export default function Home() {
  return (
    <div >
   <br/> <center> <h2>LUCKY BANK</h2></center> <br/>
 
   <div className="marquee-container">
      <div className="marquee">
     
      </div>
    </div>
  <center>
    <Card style={{ width: '50%' , height:'50%'}}>
    
      <Card.Body>
        <Card.Title>LUCKY BANK</Card.Title>
        <Card.Text>
        “Everyday is a bank account, and the time is our currency. No one is rich, no one is poor, we’ve got 24 hours each.”
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
    <br/>
    <br/>
    <br/>
     </div>
  )
}

 
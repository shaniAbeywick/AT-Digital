import React from 'react'
import '../styles/Footer.css'
import {Container,Row,Col} from 'react-bootstrap';
import logo from "../assets/White Logo.png"
import frame from "../assets/Frame 505.png"


function Footer() {
  return (
    <div className='Footer'>
        <Container fluid>
            <Row>
                <Col className="ft-1" xs={12} md={12} xl={4}>
                         <img src={logo} alt="logo"/>
                         <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </Col>
                <Col className="ft-2" xs={12} md={6} xl={4}>
                    <h5>Our Technologies </h5>
                       <ul>
                        <li >ReactJS</li>
                        <li >Gatsby</li>
                        <li >NextJS</li>
                        <li>
                        NodeJS
                        </li>
                        <li>
                        GraphQL
                        </li>
                        <li>
                        Laravel
                        </li>

                        </ul> 
                    
                </Col>
                <Col className="ft-3" xs={12} md={6} xl={4}>
                <h5>Our Services</h5>
                       <ul>
                        <li >Social media Marketing</li>
                        <li >Web & Mobile App Development</li>
                        <li >Data & Analytics</li>
                        <li>
                        Google Marketing solutions
                        </li>
                        <li>
                        Search Engine Optimization
                        </li>
                        

                        </ul> 
                </Col>
            </Row>
           <Row>
             <Col className="d-flex justify-content-center">
             <img src={frame} alt="terms" />
             </Col>
            
           </Row>
        </Container>
        </div>
        
       
  )
}

export default Footer;

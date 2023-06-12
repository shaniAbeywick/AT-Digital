import React from 'react'
import HeroSection from '../components/HeroSection';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Image2 from '../assets/image 2.jpg'
import Image1 from '../assets/image 1.jpg'

import "../styles/Home.css";


function Home() {
    return (
        <div className='home'>


            <HeroSection />
             





            <Row className='firstRow'>
                <Col xs={12} sm={12} md={6}>
                    <Card border="light" className='Card_1'>
                        <Card.Img  src={Image2} />

                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Card border="light"  className='Card_2'>

                        <Card.Body>
                            <Card.Title className='Cardtitle-1'>Web & Mobile App Development</Card.Title>
                            <Card.Text className='Cardtext-1'>
                                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                            </Card.Text>
                            <Button className='btn' >LEARN MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='secondRow'>
                <Col xs={12} sm={12} md={6}>
                    <Card border="light" className='Card_3' >

                        <Card.Body>
                            <Card.Title className='Cardtitle-2'>Digital Strategy Consulting</Card.Title>
                            <Card.Text className='Cardtext-2'>
                                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                            </Card.Text>
                            <Button className='btn' >LEARN MORE</Button>
                        </Card.Body>
                    </Card>

                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Card  border="light" className='Card_4'>
                        <Card.Img  src={Image1} />

                    </Card>
                </Col>
            </Row>

         







        </div>







    )
}

export default Home;

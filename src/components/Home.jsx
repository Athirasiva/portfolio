import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import profile from '../image2.png'

function Home() {
  return (
    <>
        <Container >
      <Row className='mt-5'>
        <Col>
            <h4>Hi, Im Joe</h4>
            <h5>Frontend Developer</h5>
            <p className='me-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Quidem accusantium voluptate voluptates nisi, dolorum quas! Molestias, officia dolores dolorem laborum rem quaerat, incidunt voluptate fugit maxime voluptas sit saepe quae!</p>
             <Button variant="primary" size="sm" active> Hire Me!</Button>
        </Col>
        <Col>
        <img src={profile} alt=""   className='' style={{height:'50vh'}} />
        </Col>
      </Row>
      </Container>
       
    </>
  )
}

export default Home
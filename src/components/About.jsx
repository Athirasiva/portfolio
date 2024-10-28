import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
  return (
    <>
        <Container className='border border-danger border-5 mt-5 '>
      <Row className='mt-5'>
        <Col>
        <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt=""  style={{height:'50vh'}} className='mb-5'  />

        </Col>
        <Col>
        <h4>About me!</h4>
        <h5 className='text-danger'>Joe - Software Developer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam delectus ipsa hic facilis, explicabo aliquam maiores dolorem est deserunt sed libero facere fugit optio aliquid, quasi quis repellat eaque? Magnam.</p>
        <div>
        <i class="fa-brands fa-linkedin me-3" ></i>
        <i class="fa-brands fa-instagram me-3"></i>
        <i class="fa-brands fa-twitter me-3"></i>
        <i class="fa-brands fa-facebook me-3"></i>
        </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Skills() {
  return (
    <>
    <Container className='bg-dark text-light mt-5 '>
        <div className='mt-5'>
       <h5 style={{textAlign:'center' }}>My Skills</h5>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Consequatur provident optio ex non facere vero laborum, aut vel a corporis iste perferendis pariatur dolor, odit, sapiente error ullam eos deserunt.</p>
        </div>
        <Row className='mt-5'>
            <Col>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-75 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-50 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-50 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            </Col>
            <Col>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-50 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-75 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            <div className='w-100 bg-light rounded mb-5' style={{height:'10px'}}>
                <div className='w-50 bg-primary rounded' style={{height:'10px'}}></div>
            </div>
            </Col>
            <Col>
            <div className='border border-success mb-5' style={{height:'40px'}}>
               <h4 style={{textAlign:'right'}}>SKILLS</h4> 
            </div>
            <div className='border border-secondary' style={{height:'40px'}}>
               <h4 style={{textAlign:'right'}}>PAGE</h4> 
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Skills
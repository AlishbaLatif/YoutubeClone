import React from 'react'
import {Col,Container,Row} from "react-bootstrap"
import CategoryBar from '../CategoryBar'
import Video from '../Video'

const HomeScreen = () => {
  return (
    <>
    <Container>
    <CategoryBar />
    <Row>
        {[...new Array(20)].map(()=>{
            return(
            <Col lg={3} md={4}>
                <Video />
            </Col>
            )
        })}
    </Row>

    </Container>
    </>
  )
}

export default HomeScreen
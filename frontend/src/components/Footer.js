import React from 'react'
import { Container , Row ,Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className="footer">
            <Row>
                <Col className="text-center py-2">
                    Copyright &copy; 2021 
                </Col>
            </Row>
        </Container>
    )
}

export default Footer

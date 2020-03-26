import React from "react"
import {
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap"

const Contact = () => (
  
  
  <Row className="mb-5">
    <Col xs={12} md={6} className="mb-5 d-flex justify-content-center">
      <Card className="contact-card">
        <Card.Body>
          <Card.Title className="d-flex justify-content-center border-bottom pb-2 contact-card-title">
            Phone or text
          </Card.Title>
          
          <Card.Text className="d-flex justify-content-center">
            <Button
              href="tel:07538 829 692"
              variant="link"
              className="contact-link"
              >
                07538 829 692
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      
      <Col xs={12} md={6} className="mb-5 d-flex justify-content-center">
        <Card className="contact-card">
          <Card.Body>
            <Card.Title className="d-flex justify-content-center border-bottom pb-2 contact-card-title">
              Email
            </Card.Title>
            
            <Card.Text className="d-flex justify-content-center">
              <Button
                href="mailto:hoxtonwestmutualaid@gmail.com"
                variant="link"
                className="contact-link text-wrap"
                target="_blank" rel="noopener noreferrer"
                >
                  hoxtonwestmutualaid@gmail.com
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
)

export default Contact
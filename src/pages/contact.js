import React from "react"
import { 
  Row,
  Col,
  Accordion,
  Button 
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mapImage: file(relativePath: { eq: "hoxtonwestmap.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <SEO title="Contact" />
      
      <Row>
        <Col xs={12}>
          <Accordion
            id="sections"
            className="mb-5"
            >
              <Row>
                <Col xs="12">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h1 className="mb-3">
                      I want to volunteer
                    </h1>
                  </Accordion.Toggle>
                  
                  <Accordion.Collapse eventKey="0">
                    <Row className="mb-5">
                      <Col xs={12}>
                        <Row>
                          <Col xs={12}>
                            <p className="lead">
                              All volunteers that would like to help out please fill in your details at the link below.
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} className="d-flex justify-content-center mb-3">
                            <Button href="https://forms.gle/yMZGT5m2irvLpnxe7" className="flex">
                            Register
                          </Button>
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col xs={12}>
                          <p>
                            By registering your details as a volunteer will help us to match any requests that come through and identify areas that may need extra support.
                          </p>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col xs={12}>
                          <h2 className="mb-3">Keep up-to-date via social media</h2>
                          <p>
                            <Button href="https://www.facebook.com/groups/791760537983496/" variant="secondary">Facebook</Button>
                          </p>
                          <p>
                            <Button href="https://chat.whatsapp.com/ExfTKM1Cpdz9V9o9nWRDnX" variant="secondary">Whatsapp</Button>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12}>
                          <p>Join your street area WhatsApp group to get notified on assistance requests in your area that you could help out with</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                          <div style={{width: "400px"}}>
                            <Img fluid={data.mapImage.childImageSharp.fluid} />
                          </div>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col xs={12}>
                          <p>
                            <Button variant="link" href="https://chat.whatsapp.com/FM0nS1UUD5M4Ep3anLDIkC">Area A</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/LdD0leTB3twI68hvAoz3it">Area B</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2">Area C</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2">Area D</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5">Area E</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/GeYyjsKh4YkFPiRmjRMAC5">Area F</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/C8W5eFwSlYLLiIQXWyeqeN">Area G</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5">Area H</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/GOESEE8RUSk1Swwjep834F">Area I</Button><br />
                            <Button variant="link" href="https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5">Area J</Button><br />
                          </p>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col xs={12}>
                          <h2 className="mb-3">Completing assistance requests</h2>
                          
                          <p>
                            In line with the government guidelines of minimising your time outdoors, please only run assistance requests in conjunction with your own errands or exercise time.
                          </p>
                          <p className="lead">
                            For errands please make sure you are following the safety advice: 
                          </p>
                          <p>
                            Please read the following links as a guide of best practice.
                          </p>
                          <ul>
                            <li>
                              <Button
                                variant="link"
                                href="https://queercare.network/our-work/resources/covid-19/delivering-items-to-someone-in-self-isolation-protocol/">
                                Delivering items to someone in self isolation protocol
                              </Button>
                            </li>
                            <li>
                              <Button
                                variant="link"
                                href="https://wiki.queercare.network/index.php?title=Principles_and_assumptions_for_doing_support_work_in_the_covid-19_pandemic">
                                Principles and assumptions for doing support work in the covid-19 pandemic
                              </Button>
                            </li>
                          </ul>
                          
                          <p>
                            Please arrange for the money to be sent ideally by bank transfer to our mutual aid bank account (from which we will then reimburse you), or to be left under a mat/ in a flower pot etc. and for the change and receipt to be left in that same location. With shopping left at the door. Please walk away before the self isolating person opens the door. It is important the vulnerable person does not come in direct contact with you for their own protection.
                          </p>
                          <p>
                            In short, please wash your hands for at least 20 seconds and use hand sanitiser when possible before delivery.
                          </p>

                          <p>
                          More information on health and safety, safeguarding and further advice can be found on our 
                          <Button variant="link" href="https://drive.google.com/drive/folders/1q4ahDnigbdv-G0J83JuftwQ7e_iCpSSs">Google Share drive</Button>
                          </p>
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col>
                          <h2 className="mb-3">Other ways you can help</h2>
                          <ul>
                            <li>
                              Hackney foodbank: Donate goods to Florence Bennett Centre, Cherbury St, N1 6TL between 9am-12pm Mon-Thu. 
                              Or sign-up to a volunteer shift via this link: <a href="https://hackneyfoodbank.simplybook.it/v2/#book/count/1/">https://hackneyfoodbank.simplybook.it/v2/#book/count/1/</a>
                            </li>
                            <li>
                              Made in Hackney: Donate towards their crowdfunder to supply vulnerable community members with free food delivered to their door
                              <a href="https://www.crowdfunder.co.uk/made-in-hackney-4">https://www.crowdfunder.co.uk/made-in-hackney-4</a>
                            </li>
                            <li>
                              Good Gym: Organisation that helps those in need, providing social and practical support to those isolated. 
                              Still taking on new volunteers, sign-up via the link
                              <a href="https://www.goodgym.org/">https://www.goodgym.org/</a>
                            </li>
                            <li>
                              Dare to Care Packages: Donate items that will be used to make up care packages or volunteer to help with their logisitics
                              <a href="https://daretocarepackages.com/">https://daretocarepackages.com/</a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Col>
            </Row>
            
            <Row>
              <Col xs="12">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <h1>
                    I need help
                  </h1>
                </Accordion.Toggle>
                
                <Accordion.Collapse eventKey="1">
                  <Row>
                    <Col>
                      <p className="lead">Please put your request for help by clicking on the below link and then entering your details and request.</p>
                      <p>We will then put you in touch with somebody who can help</p>
                      <div className="d-flex justify-content-center">
                        <Button href="https://forms.gle/AmbJRrdN4QJVcPVGA">
                          Assistance request form
                        </Button>
                    </div>
                    <p className="lead">Alternatively, you can get in touch via email or phone</p>
                    
                    <div className="row my-5">
                      <div className="col-12">
                        <div className="card-deck justify-content-between">
                          <div className="card col-12 col-sm-5 text-center p-3">
                            <div className="card-body">
                              <p className="card-title">Call or text</p>
                              <h5><a href="tel:07538 829 692">07538 829 692</a></h5>
                            </div>
                          </div>

                          <div className="card col-12 col-sm-5 text-center p-3">
                            <div className="card-body">
                              <p className="card-title">Email</p>
                              <h5>
                                <a href="mailto:hoxtonwestmutualaid@gmail.com">
                                  hoxtonwestmutualaid@gmail.com
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Col>
            </Row>
          </Accordion>
        </Col>
      </Row>
    </Layout>
  )
  }
  
  export default ContactPage

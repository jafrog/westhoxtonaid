import React from "react"
import { 
  Row,
  Col,
  Button,
  Alert
} from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaClipboard,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaWhatsapp,
  FaExclamationTriangle,
} from "react-icons/fa"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceCards from "../components/resourceCards"

const areaWhatsapps = [
  {
    href: "https://chat.whatsapp.com/FM0nS1UUD5M4Ep3anLDIkC",
    area: "Area A"
  },
  {
    href: "https://chat.whatsapp.com/LdD0leTB3twI68hvAoz3it",
    area: "Area B",
  },
  {
    href: "https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2",
    area: "Area C",
  },
  {
    href: "https://chat.whatsapp.com/DHcCzfNGb52DR7WBxuhyM2",
    area: "Area D",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area E",
  },
  {
    href: "https://chat.whatsapp.com/GeYyjsKh4YkFPiRmjRMAC5",
    area: "Area F",
  },
  {
    href: "https://chat.whatsapp.com/C8W5eFwSlYLLiIQXWyeqeN",
    area: "Area G",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area H",
  },
  {
    href: "https://chat.whatsapp.com/GOESEE8RUSk1Swwjep834F",
    area: "Area I",
  },
  {
    href: "https://chat.whatsapp.com/I2MQD9NcERdGSAolmKrrA5",
    area: "Area J",
  },
]

const resources = [
  {
    title: "Hackney foodbank",
    text: "Needs donation of supplies urgently! Donate goods to Florence Bennett Centre, Cherbury St, N1 6TL between 9am-12pm Mon-Thu. Or sign-up to a volunteer shift via the link below",
    website: "https://hackneyfoodbank.simplybook.it/v2/#book/count/1/"
  },
  {
    title: "Made in Hackney",
    text: "Donate towards their crowdfunder to supply vulnerable community members with free food delivered to their door",
    website: "https://www.crowdfunder.co.uk/made-in-hackney-4"
  },
  {
    title: "Good Gym",
    text: "Organisation that helps those in need, providing social and practical support to those isolated. Still taking on new volunteers, sign-up via the link",
    website: "https://www.goodgym.org"
  },
  {
    title: "Dare to Care Packages",
    text: "Donate items that will be used to make up care packages or volunteer to help with their logisitics",
    website: "https://daretocarepackages.com/"
  },
]

const VolunteerPage = () => {
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
        <SEO title="Volunteer" />
        
        <Row>
          <Col>
            <h1 className="display-4">I want to volunteer</h1>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col>
            <Row className="mb-5">
              <Col xs={12} sm={8}>
                <p className="lead">
                  All volunteers that would like to help out please fill in your details
                </p>
                <p>
                  By registering your details as a volunteer will help us to match any requests that come through and identify areas that may need extra support.
                </p>
              </Col>
              <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center mb-3">
                <p>
                  <Button
                    href="https://forms.gle/yMZGT5m2irvLpnxe7"
                    target="_blank" rel="noopener noreferrer" 
                    className="d-flex align-items-center btn-lg btn-primary w-100">
                    <FaClipboard className="mr-1" />
                    Register to volunteer
                  </Button>
                </p>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12}>
              <h2>Keep up-to-date via social media</h2>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} className="mb-3 d-flex align-items-center justify-content-center">
              <Button
                href="https://www.facebook.com/groups/791760537983496/"
                variant="secondary"
                className="d-flex align-items-center mx-3"
                target="_blank" rel="noopener noreferrer" 
                >
                  <FaFacebookSquare className="mr-1"/>
                  Facebook
              </Button>
              <Button
                href="https://chat.whatsapp.com/ExfTKM1Cpdz9V9o9nWRDnX"
                variant="secondary"
                className="d-flex align-items-center"
                target="_blank" rel="noopener noreferrer" 
                >
                  <FaWhatsappSquare className="mr-1"/>
                  Whatsapp
              </Button>
            </Col>
          </Row>
          
          <Row className="mb-5">
            <Col xs={12} sm={6}>
              <div style={{width: "400px"}}>
                <Img fluid={data.mapImage.childImageSharp.fluid} />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <p>Join your street area WhatsApp group to get notified on assistance requests in your area that you could help out with</p>
              <Row>
                {areaWhatsapps.eachSlice(5).map((slice, index) => (
                  <Col xs={12} sm={6} key={index}>
                    {slice.map((link, index) => (
                      <Button
                        variant="outline-secondary"
                        href={link.href}
                        className="d-flex align-items-center justify-content-center mb-3"
                        target="_blank" rel="noopener noreferrer" 
                        key={index}
                        >
                        <FaWhatsapp className="mr-1"/>
                        {link.area}
                      </Button>
                    ))}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          
          <Row className="mb-5">
            <Col xs={12}>
              <h2 className="mb-3">Completing assistance requests</h2>
              
              <p>
                In line with the government guidelines of minimising your time outdoors, please only run assistance requests in conjunction with your own errands or exercise time.
              </p>
              <Alert variant="warning" className="d-flex align-items-center">
                <FaExclamationTriangle style={{
                  width: "2rem",
                  fontSize: "1.25rem",
                }} className="mr-3" />
                For errands please make sure you are following the  
                <Link to="/health" className="ml-1"> safety advice </Link>
              </Alert>
              <p>
                Please read the following links as a guide of best practice:
              </p>
              <ul>
                <li>
                  <Button
                    variant="link"
                    target="_blank" rel="noopener noreferrer" 
                    href="https://queercare.network/our-work/resources/covid-19/delivering-items-to-someone-in-self-isolation-protocol/">
                    Delivering items to someone in self isolation protocol
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    target="_blank" rel="noopener noreferrer" 
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
                <a
                  href="https://drive.google.com/drive/folders/1q4ahDnigbdv-G0J83JuftwQ7e_iCpSSs"
                  className="ml-1"
                  target="_blank" rel="noopener noreferrer" 
                >
                  Google Share drive
                </a>.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12}>
              <h2>Other ways to help</h2>
            </Col>
          </Row>
          
          <Row>
            <Col xs={12}>
              <ResourceCards resources={resources} perRow={3}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default VolunteerPage

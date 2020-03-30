import React from "react"
import {
  Row,
  Col,
  Alert
} from "react-bootstrap"
import {
  FaInfoCircle,
  FaExclamationTriangle
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About us" />
    
    <Row>
      <Col xs={12}>
        <h1 className="display-4">About us</h1>
      </Col>
    </Row>
    
    <Row className="mb-5">
      <Col xs={12}>  
        
        <p>
          We are a group of over 100 Hoxton West residents working together on a completely voluntary basis to help our community during the 
          coronavirus outbreak. We know how challenging this time is, whether you are in self-isolation and unable to shop for yourself, 
          missing friends and family and need someone to talk to or unable to walk your pets. These are all things that we can help with!
        </p>
        
        <p>
          On 15 March 2020, a few residents clubbed together to set us up. We now have over 100 volunteers (and counting!) who are providing 
          assistance to their fellow Hoxton West residents. Our aim is to support all residents who need us, either by assisting directly with 
          shopping collections, walking pets or calling anyone who needs to hear a friendly voice at this difficult time.
        </p>

        <h2 className="mt-5 mb-3">The way we work</h2>

        <p>
          All requests are logged centrally by our admin team and then passed to an appropriate volunteer, usually one who lives within a few 
          streets of the person requesting assistance. The volunteer will then get in touch to talk through the task and, if relevant, discuss 
          payment arrangements. 
        </p>
        
        <p>
          We do  not ask for money for our services, only for the goods that we might buy for you, and we ask our volunteers to keep copies of 
          all receipts for you to see before you make payment. We try to stick to bank transfer payments to limit risk of infection but we 
          understand that online transfers are not always possible. Where they are not possible, we will talk to the people requesting and 
          giving help beforehand to decide on the best way forward and we will always try to prioritise the needs of those requesting help. 
          We are currently considering different approaches to payments, and will let you know of any updates.
        </p>
        
        <p>
          We provide our volunteers with hygiene and safety guidance and strongly encourage them to follow it. We ask in return only that the 
          generosity and health of our volunteers is respected and that care is taken not to pass the virus to others if you are feeling unwell. 
          Equally, if you are a volunteer and you start to feel unwell, please let us know immediately. 
        </p>

        <p>
          Please only share personal information with us if you are happy for it to be shared with the volunteer assigned to you. Having said 
          that, we will only pass on personal information to volunteers that is strictly necessary to complete their task.
        </p>
        
        <Alert variant="info">
          <Row>
            <Col xs={12} sm={2} className="d-flex align-items-center">
              <FaInfoCircle style={{
                width: "3rem",
                fontSize: "2rem",
              }} className="mr-3" />
              Please note that we are:
            </Col>
            <Col xs={12} sm={10}>
              <ul>
                <li>
                  Community volunteer-based and not associated with or directed by any government department, agency or other company or group
                </li>
                <li>
                  Not able to help you with medical advice - we will share some practical information in the resources section about health and safety. 
                  For any other medical concerns or emergencies, we recommend contact the NHS or GP directly. Please contact the emergency services 
                  if you need help quickly
                </li>
                <li>
                  Not able to accept any liability in relation to the help you offer or request
                </li>
                <li>
                  Committed to the smooth running of this community initiative
                </li>
              </ul>
            </Col>
          </Row>
        </Alert>
      </Col>
    </Row>
    
    <Row>
      <Col xs={12}>
        <h2>Our principles</h2>
      </Col>
    </Row>
    
    <Row>
      <Col xs={12}>
        <p className="lead">
          We operate according to the following principles. 
        </p>

        <p>
          <ol>
            <li>
              We organise on the basis of solidarity, not charity
            </li>
            <li>
              We are against all forms of oppression, including but not limited 
              to, racism, sexism, ableism, ageism, homophobia, biphobia, transphobia, xenophobia and classism
            </li>
            <li>
              We work together on an equal basis, making collective decisions and 
              being responsible and accountable to each other in our actions within this group
            </li>
            <li>
              We are a self-organised, de-centralised community group who are independent from 
              all political parties, government/state agencies and authorities and other organisations and groups
            </li>
            <li>
              We extend mutual aid to all members of our community and see everyone as part of it, 
              regardless of immigration status or personal circumstances*
            </li>
            <li>
              We actively take initiative when both offering and receiving support
            </li>
            <li>
              We recognise that this crisis will affect some more than others, so we'll prioritize the needs of those most affected
            </li>
            <li>
              We prioritise health and safety in order to ensure that we do not 
              contribute to further spread of Covid-19, only leaving home when essential, 
              including when fulfilling support requests
            </li>
            <li>
              We will always try and keep our tasks local to respect time and resources of 
              all involved and support local shops and businesses in our community
            </li>
            <li>
              We recognise that we can both request and offer support, which is why our focus is on offering each other mutual aid and recognising the benefits of collective care and community organising
            </li>
          </ol>
        </p>
        
        <Alert variant="warning" className="mt-5">
          <Row>
            <Col xs={1} className="d-flex align-items-center">
              <FaExclamationTriangle style={{
                width: "3rem",
                fontSize: "2rem",
              }} className="mr-3" />
            </Col>
            <Col xs={11}>
              We don't and will not work in conjunction with any enforcement agencies or authorities,
              including the Home Office, Department for Work and Pensions and any other agency who
              pose a threat to people's right to access support and care as and when needed. We expect all members to adhere to this and will remove anyone from our group found
              to be working outside of the guidance and collective guidelines.
            </Col>
          </Row>
        </Alert>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage

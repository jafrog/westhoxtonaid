import React from "react"
import {
  Row,
} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResourceCards from "../components/resourceCards"

const supportResources = [
  {
    title: "Government registration for aid for extremely vulnerable",
    text: "Register for support if you have a medical condition that makes you extremely vulnerable to coronavirus",
    website: "https://www.gov.uk/coronavirus-extremely-vulnerable",
  },
  
  {
    title: "Hackney Council Support Services - Housing, Employment, Benefits",
    text: "Up-to-date Hackney support services still running during this time",
    website: "https://hackney.gov.uk/find-support-services",
  },
  
  {
    title: "Citizens Advice",
    phone: "020 8525 6350",
  },
  
  {
    title: "Age UK",
    text: "Support and advice available for older people online and via their helpline 0800 678 1602",
    website: "https://www.ageuk.org.uk/",
    phone: "0800 678 1602"
  },
  
  {
    title: "Hackney Quest",
    text: "Support for young people and families via food packages and over-the-phone support (Please scroll down their front page to find contact and service details)",
    website: "http://www.hackneyquest.org.uk",
  },
  
  {
    title: "Hackney Community Law Centre",
    text: "Free and independent legal advice and representation currently running online",
    website: "https://www.hclc.org.uk/",

  },
  
  {
    title: "Praxis",
    text: "Practical, legal and emotional support for migrants. Over-the-phone support",
    website: "https://www.praxis.org.uk/",
  },
  
  {
    title: "Hackney Chinese Community Services",
    text: "Social welfare advice over-the-phone",
    website: "https://www.hackneychinese.org.uk/",
  },
  
  {
    title: "Derman",
    text:  "Health related support services for Kurdish and Turkish communities",
    website: "http://derman.org.uk/en/",
  },
  
  {
    title: "Latin American Women’s Aid",
    text: "Support Latin American and BME women from violence. Advice and helplines available",
    website:  "http://lawadv.org.uk/en/",
  },
  
  {
    title: "Choice in Hackney",
    text: "Advocacy and Independent Living Services to disabled people",
    website: "http://www.choiceinhackney.org/",
  },
  
  {
    title: "Deafplus",
    text: "Deaf advice services",
    website: "https://www.deafplus.org/"
  }
]

const emergencyFood = [
  {
    title: "Hackney food bank",
    text: "You cannot just turn up at a food bank, you must be referred by a social worker, citizens advice or health visitor. Follow the link for more information on how to get help",
    website: "https://hackney.foodbank.org.uk/get-help/how-to-get-help/"
  },
  
  {
    title: "Made in Hackney",
    text:  "Free food delivery service to vulnerable members of Hackney community. Use this link refer yourself or someone else",
    website: "https://madeinhackney.org/"
  },
  
  {
    title: "Dare to Care (not launched yet)",
    text: "Will soon be able to provide care packages (food and sanitary items) to those in need",
    website:  "https://daretocarepackages.com/pre-order/",
  }
]

const mentalHealth = [
  {
    title: "Rethink",
    text: "Includes COVID-19 Mental Health Support Advice",
    website: "https://www.rethink.org",
  },
  
  {
    title: "Mind",
    text: "Lots of great information on looking after your mental wellbeing during the COVID-19 outbreak",
    website: "https://www.mind.org.uk/information-support/coronavirus-and-your-wellbeing/",
  },
  
  {
    title: "Young Mind",
    text: "Information, advice and helplines for young people and children",
    website: "https://youngminds.org.uk/find-help/get-urgent-help/",
  },
  {
    title: "Samaritans",
    text: "Including helpline",
    website: "https://www.samaritans.org/how-we-can-help/support-and-information/if-youre-having-difficult-time/if-youre-worried-about-your-mental-health-during-coronavirus-outbreak/",
  },
  {
    title: "Sane UK",
    text: "Including helpline",
    website: "http://www.sane.org.uk",
  },
  
  {
    title: "Silverline",
    text: "Telephone befriending service for the elderly",
    website: "https://www.thesilverline.org.uk/telephone-friendship/ ",
  }
]

const housing = [
  {  
    title: "Spitalfields Crypt Trust",
    text: "Helping those coping with addiction",
    website: "https://www.sct.org.uk/"
  },
  {
    title: "Engage Hackney",
    text: "Supports people aged 18+ with accommodation and housing needs",
    website: "https://www.riverside.org.uk/in-your-neighbourhood/north-london/care-and-support/engage-hackney/"
  },
  {
    title: "Shelter",
    text: "Housing advice and support services online or over the phone",
    website: "https://england.shelter.org.uk/get_help/local_services/london/hackney"
  },
  {
    title: "Spreadsheet of housing & homelessness orgs",
    text: "This was shared by a friend at Crisis - says which ones remain open as of 20/3/20.",
    website: "https://drive.google.com/drive/u/2/folders/1-w9mFBXMrNXCnADvpUznqaiJKmIO5m_T"
  },
  {
    title: "Council page on rough sleeping",
    text: "Much of it seems to be linking to charities & nothing COVID specific as yet",
    website: "https://hackney.gov.uk/rough-sleeping"
  },
]

const work = [
  {
    title: "Obtaining a sick-note online",
    text: "Official government guidance on getting a coronavirus-related isolation absence note",
    website: "https://www.gov.uk/government/news/online-isolation-notes-launched-providing-proof-of-coronavirus-absence-from-work",
  },
  
  {
    title: "Guidance for workers",
    text: "National government guidance for employees",
    website: "https://www.gov.uk/government/publications/guidance-to-employers-and-businesses-about-covid-19/covid-19-guidance-for-employees",
  },
]

const benefits = [
  {
    title: "Universal credit",
    text: "Official DWP site explaining how claims will work during the crisis",
    website: "https://www.understandinguniversalcredit.gov.uk/coronavirus/",
  }
]

const migrants = [
  {
    title: "Migrants Organise, Medact & Joint Council for Welfare of Immigrants",
    text: "Guide covering access to healthcare, translation, protection against hostile environment",
    website: "https://tinyurl.com/migrantmutualaid & cards https://tinyurl.com/nhsCOVIDinfocard ",
  },
  
  {
    title: "Migrant and Asylum Seeker support in London",
    text: "Facebook group set up by Lesbians and Gays Support the Migrants",
    website: "https://www.facebook.com/groups/193855082039231/members/",
  },
  
  {
    title: "Hackney Migrant Centre",
    text: "Drop-in centre closed but they continue to support people remotely & need donations",
    website: "https://hackneymigrantcentre.org.uk/covid-19-emergency-fund/",
  },
]

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    
    <Row>
      <h1>Support services</h1>
    </Row>
    
    <ResourceCards 
      resources={supportResources}
      perRow={3}
    />
      
      <Row>
        <h1>Emergency food</h1>
      </Row>
      
      <ResourceCards 
        resources={emergencyFood}
        perRow={3}
      />
  
      <Row>
        <h1>Mental health</h1>
      </Row>
      
      <Row>
        <p>All resources include access to urgent helplines and non-urgent contacts (online chat, email, phone..)</p>
      </Row>
      
      <ResourceCards 
        resources={mentalHealth}
        perRow={3}
      />

      <Row>
        <h1>Housing</h1>
      </Row>
      
      <ResourceCards 
        resources={housing}
        perRow={3}
      /> 
      
      <Row>
        <h1>Work</h1>
      </Row>
      
      <ResourceCards 
        resources={work}
        perRow={3}
      />
      
      <Row>
        <h1>Benefits</h1>
      </Row>
      
      <ResourceCards 
        resources={benefits}
        perRow={3}
      /> 
      
      <Row>
        <h1>Migrants</h1>
      </Row>
      
      <Row>
        <p>
          NOTE: We should never pass someone’s details to the council without their permission just in case they are undocumented and therefore do not want to be in contact with an arm of the state
        </p>
      </Row>
      
      <ResourceCards 
        resources={migrants}
        perRow={3}
      />
      
      <Row>
        <h1>Domestic violence</h1>
      </Row>    
      
      <Row>
        <p>
          I believe Grace / Olori (in our group) has worked in this area and may be a good person to advise on where to signpost if anyone presents with this issue - H
        </p>
      </Row> 
</Layout>
)

export default ResourcesPage

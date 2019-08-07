import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Row } from './components'

const multipleContent =[
  {
    backgroundColor: '#353535',
    contentLayout: 'right',
    callsToAction: {call: 'learn more', action: '#action'},
    coverImage: {sources: {0:{uri: 'https://rock.christfellowshipconference.com/GetImage.ashx?guid=2550f1e3-271d-4156-96ff-cfcac1345731'}}},
    imageRatio: "1by1",
    htmlContent: 'Discover more about our pastors, beliefs, and history',
    // subtitle: 'Subtitle',
    title: 'Want to learn more about Christ Fellowship?'
  },
  {
    backgroundColor: '#ffffff',
    contentLayout: 'right',
    // callsToAction: {call: 'learn more', action: '#action'},
    // coverImage: {sources: {0:{uri: 'https://rock.christfellowshipconference.com/GetImage.ashx?guid=2550f1e3-271d-4156-96ff-cfcac1345731'}}},
    // imageRatio: "16:9",
    title: '5 Steps to Building a Healthy Life',
    // subtitle: 'Subtitle',
    htmlContent: 'Sign up to receive this free resource and start becoming better you today'
  },
  {
    backgroundColor: '#535353',
    contentLayout: 'left',
    callsToAction: {call: 'learn more', action: '#action'},
    coverImage: {sources: {0:{uri: 'https://rock.christfellowshipconference.com/GetImage.ashx?guid=2550f1e3-271d-4156-96ff-cfcac1345731'}}},
    imageRatio: "1by1",
    title: 'Want to learn more about Christ Fellowship?',
    // subtitle: 'Subtitle',
    htmlContent: 'Discover more about our pastors, beliefs, and history'
  }
]
const content = {
  backgroundColor: '#353535',
  contentLayout: 'default',
  callsToAction: {call: 'learn more', action: '#action'},
  coverImage: {sources: {0:{uri: 'https://rock.christfellowshipconference.com/GetImage.ashx?guid=2550f1e3-271d-4156-96ff-cfcac1345731'}}},
  imageRatio: '16by9',
  htmlContent: 'Discover more about our pastors, beliefs, and history',
  subtitle: 'Subtitle',
  title: 'Want to learn more about Christ Fellowship?'
}


const App = () => {

  return (
         <div>
            <Row content={multipleContent} />
         </div>
          )
}

export default App

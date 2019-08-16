import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const App = () => {
  return (
    <div className='bg-dark'>
      <Row>
        <Media
          imageUrl='https://picsum.photos/375/812/?random'
          imageAlt='Some Alt'
          ratio="1by1">
          <h1 className="text-light">Hello There</h1>
        </Media>

        <Media
          imageUrl='https://picsum.photos/375/812/?random'
          imageAlt='Some Alt'
          ratio="4by3" />
      </Row>
      <Row>
        <Media
          imageUrl='https://picsum.photos/375/812/?random'
          imageAlt='Some Alt'
          ratio="1by1">
          <h1 className="text-light">Hello There</h1>
        </Media>

        <Media
          imageUrl='https://picsum.photos/375/812/?random'
          imageAlt='Some Alt'
          ratio="4by3" />

        <div className='bg-dark' style={{ height: 500, width: 500 }}>
          <Media
            imageUrl='https://picsum.photos/375/812/?random'
            imageAlt='Some Alt'
            ratio="21by9" />
        </div>
      </Row>

    </div>
  )
}

export default App

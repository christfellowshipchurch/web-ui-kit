import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const App = () => {
  return (
    <div className='container bg-light w-75'>
      <Block
        layout={'default'}
        media={{
          imageUrl: 'https://picsum.photos/id/652/200/300',
          imageAlt: 'Image Alt',
          ratio: '16by9',
          circle: true
        }}
      >

        <Block.Subtitle className={`text-muted font-weight-bold`}>
          This is the subtitle
          </Block.Subtitle>

        <Block.Title className={`titleWeight`}>
          One
        </Block.Title>

        <Block.Body className={`pt-1 pb-4 font-weight-light`}>

        </Block.Body>

      </Block>


    </div>
  )
}

export default App

import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const App = () => {
  return (
    <div className='container bg-light w-75'>
      <Block
        layout={'default'}
        imageUrl={'https://picsum.photos/id/652/200/300'}
        imageAlt={'Image Alt'}
        ratio={'4by3'}
      >

        <Block.Subtitle className={`text-muted font-weight-bold`}>
          This is the subtitle
          </Block.Subtitle>

        <Block.Title className={`titleWeight`}>
          One
          </Block.Title>

        <Block.Body className={`pt-1 pb-4 font-weight-light`}>

        </Block.Body>

        <Button call="Primary Lg" size="lg" type="link" />
        <Button call="Secondary Lg" size="lg" type="link" />
        <Button call="Teriary Lg" size="lg" type="link" />

        <hr></hr>

        <Button call="Primary" type="link" />
        <Button call="Secondary" type="link" />
        <Button call="Teriary" type="link" />

        <hr></hr>

        <Button call="Primary Sm" size="sm" type="link" />
        <Button call="Secondary Sm" size="sm" type="link" />
        <Button call="Teriary Sm" size="sm" type="link" />

      </Block>


    </div>
  )
}

export default App

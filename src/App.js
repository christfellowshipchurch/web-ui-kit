import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const App = () => {
  return (
    <div className='container bg-light w-75'>
      <Row>
        <Media
          layout={'default'}
          imageUrl={'https://picsum.photos/id/652/200/300'}
          imageAlt={'Image Alt'} />

        <Media
          layout={'default'}
          imageUrl={'https://picsum.photos/id/652/200/300'}
          imageAlt={'Image Alt'}
          circle ratio='4by3' />
      </Row>

      <Row>
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
            Default
          </Block.Title>

          <Block.Body className={`pt-1 pb-4 font-weight-light`}>
            {[0, 1, 2, 3, 4, 5, 6].map(n => <p>{n}</p>)}
          </Block.Body>
        </Block>

        <Block
          layout={'inverted'}
          imageUrl={'https://picsum.photos/id/652/200/300'}
          imageAlt={'Image Alt'}
          ratio={'4by3'}
        >

          <Block.Subtitle className={`text-muted font-weight-bold`}>
            This is the subtitle
          </Block.Subtitle>

          <Block.Title className={`titleWeight`}>
            Inverted
          </Block.Title>

          <Block.Body className={`pt-1 pb-4 font-weight-light`}>
            {[0, 1, 2, 3, 4, 5, 6].map(n => <p>{n}</p>)}
          </Block.Body>
        </Block>

        <Block
          layout={'left'}
          imageUrl={'https://picsum.photos/id/652/200/300'}
          imageAlt={'Image Alt'}
          ratio={'4by3'}
        >

          <Block.Subtitle className={`text-muted font-weight-bold`}>
            This is the subtitle
          </Block.Subtitle>

          <Block.Title className={`titleWeight`}>
            Content Left
          </Block.Title>

          <Block.Body className={`pt-1 pb-4 font-weight-light`}>
            {[0, 1, 2, 3, 4, 5, 6].map(n => <p>{n}</p>)}
          </Block.Body>
        </Block>

        <Block
          layout={'right'}
          imageUrl={'https://picsum.photos/id/652/200/300'}
          imageAlt={'Image Alt'}
          ratio={'4by3'}
        >

          <Block.Subtitle className={`text-muted font-weight-bold`}>
            This is the subtitle
          </Block.Subtitle>

          <Block.Title className={`titleWeight`}>
            Content Right
          </Block.Title>

          <Block.Body className={`pt-1 pb-4 font-weight-light`}>
            {[0, 1, 2, 3, 4, 5, 6].map(n => <p>{n}</p>)}
          </Block.Body>
        </Block>
      </Row>

    </div>
  )
}

export default App

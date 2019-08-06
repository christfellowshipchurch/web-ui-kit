import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import {Block, Row} from './components'

const App = () => {

  const mediaProps = {
    layout: 'default',
    imageUrl: 'https://rock.christfellowshipconference.com/GetImage.ashx?guid=2550f1e3-271d-4156-96ff-cfcac1345731',
    imageAlt: 'this is an an image',
    videoUrl: null,
    ratio: '16by9',
    className: 'smaller-img',
    rounded: false,
    media: null
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <Block className='bg-dark' media={mediaProps}>
            <Block.Title>
              Block Title
            </Block.Title>
            <Block.Subtitle>
              Subtitle
            </Block.Subtitle>
          </Block>

          <Row>
            
          </Row>

        </div>
      </div>
    </div>
  )
}

export default App

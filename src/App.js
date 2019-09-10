import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"

const App = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-4 bg-white">
          <TextInput
            label="Label"
            description="Description"
          />
        </div>
        <div className="col-4 bg-white">
          <TextInput
            label="Label"
            description="Description"
            placeholder="Placeholder"
          />
        </div>
        <div className="col-4 bg-white">
          <TextInput
            label="Label"
            description="Description"
            value="Value"
            withSuccess
          />
        </div>
        <div className="col-4 bg-white">
          <TextInput
            label="Label"
            error="Here's and error"
          />
        </div>
        <div className="col-4 bg-white">
          <TextInput
            label="Label"
            description="Description"
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default App

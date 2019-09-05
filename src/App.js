import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"

const App = () => {
  return (
    <div className='container w-75 mt-5'>
      <Media
        showControls
        videoUrl={videoUrl} />
    </div>
  )
}

export default App

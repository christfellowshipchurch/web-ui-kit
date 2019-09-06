import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"

const App = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-4">
          <Media
            showControls
            videoUrl={videoUrl}
            imageUrl="https://dev-rock.christfellowship.church/GetImage.ashx?guid=90443e44-039f-43c0-9cdf-f63498721ea7"
          />
        </div>
      </div>
    </div>
  )
}

export default App

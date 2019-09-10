import React from 'react'
import './components/styles/css/christ-fellowship-bootstrap.css'
import { faEnvelope } from '@fortawesome/fontawesome-pro-light'
import { Block, Row, TextInput, Dropdown, TextArea, Carousel, Accordion, Button, Media } from './components'

const videoUrl = "https://gochristfellowship.com/wp-content/uploads/2018/08/August_2018_Home_Video.mp4"

const App = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-4 p-5 bg-white">
          <Button type="primary" title="Title" onClick={() => console.log('Hello there')} />
          <Button type="primary" title="Title" disabled />
        </div>
        <div className="col-4 p-5 bg-white">
          <Button type="dark" title="Title" />
          <Button type="dark" title="Title" disabled />
        </div>
        <div className="col-4 p-5 bg-dark">
          <Button type="light" title="Title" />
          <Button type="light" title="Title" disabled />
        </div>
        <div className="col-4 p-5 bg-white">
          <Button type="link" title="Title" />
          <Button type="link" title="Title" disabled />
        </div>
      </div>
    </div>
  )
}

export default App
